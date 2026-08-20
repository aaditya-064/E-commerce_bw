"use client";
import ProductContext from "@/context/product.context";
import { useContext } from "react";

export const useProduct = () => {
  if (!ProductContext) {
    console.log("useProduct hook must be used inside product provider");
  }
  return useContext(ProductContext);
};
