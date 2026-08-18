"use client";
import { create } from "@/api/category.api";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { productSchema } from "@/schemas/product.schema";
import { TProduct } from "@/types/product.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ProductForm = () => {
  const router = useRouter();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(productSchema),
  });

  const { data, isPending, error, mutate } = useMutation({
    mutationFn: create,
    mutationKey: ["Create"],
    onSuccess: (data) => {
      toast.success(data?.message ?? "Category created successfully");
      router.push("/category");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Invalid Category");
    },
  });

  const onSubmit = (data: TProduct) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append("name", data.name);
    // formData.append("price", data.price);
    // formData.append("description", data.description);
    // formData.append("cover_image", data.cover_image);
    // formData.append("new_arrival", data.new_arrival);
    // formData.append("is_featured", data.is_featured);
    console.log("category created");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          name="name"
          id="name"
          type="text"
          placeholder="Enter the product name"
          register={register}
          error={errors?.name?.message}
        />
        <Input
          label="Price"
          name="price"
          id="price"
          type="number"
          placeholder="Enter the price"
          register={register}
          error={errors?.price?.message}
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
          label="Cover Image"
          name="cover_image"
          id="cover_image"
          type="file"
          placeholder="Upload product cover image"
          register={register}
          error={errors?.cover_image?.message}
        />
        <Input
          label="Images"
          name="images"
          id="images"
          type="file"
          placeholder="Upload product pictures"
          register={register}
          error={errors?.images?.message}
        />
        <Input
          label="New Arrival"
          name="new_arrival"
          id="new_arrival"
          type="checkbox"
          placeholder="New arrivals?"
          register={register}
          error={errors?.new_arrival?.message}
        />
        <Input
          label="Is Featured"
          name="is_featured"
          id="is_featured"
          type="file"
          placeholder="Is Featured?"
          register={register}
          error={errors?.is_featured?.message}
        />
        <div>
          <Button label="Create Brand" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
