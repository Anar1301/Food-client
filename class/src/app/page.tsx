"use client";

import Footer from "@/_components/Home/Footer";
import Header from "@/_components/Home/Headerclient";

import { Button } from "@/_components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/_components/ui/dialog";

import { ButtonGroup } from "@/components/ui/button-group";
import { MinusIcon, PlusIcon } from "lucide-react";

import { useEffect, useState } from "react";
type ordercart = {
  title: string;
  price: number;
};

const ClientHomepage = () => {
  const [plus, setPlus] = useState(1);
  const [price, setPrice] = useState(13);

  const [ordercart, SetOrdercart] = useState<ordercart[]>([]);

  const firstprice = 13;
  function handleonplus() {
    setPlus(plus + 1);

    setPrice(price + firstprice);
  }
  function handleonminus() {
    if (plus === 0 || price === firstprice) {
      setPrice(firstprice);
      return;
    }
    setPlus(plus - 1);
    setPrice(price - firstprice);
  }
  type food = {
    title: string;
    price: number;
  };
  const handleoncart = (food: { title: string; price: number }) => {
    const [categories, setCategories] = useState([]);
    // SetOrdercart([{ ...ordercart, title: food.title, price: food.price }]);
    console.log("irjaga food", food);
    ordercart.push(food);
    console.log("daraa ni harah ", ordercart);

    alert("Food is being added to the card");
  };

  // const [categories, setCategories] = useState<Category[]>([]);
  // type Category = {
  //   _id: string;
  //   name: string;
  // };
  // const [newName, setNewName] = useState("");

  // const createCategoryHandler = async () => {
  //   await fetch("http://localhost:4000/api/categories", {
  //     method: "POST",
  //     mode: "no-cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: newName,
  //     }),
  //   });
  //   await getCategories();
  // };

  // const getCategories = async () => {
  //   const result = await fetch("http://localhost:4000/api/categories");
  //   const responseData = await result.json();

  //   const { data } = responseData;

  //   getCategories(data);
  // };
  // useEffect(() => {
  //   getCategories();
  // }, []);

  const Foods = [
    {
      title: "Finger food1",
      price: price,
    },
    {
      title: "Finger food2",
      price: price,
    },
    {
      title: "Finger food3",
      price: price,
    },
    {
      title: "Finger food",
      price: price,
    },
    {
      title: "Finger food",
      price: price,
    },
    {
      title: "Finger food",
      price: price,
    },
  ];
  console.log("door harah", ordercart);
  return (
    <div className="bg-[#404040] h-fit w-[1440px] mx-auto">
      <Header
        ordercart={ordercart}
        plus={plus}
        price={price}
        handleonminus={handleonminus}
        handleonplus={handleonplus}
      />

      <img src="BG.svg"></img>
      <div className="w-[1264px] mx-auto h-sceen ">
        <div className="text-white font-bold mt-[20px]">Appetizers</div>
        <div className="flex flex-wrap gap-[20px] mt-[24px] text-[30px] ">
          {Foods.map((food, index) => (
            <div
              key={index}
              className="h-[350px] w-[400px] bg-white rounded-md"
            >
              <div className="mx-[16px] my-[16px]">
                <div className="relative">
                  <img src="/food1.png"></img>
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src="/icon.png"
                        height={45}
                        width={45}
                        className="ml-4 absolute  top-36.5 left-71.5 "
                      />
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[820px] max-h-[412px]">
                      <div className="flex ">
                        <div className="w-[377px] h-[364px] ">
                          <img
                            src="/food1.png"
                            className="w-[377px] h-[377px] object-cover rounded-md "
                          ></img>
                        </div>
                        <div className="flex flex-col mx-[24px]">
                          <div className=" ">
                            <div className="text-red-500 font-semibold text-[30px]">
                              {food.title}
                            </div>
                          </div>
                          <div className="text-[16px] mt-[12px] text-[#09090B]">
                            Fluffy pancakes stacked with fruits, cream, syrup,
                            and powdered sugar.
                          </div>
                          <div className="mt-[108px] flex justify-between items-center">
                            <div>
                              <div>Total price</div>
                              <div className="text-[#09090B] text-[24px] font-semibold">
                                ${food.price}
                              </div>
                            </div>
                            <div>
                              <ButtonGroup
                                aria-label="Media controls"
                                className="h-fit gap-2"
                              >
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={handleonminus}
                                >
                                  <MinusIcon />
                                </Button>
                                <Button className="rounded-full">{plus}</Button>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={handleonplus}
                                >
                                  <PlusIcon />
                                </Button>
                              </ButtonGroup>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleoncart(food)}
                            className="mt-[24px]"
                          >
                            Add to card
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex justify-between items-center mt-[20px]">
                  <div className="text-red-500 font-semibold text-[30px]">
                    {food.title}
                  </div>
                  <div className="text-[#09090B] text-[24px] font-semibold">
                    ${price}
                  </div>
                </div>
                <div className="text-[16px]  text-[#09090B]">
                  Fluffy pancakes stacked with fruits, cream, syrup, and
                  powdered sugar.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientHomepage;
