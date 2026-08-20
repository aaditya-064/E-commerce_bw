"use client";
import React from "react";
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "@/api/wishlist.api";
import WishlistContext from "@/context/wishlist.context";
import { TWishlist } from "@/types/wishlist.type";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, data: getAllWishlist } = useQuery({
    queryFn: getWishlist,
    queryKey: ["get-wishlist"],
    retry: false,
  });

  const { mutate: create, isPending: createPending } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: (response) => {
      toast.success(response.message ?? "product added to wishlist");
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error.message ?? "something went wrong");
    },
  });

  const { mutate: remove, isPending: removePending } = useMutation({
    mutationFn: removeFromWishlist,
    onSuccess: (response) => {
      toast.success(response.message ?? "product removed from wishlist");
    },
  });

  const addProductToWishlist = (productId: string) => {
    create(productId);
  };

  const removeProductFromWishlist = (productId: string) => {
    remove(productId);
  };

  const isExists = (productId: string) => {
    const list = getAllWishlist?.data.find(
      (list: TWishlist) => list.product._id === productId,
    );

    return !!list;
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: getAllWishlist?.data,
        addProductToWishlist,
        isLoading: !!isLoading || !!removePending || !createPending,
        removeProductFromWishlist,
        isExists,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
