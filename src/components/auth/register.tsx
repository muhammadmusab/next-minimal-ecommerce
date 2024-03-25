"use client";

import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Input } from "@/components/ui/form/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import * as actions from "@/actions";
const formSchema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().email().required('Required'),
  password: yup.string().max(8).required('Required'),
});

const Login = () => {
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  type formSchemaType = yup.InferType<typeof formSchema>;

  const onSubmit = async (formData: FormData) => {
    console.log(formData);
    const isValid = await form.trigger();
    if (!isValid) return;
    const response = await actions.register(formData);
    console.log(response);
  };
  const inputs = [
    {
      name: "name",
      icon: AiOutlineUser,
      iconClass: "text-[19px]",
      inputClass: "pl-25",
      placeholder: "Full Name",
      labelClass: "absolute top-[12px] left-0",
    },
    {
      name: "email",
      icon: AiOutlineMail,
      iconClass: "text-[19px]",
      inputClass: "pl-25",
      placeholder: "Email",
      labelClass: "absolute top-[12px] left-0",
    },
    {
      name: "password",
      icon: AiOutlineLock,
      iconClass: "text-[19px]",
      inputClass: "pl-25",
      placeholder: "Password",
      labelClass: "absolute top-[12px] left-0",
    },
  ];
  return (
    <Form {...form}>
      <form action={onSubmit} className="space-y-8">
        {inputs.map((input) => (
          <FormField
            key={input.name}
            control={form.control}
            name={input.name as "email" | "password" | "name"}
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className={`${input.labelClass}`}>
                  <input.icon className={input.iconClass} />
                </FormLabel>
                <FormControl>
                  <Input
                    className={input.inputClass}
                    placeholder={input.placeholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-danger" />
              </FormItem>
            )}
          />
        ))}
        <button className="transition-all bg-[#333333] font-roboto font-bold text-white py-10 px-[65px] md:px-[30px] hover:bg-primaryhover">
          Register
        </button>
      </form>
    </Form>
  );
};

export default Login;
