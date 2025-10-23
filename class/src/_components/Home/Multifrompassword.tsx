"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Multiformpassword = ({
  email,
  setMulti,
}: {
  email: string;
  setMulti: any;
}) => {
  const [password, setPassword] = useState("password");
  function handleoneye() {
    if (password === "password") {
      setPassword("text");
    } else if (password === "text") {
      setPassword("password");
    }
  }
  const formSchema = z
    .object({
      password: z
        .string({ message: "Weak password. Use numbers and symbols." })
        .min(6, { message: "Password must be at least 6 characters long." })
        .max(20, {
          message: "Password must be no more than 20 characters long.",
        })
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"'<>,.?/~`|\\]).{6,20}$/,
          "Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character((e.g. !@#$%^&*))."
        ),

      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Those password did’t match, Try again",
      path: ["confirm"],
    });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  function onSubmit() {
    createUserHandler();
  }
  const createUserHandler = async () => {
    try {
      const result = await fetch(
        "https://food-delivery-frontend-client-n86m.vercel.app/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: email,
            password: form?.getValues("password"),
          }),
        }
      );
      const response = await result.json();
      if (response.success) {
        setMulti("login"), alert("Amjilttai burtguullee");
      } else {
        alert("Amjilttai newtersengu code buruu");
      }
    } catch (error) {
      alert("Email already used ");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => onSubmit())}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-[246px] w-[416px] flex flex-col gap-2">
              <Badge
                className="w-[36px] h-[36px] bg-white text-black border-2"
                onClick={() => setMulti("gmail")}
              >
                <FaAngleLeft />
              </Badge>
              <FormLabel className="font-bold text-[#09090B] text-[24px]">
                Create a strong password
              </FormLabel>
              <FormDescription className="text-[#71717A] text-[16px]">
                Create a strong password with letters, numbers.
              </FormDescription>
              <FormControl>
                <Input
                  type={password}
                  placeholder="Password"
                  className="mt-[24px]"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type={password}
                  placeholder="Confirm password"
                  className=""
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex gap-2 items-center mt-[24px]">
          <Input
            type="checkbox"
            className="w-[16px] h-[16px]"
            onClick={() => handleoneye()}
          />
          <div className="text-[#71717A]">Show password</div>
        </div>

        <Button className="w-full  bg-[#71717A] " type="submit">
          Lets go
        </Button>
        <div className="text-[#71717A] text-[16px]  flex gap-4 items-center justify-center">
          Already have an account ?
          <p className="text-blue-700" onClick={() => setMulti("login")}>
            Log in
          </p>
        </div>
      </form>
    </Form>
  );
};

export default Multiformpassword;
