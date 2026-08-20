import Wishlist from "../models/wishlist.model";
import AppError from "../utils/appError.utils";
import { catchAsync } from "../utils/catchAsync.utils";
import { sendResponse } from "../utils/sendResponse.utils";

export const get = catchAsync(async (req, res, next) => {
  const user_id = req?.user?._id;

  if (!user_id) {
    throw new AppError("User ID is required", 400);
  }

  const wishlist = await Wishlist.find({ user_id }).populate("product");

  sendResponse(res, {
    message: "Wishlist fetched",
    statusCode: 201,
    data: wishlist,
  });
});

export const add = catchAsync(async (req, res, next) => {
  const user_id = req?.user?._id;
  const { productId } = req.body;

  if (!user_id) throw new AppError("User ID is required", 400);
  if (!productId) throw new AppError("Product ID is required", 400);

  const existingItem = await Wishlist.findOne({ user_id, productId });
  if (existingItem) {
    throw new AppError("Product is already in your wishlist", 400);
  }

  const wishlistItem = await Wishlist.create({ user_id, product: productId });

  sendResponse(res, {
    message: "Product added to Wishlist",
    statusCode: 201,
    data: wishlistItem,
  });
});

export const remove = catchAsync(async (req, res, next) => {
  const user_id = req?.user?._id;
  const { productId } = req.params;
  console.log(user_id, productId);

  if (!user_id) throw new AppError("User ID is required", 400);
  if (!productId) throw new AppError("Product ID is required", 400);

  const removeItem = await Wishlist.findOneAndDelete({
    user_id,
    product: productId,
  });
  if (!removeItem) {
    throw new AppError("Product not found", 404);
  }

  sendResponse(res, {
    message: "Product removed from Wishlist",
    statusCode: 201,
    data: removeItem,
  });
});
