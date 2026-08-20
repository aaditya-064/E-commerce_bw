import express from "express";
import {
  addQuantity,
  create,
  drop,
  get,
  removeProduct,
} from "../controller/cart.controller";
import { authenticate } from "../middlewares/auth.middleware";
const router = express.Router();

// router.get("/", authenticate(All_Admins), getBrand);
// router.get("/user/:id", );

//* .single use garyo bhani "req.file" ma file aauxa
//* .array use garyo bhani "req.files" ma files aauxa
router.get("/:id", authenticate(), get);
router.post("/", authenticate(), create);
router.post("/add", authenticate(), addQuantity);
router.delete("/remove/:userId/:productId", authenticate(), removeProduct);
//delete whole cart
router.delete("/delete", authenticate(), drop);
// router.patch("/update", updateBrand);

export default router;
