import React, { FC, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

interface IProps {
  label: string;
  name: string;
  id: string;
  type:
    | "text"
    | "password"
    | "email"
    | "phone"
    | "file"
    | "number"
    | "checkbox";
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
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[14px] font-normal tracking-wide">
        {label}
      </label>
      <div className="flex flex-col relative">
        <input
          type={type === "password" && show ? "text" : type}
          id={id}
          placeholder={placeholder}
          {...register(name)}
          className={`py-2.5 px-2 rounded-sm text-[18px] placeholder:text-[18px] border ${error ? "border-red-500 focus:outline-red-500" : "border-primary focus:outline-primary-active"} "
        `}
        />
        {type === "password" ? (
          <div className="absolute top-[34%] right-2 cursor-pointer">
            {show ? (
              <IoEyeOutline onClick={() => setShow(!show)} />
            ) : (
              <IoEyeOffOutline onClick={() => setShow(!show)} />
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <small className="h-5 text-red-500 text-xs">{error}</small>
    </div>
  );
};

export default Input;
