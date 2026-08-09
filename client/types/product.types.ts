import { productSchema } from "@/schemas/product.schema";
import * as yup from "yup";

export type TProduct = yup.InferType<typeof productSchema>;
