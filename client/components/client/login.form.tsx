"use client";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // console.log("email", watch("email"));
  // console.log("password", watch("password"));

  const onSubmit = (data: { email: string; password: string }) => {
    console.log("login submitted", data);
  };

  // const onChange = (
  //   e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  // ) => {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   setFormData((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        placeholder="johndoe@gmail.com"
        type="email"
        name="email"
        id="email"
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
      {/* button */}
      <div className="mt-5">
        <Button label="Login" type="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
