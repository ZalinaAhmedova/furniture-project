import * as yup from "yup";

export const CardSchema = yup.object({
  nameOnCard: yup
    .string()
    .required("This field is required")
    .matches(/^([^0-9a-z]*)\s([^0-9a-z]*)$/, "Invalid card name"),
  cardNumber: yup
    .string()
    .required("This field is required")
    .matches(/[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/, "Invalid card number"),
  expirationDate: yup
    .string()
    .required("This field is required")
    .matches(/[0-9]{2}\/[0-9]{2}$/, "Invalid expiration date"),
  cvvNumber: yup
    .string()
    .required("This field is required")
    .matches(/[0-9]{3}$/, "Invalid CVV number"),
});

export const DeliverySchema = yup.object().shape({
  firstName: yup
    .string()
    .required("This field is required")
    .matches(/^([^0-9]*)$/, "Enter correct first name"),
  lastName: yup
    .string()
    .required("This field is required")
    .matches(/^([^0-9]*)$/, "Enter correct last name"),
  email: yup.string().required("This field is required").email(),
  country: yup.string().required("This field is required"),
  streetAdress: yup.string().required("This field is required"),
  city: yup.string().required("This field is required"),
  phoneNumber: yup
    .string()
    .required("This field is required")
    .matches(
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
      "Enter correct phone number"
    ),
});
