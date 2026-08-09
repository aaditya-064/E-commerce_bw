import * as yup from "yup";
import { imageSchema } from "./image.schema";

export const brandSchema = yup.object({
  name: yup.string().required("name is required"),
  description: yup.string(),
  logo: imageSchema.required("Logo is required"),
});
