import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const MedicalTipsItems = ({ img, title }) => {
  return (
    <div className="p-5 border bg-white rounded-xl flex gap-2">
      <div className="overflow-hidden rounded-md">
        <img className="w-full h-full" src={img} alt="medicalTips-img" />
      </div>
      <div>
        <p className="font-Poppins font-normal text-base text-[#828282]">
          {title}
        </p>
        <h3 className="text-xl text-[#333333] font-Poppins font-semibold w-[240px] py-1">
          Drink 8 glasses of water daily for better health
        </h3>
        <p className="font-Poppins font-light text-sm text-[#828282] w-[240px] pb-3">
          Staying well-hydrated is crucial for maintaining optimal health and
          overall...
        </p>
        <button className=" text-brand  flex items-center  gap-2 text-sm font-Poppins font-normal ">
          Read More <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default MedicalTipsItems;
