"use client";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/auth.schema";
import { TLogin } from "@/types/auth.types";

const LoginForm = () => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  console.log(errors);
  // console.log("email", watch("email"));
  // console.log("password", watch("password"));

  const onSubmit = (data: TLogin) => {
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
    <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        placeholder="johndoe@gmail.com"
        type="text"
        name="email"
        id="email"
        error={errors?.email?.message}
        register={register}
      />
      <Input
        label="Password"
        placeholder="enter your password"
        type="password"
        name="password"
        id="password"
        error={errors?.password?.message}
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
