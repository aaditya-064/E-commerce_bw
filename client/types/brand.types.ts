import { brandSchema } from "@/schemas/brand.schema";
import * as yup from "yup";

export type TBrand = yup.InferType<typeof brandSchema>;
