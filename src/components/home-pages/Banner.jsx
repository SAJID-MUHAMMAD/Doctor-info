import React from "react";
import Dropdwon from "./Dropdwon";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-[#adbccd] to-[#8cb0d8] py-20  leading-[90px]  relative">
      <div className=" absolute top-0 left-0">
        <img src="/public/Home-img/bannerVictor1.png" alt="bannerVictor" />
      </div>
      <div>
        <img
          className=" absolute bottom-0 right-0"
          src="/public/Home-img/bannerVictor2.png"
          alt="bannerVictor"
        />
      </div>
      <div className="container relative ">
        <h1 className="text-7xl font-Poppins font-semibold text-center w-[822px] m-auto">
          Find the Best Doctors Near You in Bangladesh
        </h1>
        <p className="text-xl font-Poppins font-normal text-[#4F4F4F] text-center w-[630px] pt-5 pb-10 m-auto">
          Find and Connect with the Most Recommended Doctors in Bangladesh
          Through Our Extensive Database of Local Healthcare Professionals
        </p>
        {/* ===================================================== DROPDOWN ============================================================== */}
        <div className="bg-white  py-5 px-3 w-[800px] m-auto rounded-xl">
          <div className="flex gap-3 justify-center">
            <Dropdwon />
            <Dropdwon />
            <Dropdwon />
          </div>
          <div className="flex justify-center gap-5 items-center">
            <input className="bg-red-400 px-20 h-5" type="text" name="" id="" />
            <button>hei</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
