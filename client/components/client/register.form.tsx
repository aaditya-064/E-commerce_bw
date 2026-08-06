"use client";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
    c_password: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
      <Input
        label="Full Name"
        placeholder="John Doe"
        type="text"
        name="full_name"
        id="name"
      />
      <Input
        label="Email"
        placeholder="johndoe@gmail.com"
        type="email"
        name="email"
        id="email"
      />
      <Input
        label="Phone Number"
        placeholder="enter your phone number"
        type="phone"
        name="phone"
        id="phone"
      />
      <Input
        label="Password"
        placeholder="enter your password"
        type="password"
        name="password"
        id="password"
      />
      <Input
        label="Confirm Password"
        placeholder="Confirm your password"
        type="password"
        name="c_password"
        id="c_password"
      />
      {/* button */}
      <div className="mt-5">
        <Button label="Register" type="submit" />
      </div>
    </form>
  );
};

export default RegisterForm;
