import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Dropdwon = ({ title, option }) => {
  return (
    <div className="p-5 border-2 w-[250px] rounded-xl leading-3 cursor-pointer">
      <p className="font-Poppins font-normal text-base text-[#828282]">
        {title}
      </p>
      <div className="text-2xl font-Poppins font-medium text-[#333333] home_dropDown relative">
        <h4 className=" flex items-center justify-between gap-5">
          {option} <FaChevronDown className="home_chevron " />
        </h4>
        <ul className="home_dropDown_items border-2 flex flex-col gap-3 shadow">
          <span>
            <CiSearch className="absolute left-4 top-[18px] text-xl text-[#828282]" />
            <input
              className="border-2 w-full pl-8 rounded-xl placeholder:text-lg"
              placeholder="Search"
              type="text"
            />
          </span>
          <li>Barisal</li>
          <li>Chittagong</li>
          <li>Dhaka</li>
          <li>Khulna</li>
          <li>Mymensingh</li>
          <li>Rangpur</li>
          <li>Sylhet</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdwon;
