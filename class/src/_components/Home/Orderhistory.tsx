import React from "react";
import { Button } from "../ui/button";
import { LuSoup } from "react-icons/lu";
import { CiStopwatch } from "react-icons/ci";
import { CiMap } from "react-icons/ci";

const Orderhistory = () => {
  return (
    <div>
      <div className="h-10 bg-[#404040]"></div>
      <div className="h-[630px] w-[471px] bg-white rounded-md ">
        <div className="pt-[16px] pl-[16px]">
          <div className="text-[20px] text-[#71717A] font-semibold">
            Order history
          </div>
          <div>
            <div className="flex justify-between w-[440px] items-center">
              <div className="font-bold text-[#09090B] text-[16px]">
                $26.97(#201556)
              </div>
              <div>
                <Button className="rounded-full border-2 border-red-400 bg-white text-black">
                  Pending
                </Button>
              </div>
            </div>
            <div className="flex justify-between w-[420px] items-center mt-[12px]">
              <div className="font-normal text-[#71717A] text-[12px] flex  gap-1 items-center">
                <LuSoup /> Sunshine stackers
              </div>
              <div>x 1</div>
            </div>
            <div className="flex justify-between w-[420px] items-center mt-[12px]">
              <div className="font-normal text-[#71717A] text-[12px] flex  gap-1 items-center">
                <LuSoup /> Sunshine stackers
              </div>
              <div>x 1</div>
            </div>
            <div className="flex justify-between w-[420px] items-center mt-[12px]">
              <div className="font-normal text-[#71717A] text-[12px] flex  gap-1 items-center">
                <CiStopwatch /> 2024/12/20
              </div>
            </div>
            <div className="flex justify-between w-[420px] items-center mt-[12px]">
              <div className="font-normal text-[#71717A] text-[12px] flex  gap-1 items-center">
                <CiMap /> 2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг
              </div>
            </div>
            <div className="w-[420px] border-b border-3 border-dashed mt-4"></div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between w-[440px] items-center">
              <div className="font-bold text-[#09090B] text-[16px]">
                $26.97(#201556)
              </div>
              <div>
                <Button className="rounded-full  bg-[#F4F4F5] text-black">
                  Delivered
                </Button>
              </div>
            </div>
            <div className="flex justify-between w-[420px] items-center mt-[12px]">
              <div className="font-normal text-[#71717A] text-[12px] flex  gap-1 items-center">
                <LuSoup /> Sunshine stackers
              </div>
              <div>x 1</div>
            </div>

            <div className="flex justify-between w-[420px] items-center mt-[12px]">
              <div className="font-normal text-[#71717A] text-[12px] flex  gap-1 items-center">
                <CiStopwatch /> 2024/12/20
              </div>
            </div>
            <div className="flex justify-between w-[420px] items-center mt-[12px]">
              <div className="font-normal text-[#71717A] text-[12px] flex  gap-1 items-center">
                <CiMap /> 2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг
              </div>
            </div>
            <div className="w-[420px] border-b border-3 border-dashed mt-4"></div>
          </div>
          <div className="bg-[#F4F4F5] h-[182px] w-[440px] mt-[20px] rounded-md flex flex-col items-center justify-center">
            <div>
              <img src="/Logo.png"></img>
            </div>
            <div className="text-[16px] text-[#09090B] font-bold mt-2">
              No Orders Yet?
            </div>
            <div className="w-[343px] text-[#71717A] text-[12px] flex flex-col mt-5 items-center justify-center">
              <div>🍕 "You haven't placed any orders yet. Start exploring</div>
              <div> our menu and satisfy your cravings!"</div>
            </div>
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
            <div className="pr-[16px] text-[#09090B] font-bold ">$00.00</div>
          </div>
          <div className="flex justify-between mt-[20px]">
            <div className="text-[#71717A] text-[16px]">Shipping</div>
            <div className="pr-[16px] text-[#09090B] font-bold  ">$0.00</div>
          </div>
          <div className="w-[440px] border-t border-4 border-dashed mt-5"></div>
          <div className="flex justify-between mt-[20px]">
            <div className="text-[#71717A] text-[16px]">Total</div>
            <div className="pr-[16px] text-[#09090B] font-bold  ">$0.00</div>
          </div>
        </div>
        <Button className="w-[440px] rounded-full mt-[20px] ml-[16px]">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Orderhistory;
