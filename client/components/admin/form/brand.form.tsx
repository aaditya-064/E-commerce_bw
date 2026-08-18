"use client";
import Input from "@/components/common/input";
import Button from "@/components/common/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { brandSchema } from "@/schemas/brand.schema";
import { useMutation } from "@tanstack/react-query";
import { create } from "@/api/brand.api";
import { TBrand } from "@/types/brand.types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { All_Admins } from "@/types/enum.types";
import { useAuth } from "@/hooks/auth.hook";
import { useEffect } from "react";

const BrandForm = () => {
  const router = useRouter();
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      logo: {
        path: "",
        public_id: "",
      },
    },
    resolver: yupResolver(brandSchema),
  });

  const { data, isPending, error, mutate } = useMutation({
    mutationFn: create,
    mutationKey: ["Create"],
    onSuccess: (data) => {
      console.log(data);
      if (All_Admins.includes(data.data)) {
        router.push("/brands");
        toast.success(data?.message ?? "Brand Created Successfully");
      } else {
        toast.error("Not authenticated");
        router.push("/");
      }
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Invalid Brand");
    },
  });

  const onSubmit = (data: TBrand) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data?.description || "");

    formData.append("logo", (data.logo as any)[0]);
    mutate(formData);
    console.log("Brand Created");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          name="name"
          id="name"
          type="text"
          placeholder="Enter the brand name"
          register={register}
          error={errors?.name?.message}
        />
        <Input
          label="Description"
          name="description"
          id="description"
          type="text"
          placeholder="Enter the description"
          register={register}
          error={errors?.description?.message}
        />
        <Input
          label="Logo"
          name="logo"
          id="logo"
          type="file"
          placeholder=""
          register={register}
          error={errors?.logo?.message}
        />
        <div>
          <Button label="Create Brand" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default BrandForm;
