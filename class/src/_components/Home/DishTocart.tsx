"use client";
import { Button } from "@/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/_components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ButtonGroup } from "@/components/ui/button-group";
import { Cartfood, Dish } from "@/lib/type";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
const DishTocart = ({
  setSelectedFood,
  food,
  price,
  plus,
  handleonminus,
  handleonplus,
}: {
  food: Dish;
  setSelectedFood: Function;
  price: number;
  plus: number;
  handleonminus: Function;
  handleonplus: Function;
}) => {
  const [open, setOpen] = useState(closed);
  const handleoncart = (food: Dish) => {
    const Cartfood: Cartfood[] = JSON.parse(
      localStorage.getItem("Cartfood") ?? "[]"
    );
    Cartfood.push({ food: food, count: plus });
    localStorage.setItem("Cartfood", JSON.stringify(Cartfood));
    alert("Food is being added to the card");
  };
  return (
    <div className="relative">
      <img src={food.image} className="w-[366px] h-[210px] " alt={""}></img>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <img
            src="/icon.png"
            onClick={() => (setSelectedFood(food), setOpen(true))}
            height={45}
            width={45}
            className="ml-4 absolute  top-36.5 left-71.5 "
          />
        </DialogTrigger>

        <DialogContent className="sm:max-w-[820px] max-h-[412px]">
          <div className="flex ">
            <div className="w-[377px] h-[364px] ">
              <Image
                src={food.image}
                className="w-[377px] h-[377px] object-cover rounded-md "
                alt={""}
              ></Image>
            </div>
            <div className="flex flex-col mx-[24px]">
              <DialogTitle>
                <div className="text-red-500 font-semibold text-[30px]">
                  {food.name}
                </div>
              </DialogTitle>
              <div className="text-[16px] mt-[12px] text-[#09090B]">
                {food.ingredients}
              </div>
              <div className="mt-[108px] flex justify-between items-center w-[370px]">
                <div>
                  <div>Total price</div>
                  {price === 0 ? (
                    <div className="text-[#09090B] text-[24px] font-semibold">
                      ${food.price}
                    </div>
                  ) : (
                    <div className="text-[#09090B] text-[24px] font-semibold">
                      ${price}
                    </div>
                  )}
                </div>
                <div>
                  <ButtonGroup
                    aria-label="Media controls"
                    className="h-fit gap-2"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleonminus(food)}
                    >
                      <MinusIcon />
                    </Button>
                    <Button className="rounded-full">{plus}</Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleonplus(food)}
                    >
                      <PlusIcon />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <DialogFooter>
                <DialogClose>
                  <Badge
                    onClick={() => handleoncart(food)}
                    className="mt-[24px] w-[377px] h-[44px]"
                  >
                    Add to card
                  </Badge>
                </DialogClose>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DishTocart;
