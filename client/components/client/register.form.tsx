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
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <Input
        label="Full Name"
        placeholder="John Doe"
        type="text"
        name="full_name"
        id="name"
        onChange={onChange}
        value={formData.full_name}
      />
      <Input
        label="Email"
        placeholder="johndoe@gmail.com"
        type="email"
        name="email"
        id="email"
        onChange={onChange}
        value={formData.email}
      />
      <Input
        label="Password"
        placeholder="enter your password"
        type="password"
        name="password"
        id="password"
        onChange={onChange}
        value={formData.password}
      />
      <Input
        label="Phone Number"
        placeholder="enter your phone number"
        type="phone"
        name="phone"
        id="phone"
        onChange={onChange}
        value={formData.phone}
      />
      {/* button */}
      <div className="mt-5">
        <Button label="Register" type="submit" />
      </div>
    </form>
  );
};

export default RegisterForm;
