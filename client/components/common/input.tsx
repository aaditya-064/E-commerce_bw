import React, { FC } from "react";

interface IProps {
  label: string;
  name: string;
  id: string;
  type: "text" | "password" | "email";
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
  value: string;
}
const Input: FC<IProps> = ({
  id,
  label,
  name,
  placeholder,
  onChange,
  type = "text",
  value,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[18px] font-normal tracking-wide">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className="py-2.5 border border-primary px-2 rounded-sm focus:outline-primary text-[18px] placeholder:text-[18px]"
      />
    </div>
  );
};

export default Input;
