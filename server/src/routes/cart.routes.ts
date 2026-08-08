import express from "express";
import {
  addQuantity,
  create,
  drop,
  get,
  removeProduct,
} from "../controller/cart.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { All_Admins } from "../types/enum.types";
const router = express.Router();

// router.get("/", authenticate(All_Admins), getBrand);
// router.get("/user/:id", );

//* .single use garyo bhani "req.file" ma file aauxa
//* .array use garyo bhani "req.files" ma files aauxa
router.get("/:id", authenticate(All_Admins), get);
router.post("/", authenticate(All_Admins), create);
router.post("/add", authenticate(All_Admins), addQuantity);
router.delete(
  "/remove/:userId/:productId",
  authenticate(All_Admins),
  removeProduct,
);
//delete whole cart
router.delete("/delete", authenticate(All_Admins), drop);
// router.patch("/update", updateBrand);

export default router;
