import React from "react";

const Header = () => {
  return (
    <div className="w-[1440px] h-[180px] bg-clack flex items-center mx-auto justify-between">
      <div className="flex gap-4">
        <img height={46} width={37} src="/logo.png"></img>
        <div>
          <div>NomNom</div>
          <div>Swift delivery</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>
          {" "}
          <input
            className="bg-white rounded-full text-black placeholder:text-black  placeholder:pl-4"
            placeholder="Add location"
          ></input>
        </div>

        <div className="w-[188px] h-[104px] bg-white rounded-md text-black items-center justify-center flex  flex-col gap-2">
          <div>Test@gmail.com</div>
          <button className=" bg-gray-300 rounded-full items-center">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
