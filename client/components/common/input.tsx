import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  id: string;
  type: "text" | "password" | "email" | "phone";
  placeholder: string;
  register: UseFormRegister<any>;
  error?: string;
}
const Input: FC<IProps> = ({
  id,
  label,
  name,
  placeholder,
  type = "text",
  register,
  error,
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
        {...register(name)}
        className={`py-2.5 px-2 rounded-sm text-[18px] placeholder:text-[18px] border ${error ? "border-red-500 focus:outline-red-500" : "border-primary focus:outline-primary-active"} "
        `}
      />
      <small className="h-5 text-red-500 text-xs">{error}</small>
    </div>
  );
};

export default Input;
