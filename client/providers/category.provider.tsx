"use client";
import { create, get, getById, update, remove } from "@/api/category.api";
import CategoryContext from "@/context/category.context";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import React, { useState } from "react";

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState<string | null>(null);

  const { data: categories } = useQuery({
    queryFn: get,
    queryKey: ["get-category"],
    retry: false,
  });

  const { data: categoryById } = useQuery({
    queryFn: () => getById(id!),
    queryKey: ["get-category-by-id", id],
    enabled: !!id,
    retry: false,
  });

  const { mutate: createFn, isPending: createPending } = useMutation({
    mutationFn: create,
    mutationKey: ["create-category"],
    onSuccess: (response) => {
      toast.success(response?.message ?? "Category created");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  const { mutate: updateFn, isPending: updatePending } = useMutation({
    mutationFn: update,
    mutationKey: ["update-category"],
    onSuccess: (response) => {
      toast.success(response?.message ?? "Category updated");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  const { mutate: removeFn, isPending: removePending } = useMutation({
    mutationFn: remove,
    mutationKey: ["remove-category"],
    onSuccess: (response) => {
      toast.success(response?.message ?? "Category deleted");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  const addCategory = (data: FormData) => {
    createFn(data);
  };

  const updateCategory = ({ id, data }: { id: string; data: FormData }) => {
    setId(id);
    updateFn({ id, data });
  };

  const removeCategory = (id: string) => {
    setId(id);
    removeFn(id);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories: categories?.data ?? null,
        categoryById: (categoryById as any)?.data ?? null,
        isLoading: !!createPending || !!updatePending || !!removePending,
        addCategory,
        getCategoryById: (id: string) => setId(id),
        updateCategory,
        removeCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
