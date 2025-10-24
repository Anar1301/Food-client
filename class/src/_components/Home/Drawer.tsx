"use client";

import { FiShoppingCart } from "react-icons/fi";
import { Drawer } from "vaul";
import { Button } from "../ui/button";
import Cardcomp from "./Cardcomp";
import Orderhistory from "./Orderhistory";
import { useEffect, useState } from "react";
import { Cartfood } from "@/lib/type";
import { Badge } from "@/components/ui/badge";
type ordercart = {
  title: string;
  price: number;
};

export default function VaulDrawer() {
  const [active, setActive] = useState<boolean>(true);
  const [Cartfood, setCartfood] = useState<Cartfood[]>([]);
  useEffect(() => {
    const Cartfood: Cartfood[] = JSON.parse(
      localStorage.getItem("Cartfood") ?? "[]"
    );
    setCartfood(Cartfood);
    console.log({ Cartfood });
  }, []);

  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
        <div className="relative w-[20px] h-[50px] flex justify-center items-center">
          <FiShoppingCart height={36} width={36} />
          <Badge className="absolute top-0.5 -right-3 bg-red-400 rounded-full h-5 w-5">
            {Cartfood.length}
          </Badge>
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="right-2 top-2 bottom-2 fixed z-10 outline-none w-[510px] flex"
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <Drawer.Title></Drawer.Title>
          <div className="h-[1024px] w-[550px] bg-[#404040] ">
            <div className="tabs tabs-box bg-[#404040] pb-10">
              <div className="bg-white rounded-full">
                <Button
                  className={
                    `w-[230px] bg-white text-black rounded-full` +
                    `${active && " !bg-red-400 text-white"}`
                  }
                >
                  Cart
                </Button>
                <Button
                  className={
                    `w-[230px] relative bg-white text-black rounded-full` +
                    `${!active && " !bg-red-400 text-white"}`
                  }
                >
                  Order history
                </Button>
              </div>
              <input
                type="radio"
                name="my_tabs_6"
                className="tab btn w-[230px] rounded-full bg-red-400 h-[40px] absolute top-5 left-5 opacity-0 inset-0"
                aria-label="Cart"
                onClick={() => setActive(!false)}
              />

              <div className="tab-content">
                <Cardcomp />
              </div>

              <input
                type="radio"
                name="my_tabs_6"
                className="tab btn w-[230px] rounded-full absolute left-65 opacity-0"
                aria-label="Order"
                onClick={() => setActive(!true)}
              />
              <div className="tab-content">
                <Orderhistory></Orderhistory>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
