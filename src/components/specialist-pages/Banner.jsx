import React from "react";
import Specialist_items from "./Specialist_items";

const Banner = () => {
  return (
    <section className="pt-20 bg-bgColor">
      <div className="container max-w-[1280px] xxl:max-w-[1440px] xxl:px-20">
        <h1 className="font-Poppins font-semibold text-4xl text-[#333333] text-center ">
          Please choose a medical specialty
        </h1>
        <div className="relative -bottom-44 -mt-28 flex gap-5 mb-28">
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
        </div>
      </div>
    </section>
  );
};

export default Banner;
