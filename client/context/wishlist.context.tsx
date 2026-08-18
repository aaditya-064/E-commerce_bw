import { TWishlist } from "@/types/wishlist.type";
import { createContext } from "react";

type TWishlistContext = {
  wishlist: TWishlist | null;
  addProductToWishlist: (productId: string) => void;
  removeProductFromWishlist: (productId: string) => void;
  isExists: (productId: string) => boolean;
  isLoading: boolean;
};

const initialValues: TWishlistContext = {
  wishlist: null,
  isLoading: true,
  addProductToWishlist: () => {},
  removeProductFromWishlist: () => {},
  isExists: () => false,
};

const wishlistContext = createContext<TWishlistContext>(initialValues);

export default wishlistContext;
