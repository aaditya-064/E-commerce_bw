import { cartSchema } from "@/schemas/cart.schema";
import * as yup from "yup";

export type TCart = yup.InferType<typeof cartSchema>;
