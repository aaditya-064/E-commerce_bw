"use client";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { registerSchema } from "@/schemas/auth.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      phone: "",
      c_password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Full Name"
        placeholder="John Doe"
        type="text"
        name="full_name"
        id="name"
        register={register}
      />
      <Input
        label="Email"
        placeholder="johndoe@gmail.com"
        type="email"
        name="email"
        id="email"
        register={register}
      />
      <Input
        label="Phone Number"
        placeholder="enter your phone number"
        type="phone"
        name="phone"
        id="phone"
        register={register}
      />
      <Input
        label="Password"
        placeholder="enter your password"
        type="password"
        name="password"
        id="password"
        register={register}
      />
      <Input
        label="Confirm Password"
        placeholder="Confirm your password"
        type="password"
        name="c_password"
        id="c_password"
        register={register}
      />
      {/* button */}
      <div className="mt-5">
        <Button label="Register" type="submit" />
      </div>
    </form>
  );
};

export default RegisterForm;
