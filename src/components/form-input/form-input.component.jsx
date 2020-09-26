import React from "react";
import {
  FormInputGroup,
  FormInputTag,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormInputGroup>
      <FormInputTag onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </FormInputGroup>
  );
};

export default FormInput;
