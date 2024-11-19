import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Specialist_items = () => {
  return (
    <Link
      to="/SpecialistSearch"
      className="p-5 w-1/4 bg-white drop-shadow hover:drop-shadow-xl rounded-xl flex flex-col justify-center items-center"
    >
      <div>
        <div className="bg-bgColor p-5 w-fit rounded-full m-auto">
          <FaUserDoctor className="text-4xl text-[#3B82F6]" />
          {/* <img src="/specialist-img/gp.png" alt="" /> */}
        </div>
        <h2 className="font-Poppins font-medium text-2xl text-[#333333] text-center pt-5 pb-2">
          General Physician
        </h2>
        <p className="font-Poppins font-normal text-sm text-[#4F4F4F] text-center w-[245px] pb-[62px]">
          Cold Flu Feaver Vomiting infections headaches or any other General
          Health issues.
        </p>
      </div>
    </Link>
  );
};

export default Specialist_items;
