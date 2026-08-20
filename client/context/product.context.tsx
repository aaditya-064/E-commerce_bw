"use client";
import { TProduct } from "@/types/product.types";
import { createContext } from "react";

type TProductContext = {
  products: TProduct[] | null;
  productById: TProduct | null;
  productByCategory: TProduct[] | null;
  productByBrand: TProduct[] | null;
  productByNewArrivals: TProduct[] | null;
  isLoading: Boolean;
  addProduct: ({
    data,
    categoryId,
    brandId,
  }: {
    data: FormData;
    categoryId: string;
    brandId: string;
  }) => void;
  getProductById: (productId: string) => void;
  getProductByCategory: (name: string) => void;
  getProductByBrand: (name: string) => void;
  getProductByNewArrivals: (new_arrivals: boolean) => void;
  updateProduct: ({ id, data }: { id: string; data: FormData }) => void;
  removeProduct: (id: string) => void;
};

const initialValues: TProductContext = {
  products: null,
  productById: null,
  productByCategory: null,
  productByBrand: null,
  productByNewArrivals: null,
  isLoading: true,
  addProduct: () => {},
  getProductById: () => {},
  getProductByCategory: () => {},
  getProductByBrand: () => {},
  getProductByNewArrivals: () => {},
  updateProduct: () => {},
  removeProduct: () => {},
};

const productContext = createContext<TProductContext>(initialValues);
export default productContext;
