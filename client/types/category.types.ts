import { categorySchema } from "@/schemas/category.schema";
import * as yup from "yup";

export type TCategory = yup.InferType<typeof categorySchema>;
