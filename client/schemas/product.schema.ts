import * as yup from "yup";
import { imageSchema } from "./image.schema";

export const productSchema = yup.object({
  name: yup.string().required("Product name is required"),
  price: yup.number().required("Price is required").min(0),
  description: yup
    .string()
    .required("Description is required")
    .min(30)
    .max(500),
  cover_image: imageSchema.required("Cover image is required"),
  category: yup.string(),
  brand: yup.string(),
  images: yup.array().of(imageSchema).optional().nullable(),
  new_arrival: yup.boolean().default(true),
  is_featured: yup.boolean().default(false),
});
