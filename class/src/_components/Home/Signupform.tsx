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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaAngleLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Multiformpassword from "./Multifrompassword";

export function SignupForm() {
  const router = useRouter();
  const [multi, setMulti] = useState("gmail");
  const [password, setPassword] = useState("password");
  function handleoneye() {
    if (password === "password") {
      setPassword("text");
    } else if (password === "text") {
      setPassword("password");
    }
  }

  const formSchema = z.object({
    Email: z.email({ message: "pisdaa" }),
    password: z.string(),
    confirmPassword: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleonlogin();
  }

  const handleonlogin = async () => {
    const result = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: form.getValues("Email"),
        password: form.getValues("password"),
      }),
    });
    const response = await result.json();
    console.log({ response });
    console.log({ result });
    if (response.success) {
      localStorage.setItem("userEmail", form.getValues("Email"));
      router.push("/");
      alert("Amjilttai Newterlee");
    } else {
      alert("Amjilttai newtersengu code buruu");
    }
  };

  return (
    <div>
      {multi === "gmail" && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(() => setMulti("password"))}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <div className="mt-[246px] w-[416px] flex flex-col gap-2">
                  <Button
                    className="w-[36px] h-[36px] bg-white text-black border-2"
                    onClick={() => router.push("/")}
                  >
                    <FaAngleLeft />
                  </Button>
                  <FormLabel className="font-bold text-[#09090B] text-[24px]">
                    Create your account
                  </FormLabel>
                  <FormDescription className="text-[#71717A] text-[16px]">
                    Sign up to explore your favorite dishes.
                  </FormDescription>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="mt-[24px]"
                      {...field}
                    />
                  </FormControl>

                  <Button
                    className="w-full mt-[24px] bg-[#71717A]"
                    type="submit"
                  >
                    Let's go
                  </Button>
                  <div className="text-[#71717A] text-[16px] mt-[24px] flex gap-4 items-center justify-center">
                    Already have an account ?
                    <p
                      className="text-blue-700"
                      onClick={() => setMulti("login")}
                    >
                      Log in
                    </p>
                  </div>
                </div>
              )}
            />
          </form>
        </Form>
      )}
      {multi === "password" && (
        <Multiformpassword
          setMulti={setMulti}
          email={form.getValues("Email")}
        ></Multiformpassword>
      )}
      {multi === "login" && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((v) => onSubmit(v))}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem className="mt-[246px] w-[416px] flex flex-col gap-2">
                  <Button
                    className="w-[36px] h-[36px] bg-white text-black border-2"
                    onClick={() => router.push("/")}
                  >
                    <FaAngleLeft />
                  </Button>
                  <FormLabel className="font-bold text-[#09090B] text-[24px]">
                    Log in
                  </FormLabel>
                  <FormDescription className="text-[#71717A] text-[16px]">
                    Log in to enjoy your favorite dishes.
                  </FormDescription>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="mt-[24px]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type={password}
                      placeholder="Password"
                      className=""
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex gap-2 items-center mt-[24px]">
              <div
                className="text-[#71717A] underline"
                onClick={() => setMulti("Forget")}
              >
                Forgot password ?
              </div>
            </div>

            <Button className="w-full  bg-[#71717A] " type="submit">
              Let's go
            </Button>

            <div className="text-[#71717A] text-[16px]  flex gap-4 items-center justify-center">
              Dont have an account ?
              <p className="text-blue-700" onClick={() => setMulti("gmail")}>
                Sign up
              </p>
            </div>
          </form>
        </Form>
      )}
      {multi === "Forget" && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem className="mt-[246px] w-[416px] flex flex-col gap-2">
                  <Button
                    className="w-[36px] h-[36px] bg-white text-black border-2"
                    onClick={() => setMulti("gmail")}
                  >
                    <FaAngleLeft />
                  </Button>
                  <FormLabel className="font-bold text-[#09090B] text-[24px]">
                    Reset your password
                  </FormLabel>
                  <FormDescription className="text-[#71717A] text-[16px]">
                    Enter your email to receive a password reset link.
                  </FormDescription>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your recieve email"
                      className="mt-[24px]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className="w-full  bg-[#71717A] "
              onClick={() => setMulti("Confirm")}
              type="submit"
            >
              Send link
            </Button>

            <div className="text-[#71717A] text-[16px]  flex gap-4 items-center justify-center mt-[24px]">
              Dont have an account ?
              <p className="text-blue-700" onClick={() => setMulti("gmail")}>
                Sign up
              </p>
            </div>
          </form>
        </Form>
      )}
      {multi === "Confirm" && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem className="mt-[246px] w-[416px] flex flex-col gap-2">
                  <Button
                    className="w-[36px] h-[36px] bg-white text-black border-2"
                    onClick={() => setMulti("gmail")}
                  >
                    <FaAngleLeft />
                  </Button>
                  <FormLabel className="font-bold text-[#09090B] text-[24px]">
                    Please verify Your Email
                  </FormLabel>
                  <FormDescription className="text-[#71717A] text-[16px]">
                    We just sent an email to Test@gmail.com. Click the link in
                    the email to verify your account.
                  </FormDescription>
                </FormItem>
              )}
            />

            <Button
              className="w-full  bg-[#71717A] "
              onClick={() => setMulti("Create")}
              type="submit"
            >
              Resend email
            </Button>
          </form>
        </Form>
      )}
      {multi === "Create" && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-[246px] w-[416px] flex flex-col gap-2">
                  <Button
                    className="w-[36px] h-[36px] bg-white text-black border-2"
                    onClick={() => setMulti("gmail")}
                  >
                    <FaAngleLeft />
                  </Button>
                  <FormLabel className="font-bold text-[#09090B] text-[24px]">
                    Create new password
                  </FormLabel>
                  <FormDescription className="text-[#71717A] text-[16px]">
                    Set a new password with a combination of letters and numbers
                    for better security.
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

            <Button
              className="w-full  bg-[#71717A] "
              onClick={() => setMulti("login")}
              type="submit"
            >
              Create password
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
