"use client";
import React, { useEffect } from "react";
import { useProduct } from "@/hooks/product.hook";
import { usePathname } from "next/navigation";

const Products = () => {
  const { productByBrand } = useProduct();
  const pathname = usePathname();

  useEffect(() => {
    console.log(productByBrand);
  }, [productByBrand]);

  return (
    <div className="bg-white">
      <h2 className="text-[#0F172A] text-lg font-bold italic mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 mt-10">
        {decodeURIComponent(pathname.split("/")[3])}
      </h2>
      <div className="mx-auto max-w-2xl px-4 pb-14 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-10">
          {productByBrand?.map((product) => (
            <div key={product._id} className="group">
              <img
                alt={product.name + "- image"}
                src={(product.cover_image as { path: string })?.path}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                $ {product.price}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
