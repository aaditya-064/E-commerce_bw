"use client";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  return (
    <form className="flex flex-col gap-5">
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
      {/* button */}
      <div className="mt-5">
        <Button label="Login" type="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
