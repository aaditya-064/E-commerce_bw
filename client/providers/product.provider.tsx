"use client";
import {
  create,
  get,
  getById,
  update,
  remove,
  getByCategory,
  getByBrand,
  getByNewArrivals,
} from "@/api/product.api";
import ProductContext from "@/context/product.context";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [id, setId] = useState<string | null>(null);
  const [newArrivals, setNewArrivals] = useState<boolean | null>(false);
  const { data: products } = useQuery({
    queryFn: get,
    queryKey: ["get-products"],
    retry: false,
  });

  const { data: productById } = useQuery({
    queryFn: () => getById(id!),
    queryKey: ["get-product-by-id", id],
    enabled: !!id,
    retry: false,
  });

  const { data: productByCategory } = useQuery({
    queryFn: () => getByCategory(pathname!),
    queryKey: ["get-product-by-category", pathname],
    enabled: !!pathname,
    retry: false,
  });

  const { data: productByBrand } = useQuery({
    queryFn: () => getByBrand(pathname!),
    queryKey: ["get-product-by-brand", pathname],
    enabled: !!pathname,
    retry: false,
  });

  const { data: productByNewArrivals } = useQuery({
    queryFn: () => getByNewArrivals(newArrivals!),
    queryKey: ["get-product-by-new-arrivals", newArrivals],
    enabled: !!newArrivals,
    retry: false,
  });

  const { mutate: createFn, isPending: createPending } = useMutation({
    mutationFn: create,
    mutationKey: ["create-product"],
    onSuccess: (response) => {
      toast.success(response?.message ?? "Product created");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  const { mutate: updateFn, isPending: updatePending } = useMutation({
    mutationFn: update,
    mutationKey: ["update-product"],
    onSuccess: (response) => {
      toast.success(response?.message ?? "Product updated");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  const { mutate: removeFn, isPending: removePending } = useMutation({
    mutationFn: remove,
    mutationKey: ["remove-product"],
    onSuccess: (response) => {
      toast.success(response?.message ?? "Product deleted");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  const addProduct = ({
    data,
    categoryId,
    brandId,
  }: {
    data: FormData;
    categoryId: string;
    brandId: string;
  }) => {
    createFn({ data, categoryId, brandId });
  };

  const updateProduct = ({ id, data }: { id: string; data: FormData }) => {
    setId(id);
    updateFn({ id, data });
  };

  const removeProduct = (id: string) => {
    setId(id);
    removeFn(id);
  };

  return (
    <ProductContext.Provider
      value={{
        products: products?.data ?? null,
        productById: (productById as any)?.data ?? null,
        productByCategory: (productByCategory as any)?.data ?? null,
        productByBrand: (productByBrand as any)?.data ?? null,
        productByNewArrivals: (productByNewArrivals as any)?.data ?? null,
        isLoading: !!createPending || !!updatePending || !!removePending,
        addProduct,
        getProductById: (id: string) => setId(id),
        getProductByCategory: (name: string) => setId(name),
        getProductByBrand: (name: string) => setId(name),
        getProductByNewArrivals: (new_arrivals: boolean) =>
          setNewArrivals(new_arrivals),
        updateProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
