import CategoryContext from "@/context/category.context";
import { useContext } from "react";

export const useCategory = () => {
  if (!CategoryContext) {
    console.log("useCategory hook must be used inside Category provider");
  }
  return useContext(CategoryContext);
};
