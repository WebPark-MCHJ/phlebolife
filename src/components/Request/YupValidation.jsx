import * as yup from "yup";

export const YupValidation = yup.object().shape({
  name: yup.string().required("required"),
  tel: yup
    .string()
    .required("required")
    .min(13, "min-number")
    .matches(/^[ 0-9+]+$/i, "tel-matches"),
  city: yup.string("city-required").required("city-required").nullable(),
});
