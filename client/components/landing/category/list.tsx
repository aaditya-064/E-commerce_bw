"use client";
import React from "react";
import CategoryCard from "./card";
import { useQuery } from "@tanstack/react-query";
import { get } from "@/api/category.api";
import { TCategory } from "@/types/category.types";

const CategoryList = () => {
  const { isLoading, data } = useQuery({
    queryFn: get,
    queryKey: ["get-all-category"],
  });

  console.log(data);

  return (
    <>
      {/* loading state */}

      {/* !loading && data.data.length == 0 -> category not found */}
      <div className="grid grid-cols-4 gap-4 mt-5">
        {/* !loading && data.data.length > 0 */}
        {data?.data?.map((category: TCategory) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
