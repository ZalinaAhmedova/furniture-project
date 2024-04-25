import * as yup from "yup";

export const CardSchema = yup.object().shape({
  nameOnCard: yup
    .string()
    .matches(/^([^0-9a-z]*)\s([^0-9a-z]*)$/, "Invalid card name")
    .required("This field is required"),
  cardNumber: yup
    .string()
    .matches(/[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/, "Invalid card number")
    .required("This field is required"),
  expirationDate: yup
    .string()
    .matches(/[0-9]{2}\/[0-9]{2}$/, "Invalid expiration date")
    .required("This field is required"),
  cvvNumber: yup
    .string()
    .matches(/[0-9]{3}$/, "Invalid CVV number")
    .required("This field is required"),
});

export const DeliverySchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "Enter correct first name")
    .required("This field is required"),
  email: yup
    .string()
    .email()
    .required("This field is required"),
  country: yup.string().required("This field is required"),
  streetAdress: yup.string().required("This field is required"),
  city: yup.string().required("This field is required"),
  phoneNumber: yup
    .string()
    .matches(
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
      "Enter correct phone number"
    )
    .required("This field is required"),
});
