import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please Enter a Valid Email...")
    .required("Required"),
  age: yup
    .number()
    .positive("Please Enter a Valid Age...")
    .integer()
    .required("Required"),
  password: yup.string().min(5).required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
