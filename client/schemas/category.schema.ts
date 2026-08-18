import * as yup from "yup";

export const categorySchema = yup.object({
  _id: yup.string(),
  name: yup.string().required("Category name is required").min(2).max(100),
  description: yup.string().min(25).max(500),
  logo: yup.mixed().required("Logo is required"),
});
