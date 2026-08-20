import BrandContext from "@/context/brand.context";
import { useContext } from "react";

export const useBrand = () => {
  if (!BrandContext) {
    console.log("useBrand hook must be used inside brand provider");
  }
  return useContext(BrandContext);
};
