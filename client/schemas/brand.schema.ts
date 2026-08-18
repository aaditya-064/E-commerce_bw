import * as yup from "yup";
import { imageSchema } from "./image.schema";

export const brandSchema = yup.object({
  _id: yup.string(),
  name: yup.string().required("name is required"),
  description: yup.string(),
  logo: yup.mixed().required("Logo is required"),
  // logo: imageSchema.required("Logo is required"),
});
