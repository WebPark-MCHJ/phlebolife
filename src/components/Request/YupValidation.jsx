import * as yup from "yup";

export const YupValidation = yup.object().shape({
  name: yup
    .string()
    .required("required")
    .matches(/^[ A-Za-z]+$/i, "name-matches"),
  tel: yup
    .string()
    .required("required")
    .min(13, "min-number")
    .matches(/^[ 0-9+]+$/i, "tel-matches"),
  city: yup.string("city-required").required("city-required").nullable(),
});
