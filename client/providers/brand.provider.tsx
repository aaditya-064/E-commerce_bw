"use client";
import { create, get, getById, update, remove } from "@/api/brand.api";
import BrandContext from "@/context/brand.context";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import React, { useState } from "react";

const BrandProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState<string | null>(null);

  const { data: brands } = useQuery({
    queryFn: get,
    queryKey: ["get-brand"],
    retry: false,
  });

  const { data: brandById } = useQuery({
    queryFn: () => getById(id!),
    queryKey: ["get-brand-by-id", id],
    enabled: !!id,
    retry: false,
  });

  const { mutate: createFn, isPending: createPending } = useMutation({
    mutationFn: create,
    mutationKey: ["create-brand"],
    onSuccess: (response) => {
      toast.success(response.message ?? "Brand created");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  const { mutate: updateFn, isPending: changePending } = useMutation({
    mutationFn: update,
    mutationKey: ["update-brand"],
    onSuccess: (response) => {
      toast.success(response.message ?? "Brand created");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  const { mutate: removeFn, isPending: deletePending } = useMutation({
    mutationFn: remove,
    mutationKey: ["remove-brand"],
    onSuccess: (response) => {
      toast.success(response?.message ?? "Brand removed");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  const addBrand = (data: FormData) => {
    createFn(data);
  };

  const updateBrand = ({ id, data }: { id: string; data: FormData }) => {
    updateFn({ id, data });
  };

  const removeBrand = (id: string) => {
    removeFn(id);
  };

  return (
    <BrandContext.Provider
      value={{
        brands: brands?.data ?? null,
        brandById: (brandById as any)?.data ?? null,
        isLoading: !!createPending || !!changePending || !!deletePending,
        getBrandById: (id: string) => setId(id),
        addBrand,
        updateBrand,
        removeBrand,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};

export default BrandProvider;
