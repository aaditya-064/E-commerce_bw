import * as yup from "yup";

//* login schema
export const loginSchema = yup.object({
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password is required"),
});

export const registerSchema = yup.object({
  full_name: yup.string().required("full_name is required"),
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password is required"),
  phone: yup.string(),
  c_password: yup.string(),
});
