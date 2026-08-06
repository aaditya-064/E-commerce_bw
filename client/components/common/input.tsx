import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  id: string;
  type: "text" | "password" | "email" | "phone";
  placeholder: string;
  register: UseFormRegister<any>;
}
const Input: FC<IProps> = ({
  id,
  label,
  name,
  placeholder,
  type = "text",
  register,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[14px] font-normal tracking-wide">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="py-2.5 border border-primary px-2 rounded-sm focus:outline-primary text-[18px] placeholder:text-[18px]"
        {...register(name)}
      />
    </div>
  );
};

export default Input;
