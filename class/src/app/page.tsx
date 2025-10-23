"use client";

import DishTocart from "@/_components/Home/DishTocart";
import Footer from "@/_components/Home/Footer";
import Header from "@/_components/Home/Headerclient";
import { Category, Dish } from "@/lib/type";
import Image from "next/image";
import { useEffect, useState } from "react";

const ClientHomepage = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [plus, setPlus] = useState(1);
  const [price, setPrice] = useState(0);
  const [firstprice, Setfirstprice] = useState(0);
  const [selectedFood, setSelectedFood] = useState<Dish | null>(null);

  const getCategories = async () => {
    const result = await fetch(
      "https://food-delivery-frontend-client-n86m.vercel.app/api/categories"
    );
    const responseData = await result.json();
    const { data } = responseData;
    setCategories(data);
  };

  const getDishes = async () => {
    const result = await fetch(
      "https://food-delivery-frontend-client-n86m.vercel.app/api/food"
    );
    const responseData = await result.json();
    const { data } = responseData;
    setDishes(data);
  };

  useEffect(() => {
    getCategories();
    getDishes();
  }, []);

  useEffect(() => {
    if (selectedFood) setPrice(selectedFood.price * plus);
  }, [plus]);

  function handleonplus({}) {
    setPlus(plus + 1);
  }

  function handleonminus(food: { price: number }) {
    Setfirstprice(food.price);
    if (plus === 1) {
      setPrice(food.price);
      return;
    }
    setPlus(plus - 1);
    setPrice(price - firstprice);
  }

  return (
    <div className="bg-[#404040] min-h-screen w-[1440px] mx-auto">
      <Header
        plus={plus}
        setPlus={setPlus}
        price={price}
        handleonminus={handleonminus}
        handleonplus={handleonplus}
      />

      <img src="BG.svg" alt={""} />

      <div className="w-[1264px] mx-auto py-8">
        {categories.map((category) => {
          const categoryDishes = dishes.filter(
            (dish) => dish.categorid?._id === category._id
          );

          if (categoryDishes.length === 0) return null;

          return (
            <div key={category._id} className="mb-12">
              <h2 className="text-white text-[28px] font-semibold mb-4">
                {category.name}
              </h2>

              <div className="flex flex-wrap gap-[20px]">
                {categoryDishes.map((food) => (
                  <div
                    key={food._id}
                    className="h-[350px] w-[400px] bg-white rounded-lg shadow-md"
                  >
                    <div className="mx-[16px] my-[16px]">
                      <DishTocart
                        setSelectedFood={setSelectedFood}
                        food={food}
                        plus={plus}
                        price={price}
                        handleonminus={handleonminus}
                        handleonplus={handleonplus}
                      />
                      <div className="flex justify-between items-center mt-[20px]">
                        <div className="text-red-500 font-semibold text-[22px]">
                          {food.name}
                        </div>
                        <div className="text-[#09090B] text-[20px] font-semibold">
                          ${food.price}
                        </div>
                      </div>
                      <div className="text-[15px] text-[#4A4A4A] mt-1 line-clamp-2">
                        {food.ingredients}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default ClientHomepage;
