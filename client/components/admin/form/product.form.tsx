"use client";
import { create } from "@/api/product.api";
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

  const { isPending, error, mutate } = useMutation({
    mutationFn: create,
    mutationKey: ["Create"],
    onSuccess: (response) => {
      toast.success(response?.message ?? "Product created successfully");
      router.push("/admin/");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Invalid Product");
      console.log(error);
    },
  });

  const onSubmit = (data: TProduct) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", String(data.price));
    formData.append("description", data.description);
    formData.append("brand", data?.brand ?? "");
    formData.append("category", data?.category ?? "");
    formData.append("cover_image", (data.cover_image as any)[0]);
    formData.append("new_arrival", String(data.new_arrival));
    formData.append("is_featured", String(data.is_featured));
    mutate(formData);
    console.log("product created");
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
          label="Brand"
          name="brand"
          id="brand"
          type="text"
          placeholder="Enter the brand"
          register={register}
          error={errors?.brand?.message}
        />
        <Input
          label="Category"
          name="category"
          id="category"
          type="text"
          placeholder="Enter the category"
          register={register}
          error={errors?.category?.message}
        />
        {/* <Input
          label="Images"
          name="images"
          id="images"
          type="file"
          placeholder="Upload product pictures"
          register={register}
          error={errors?.images?.message}
        /> */}
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
          type="checkbox"
          placeholder="Is Featured?"
          register={register}
          error={errors?.is_featured?.message}
        />
        <div>
          <Button label="Create Product" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
