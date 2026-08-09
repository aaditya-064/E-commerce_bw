import * as yup from "yup";

export const imageSchema = yup.object({
  path: yup
    .string()
    .url("Invalid image URL")
    .required("Image path is required"),
  public_id: yup.string().required("Public ID is required"),
});
