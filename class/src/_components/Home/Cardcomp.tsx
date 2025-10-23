"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { useRouter } from "next/navigation";
import { Cartfood, Dish, food2 } from "@/lib/type";
import Image from "next/image";

const Cardcomp = ({
  handleonminus,
  handleonplus,
}: {
  setPlus: Function;
  price: number;
  plus: number;
  handleonminus: Function;
  handleonplus: Function;
}) => {
  const router = useRouter();
  const userEmail = localStorage.getItem("userEmail");
  const [Cartfood, setCartfood] = useState<Cartfood[]>([]);
  const [shipping, SetShipping] = useState<number>(3000);

  useEffect(() => {
    const Cartfood: Cartfood[] = JSON.parse(
      localStorage.getItem("Cartfood") ?? "[]"
    );
    setCartfood(Cartfood);
    console.log({ Cartfood });
  }, []);
  const goTologin = () => {
    router.push("/multitask");
  };
  const goTosignin = () => {
    router.push("/signup");
  };
  const itemsTotal = Cartfood.reduce(
    (sum, item) => sum + item.food.price * item.count,
    0
  );

  return (
    <div>
      <div className="h-10 bg-[#404040]"></div>
      <div className="h-fit w-[471px] bg-white rounded-md ">
        <div className="pt-[16px] pl-[16px]">
          <div className="text-[20px] text-[#71717A] font-semibold">
            My cart
          </div>
          {Cartfood.map((cart, index) => (
            <div className="flex  h-[120px] mt-5" key={index}>
              <div className="w-[124px] h-[120px] ">
                <Image
                  src="/food1.png"
                  className="w-[124px] h-[120px] object-cover rounded-md "
                  alt={""}
                ></Image>
              </div>
              <div className="flex flex-col ml-2 w-[305px]">
                <div className=" flex  ">
                  <div>
                    <div className="text-red-500 font-semibold text-[16px]">
                      {cart.food.name}
                    </div>
                    <div className="text-[12px] mt-[12px] text-[#09090B] items-start">
                      Fluffy pancakes stacked with fruits, cream, Fluffy
                      pancakes stacked with fruits, cream,
                    </div>
                  </div>

                  <Button className="h-[36px] w-[36px] rounded-full border-2 border-red-400 bg-white text-red-400">
                    X
                  </Button>
                </div>

                <div className="mt-[10px] flex justify-between items-center">
                  <div>
                    <ButtonGroup
                      aria-label="Media controls"
                      className="h-fit gap-2"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleonminus()}
                      >
                        <MinusIcon />
                      </Button>
                      <Button className="rounded-full">{cart.count}</Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleonplus()}
                      >
                        <PlusIcon />
                      </Button>
                    </ButtonGroup>
                  </div>
                  <div>
                    <div className="text-[#09090B] text-[24px] font-semibold">
                      ${cart.food.price * cart.count}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="h-[30px] w-[440px] border-b-4 border-dashed"></div>
          <div className="h-[120px] mb-[20px] pb-[40px]">
            <div className="text-[20px] text-[#71717A] font-semibold mt-[16px]">
              Delivery location
            </div>
            <Textarea
              className="h-fit  mt-[8px] w-[440px] "
              placeholder="Please share your  complete address"
            ></Textarea>
          </div>
        </div>
      </div>
      <div className="h-10 bg-[#404040]"></div>
      <div className="h-[276px] w-[471px] bg-white rounded-md ">
        <div className="pt-[16px] pl-[16px]">
          <div className="text-[20px] text-[#71717A] font-semibold">
            Payment info
          </div>
          <div className="flex justify-between mt-[20px] ">
            <div className="text-[#71717A] text-[16px]">items</div>
            <div className="pr-[16px] text-[#09090B] font-bold ">
              {itemsTotal}
            </div>
          </div>
          <div className="flex justify-between mt-[20px]">
            <div className="text-[#71717A] text-[16px]">Shipping</div>
            <div className="pr-[16px] text-[#09090B] font-bold  ">
              {shipping}
            </div>
          </div>
          <div className="w-[440px] border-t border-4 border-dashed mt-5"></div>
          <div className="flex justify-between mt-[20px]">
            <div className="text-[#71717A] text-[16px]">Total</div>
            <div className="pr-[16px] text-[#09090B] font-bold  ">
              {itemsTotal + shipping}
            </div>
          </div>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className="w-[440px] rounded-full mt-[20px] ml-[16px] bg-foreground text-white"
              variant="outline"
            >
              Check out
            </Button>
          </AlertDialogTrigger>
          {!userEmail ? (
            <AlertDialogContent className="w-[429px] mx-auto items-center">
              <AlertDialogHeader>
                <AlertDialogTitle className="pl-24">
                  You need to log in first
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-10">
                <AlertDialogAction
                  className="w-[190px] px-0"
                  onClick={() => goTologin()}
                >
                  Log in
                </AlertDialogAction>
                <AlertDialogCancel
                  className="w-[190px] "
                  onClick={() => goTosignin()}
                >
                  Sign up
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          ) : (
            <AlertDialogContent className="w-[664px] mx-auto items-center justify-center">
              <AlertDialogHeader>
                <AlertDialogTitle className="">
                  Your order has been successfully placed !
                </AlertDialogTitle>
              </AlertDialogHeader>
              <div className="flex justify-center items-center ">
                <Image
                  className="h-[256px] w-[156px]"
                  src="/suc.png"
                  alt={""}
                ></Image>
              </div>
              <AlertDialogFooter className="mt-10">
                <AlertDialogCancel
                  className="w-[188px] mr-20 "
                  onClick={() => router.push("/")}
                >
                  Back to home
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          )}
        </AlertDialog>
      </div>
    </div>
  );
};

export default Cardcomp;
