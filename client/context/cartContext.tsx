import { TCart } from "@/types/cart.types";
import { createContext } from "react";

type TCartContext = {
  cart: TCart | null;
};

const initialValues: TCartContext = {
  cart: null,
};

const cartContext = createContext(initialValues);
