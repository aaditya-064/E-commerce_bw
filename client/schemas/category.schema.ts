import * as yup from "yup";
import { imageSchema } from "./image.schema";

export const categorySchema = yup.object({
  name: yup.string().required("Category name is required").min(2).max(100),
  description: yup.string().min(25).max(500),
  logo: imageSchema.required("Logo is required"),
});
