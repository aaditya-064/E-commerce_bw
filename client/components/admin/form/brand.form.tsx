import React from "react";
import Input from "@/components/common/input";
import Button from "@/components/common/button";
import { useForm } from "react-hook-form";

const BrandForm = () => {
  const {} = useForm({
    defaultValues: {
      name: "",
      description: "",
      logo: "",
    },
  });
  return (
    <div>
      <form action=""></form>
    </div>
  );
};

export default BrandForm;
