import React from "react";

interface IProps {
  label: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ label, type = "button" }: IProps) => {
  return (
    <button
      className="rounded-sm w-full py-2 bg-primary text-text-on-primary font-bold text-[14px] hover:bg-primary-hover active:bg-primary-active transition-all duration-300 cursor-pointer"
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
