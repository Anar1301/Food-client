"use client";

import { useEffect, useState } from "react";

const ClientHomepage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  type Category = {
    _id: string;
    name: string;
  };

  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/api/categories");
    const responseData = await result.json();

    const { data } = responseData;

    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="bg-[#404040] h-screen w-[1440px] mx-auto">
      <div className="w-[1264px] mx-auto h-sceen ">
        <div className="text-white font-bold">Appetizers</div>
        <div className="flex flex-wrap gap-[20px] mt-[54px] text-[30px] ">
          {Array.from({ length: 6 }).map(() => (
            <div className="h-[350px] w-[400px] bg-white rounded-md">
              <div className="mx-[16px] my-[16px]">
                <div>
                  <img src="/food1.png"></img>
                </div>
                <div className="flex justify-between">
                  <div className="text-red-500 font-semibold">Finger food</div>
                  <div>$12.99</div>
                </div>
                <div className="text-[14px]">
                  Fluffy pancakes stacked with fruits, cream, syrup, and
                  powdered sugar.
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {categories.map((categor) => (
            <div>{categor.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientHomepage;
