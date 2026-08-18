import * as yup from "yup";

//* cart schema
export const cartSchema = yup.object({
  user: yup.string().required("user ID is required"),
  items: yup
    .array()
    .of(
      yup.object({
        product: yup.string().required("Product ID is required"),
        quantity: yup.number().min(1, "Quantity must be atleast 1").default(1),
      }),
    )
    .required("Items are required"),
});
