"use client";
import { create } from "@/api/category.api";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { categorySchema } from "@/schemas/category.schema";
import { TCategory } from "@/types/category.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CategoryForm = () => {
  const router = useRouter();

  const {
    register,
    watch,
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
    resolver: yupResolver(categorySchema),
  });

  const { data, isPending, error, mutate } = useMutation({
    mutationFn: create,
    mutationKey: ["Create"],
    onSuccess: (data) => {
      toast.success(data?.message ?? "Category created successfully");
      router.push("/admin/");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Invalid Category");
    },
  });

  const onSubmit = (data: TCategory) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data?.description || "");
    formData.append("logo", (data.logo as any)[0]);
    mutate(formData);
    console.log("category created");
  };

  const onError = (errors: any) => {
    console.log("validation error", errors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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
          placeholder="Enter the brand name"
          register={register}
          error={errors?.logo?.message}
        />
        <div>
          <Button label="Create Category" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
