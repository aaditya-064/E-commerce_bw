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
      router.push("/category");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Invalid Category");
    },
  });

  const onSubmit = (data: TCategory) => {
    mutate(data);
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
          <Button label="Create Brand" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
