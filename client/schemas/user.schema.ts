import * as yup from "yup";
import { imageSchema } from "./image.schema";

export const userSchema = yup.object({
  full_name: yup.string().required("Full name is required"),
  email: yup.string().email().required("Email is required"),
  profile_image: imageSchema.required("Profile image is required"),
  phone: yup.string().required("Phone is required"),
});
