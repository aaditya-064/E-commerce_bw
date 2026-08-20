import { TCart } from "@/types/cart.types";
import { createContext } from "react";

type TCartContext = {
  cart: TCart | null;
  addToCart: () => void;
  stackCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  deleteCart: (productId: string) => void;
};

const initialValues: TCartContext = {
  cart: null,
  addToCart: () => {},
  stackCart: () => {},
  removeFromCart: () => {},
  deleteCart: () => {},
};

const cartContext = createContext(initialValues);
export default cartContext;
