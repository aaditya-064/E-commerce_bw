import { NextFunction, Request, Response } from "express";
import Cart from "../models/cart.model";
import { catchAsync } from "../utils/catchAsync.utils";
import { sendResponse } from "../utils/sendResponse.utils";
import AppError from "../utils/appError.utils";
// import User from "../models/user.model";

export const create = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { data } = req.body;
    const user_id = req?.user?._id;
    const existingCart = await Cart.findOne({ user: user_id });
    if (existingCart) {
      existingCart.items = data;
      await existingCart.save();
      return sendResponse(res, {
        message: "Cart updated successfully",
        statusCode: 200,
        data: {
          cart: existingCart,
        },
      });
    }
    const cart = await Cart.create({ user: user_id, items: data });

    sendResponse(res, {
      message: "Cart created successfully",
      statusCode: 201,
      data: {
        cart,
      },
    });
  },
);

export const addQuantity = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { productId, quantity } = req.body;
    const user = req?.user?._id;
    const cart = await Cart.findOne({ user });
    if (!cart) {
      return sendResponse(res, {
        message: "Cart not found",
        statusCode: 404,
        data: null,
      });
    }
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId,
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
  },
);

export const get = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req?.user?._id;
    const cart = await Cart.findOne({ user: id }).populate([
      { path: "user" },
      { path: "items.product" },
    ]);
    if (!cart) {
      return sendResponse(res, {
        message: "Cart not found",
        statusCode: 404,
        data: null,
      });
    }
    sendResponse(res, {
      message: "Cart fetched successfully",
      statusCode: 201,
      data: cart,
    });
  },
);

export const removeProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { productId } = req.params;
    const userId = req?.user?._id;

    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      {
        $pull: { items: { product: productId } },
      },
      { new: true },
    ).populate([{ path: "user" }, { path: "items.product" }]);

    if (!cart) {
      throw new AppError("Cart not found", 404);
    }

    sendResponse(res, {
      message: "Product removed successfully",
      statusCode: 201,
      data: cart,
    });

    // const cart = await Cart.findOneAndDelete({ product: productId });
  },
);

export const drop = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req?.user?._id;
    const cart = await Cart.findOneAndDelete({
      user: userId,
    });

    if (!cart) {
      throw new AppError("Cart not found", 404);
    }

    sendResponse(res, {
      message: "Cart deleted successfully",
      statusCode: 201,
      data: cart,
    });
  },
);
