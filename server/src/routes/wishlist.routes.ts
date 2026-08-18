import express from "express";
import { get, add, remove } from "../controller/wishlist.controller";
import { authenticate } from "../middlewares/auth.middleware";
const router = express.Router();

router.get("/", authenticate(), get);
router.post("/", authenticate(), add);
router.delete("/:productId", authenticate(), remove);

export default router;
