const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // This gives us a function in which we directly pass the secret

app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json()); // It tells the express to any comming request to convert it into a json
app.use(bodyParser.urlencoded({ extended: true })); // It ensures that url do not containes spaces and symbols
app.use(enforce.HTTPS({ trustProtoHeader: true })); // Used to redirect http req to https
app.use(cors()); // it stands for cross origin and it allows us to send data properly

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  }); // * means for every url
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server Running On Port " + port);
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
