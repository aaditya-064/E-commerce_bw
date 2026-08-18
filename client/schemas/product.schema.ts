import * as yup from "yup";
import { imageSchema } from "./image.schema";

export const productSchema = yup.object({
  _id: yup.string(),
  name: yup.string().required("Product name is required"),
  price: yup.number().required("Price is required").min(0),
  description: yup
    .string()
    .required("Description is required")
    .min(30)
    .max(500),
  cover_image: yup.mixed().required("Cover Image is required"),
  category: yup.object({
    name: yup.string(),
  }),
  brand: yup.object({
    name: yup.string(),
  }),
  images: yup.array().of(imageSchema).optional().nullable(),
  new_arrival: yup.boolean().default(true),
  is_featured: yup.boolean().default(false),
});
