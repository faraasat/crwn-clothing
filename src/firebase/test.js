import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('User').doc('gsVDKdY4XpwF9UN8VFPg').collection('cartItems').doc('bx6KLK8jiJEfhLcJ4tUG');

// Another way to query if we want document
firestore.doc('/User/gsVDKdY4XpwF9UN8VFPg/cartItems/bx6KLK8jiJEfhLcJ4tUG');

// Another way to query if we want Collection
firestore.Collection('/User/gsVDKdY4XpwF9UN8VFPg/cartItems');

