"use client";
import React from "react";
import ProductCard from "../product-card";
import { TProduct } from "@/types/product.types";
import { useQuery } from "@tanstack/react-query";
import { get } from "@/api/product.api";

const FeaturedProductList = () => {
  const { isLoading, data } = useQuery({
    queryFn: get,
    queryKey: ["get-featured-products"],
  });

  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-10 mt-5">
      {data?.data?.map((product: TProduct) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProductList;
