import React from "react";

const DoctorItems = ({ img }) => {
  return (
    <div className="p-3 mb-3 w-1/4 bg-white drop-shadow	 hover:brightness-90	 cursor-pointer rounded-xl">
      <div className="rounded-xl overflow-hidden">
        <img className="w-full" src={img} alt="doctor-img" />
      </div>
      <div>
        <h3 className="font-Poppins font-semibold text-xl text-[#333333]">
          Dr. A. M. Shahed
        </h3>
        <p className="font-Poppins font-normal pt-1 pb-3 text-xs text-[#4F4F4F]">
          MBBS, BCS (Health), FCPS (Medicine)
        </p>
        <h4 className="font-Poppins font-medium text-sm text-[#828282]">
          Chamber
        </h4>
        <p className="font-Poppins font-normal text-base text-[#333333] pt-1 pb-3">
          House # 25, Road # 7, Sector # 4, Jashim Uddin Moar, Uttara, Dhaka,
          Dhaka-1230, Bangladesh
        </p>
        <h4 className="font-Poppins font-medium text-sm text-[#828282]">
          Total Exprience
        </h4>
        <p className="font-Poppins font-normal text-sm text-center text-[#3B82F6] bg-[#dae0e9] rounded-full w-fit px-1 py-1 mt-2 mb-3">
          5+ Years of experience Overall
        </p>
        <h4 className="font-Poppins font-medium text-sm text-[#828282]">
          Specialist
        </h4>
        <div className="flex gap-2 flex-wrap py-2">
          <p className="font-Poppins font-normal text-sm text-[#3B82F6] bg-[#dae0e9] px-1 py-1 rounded-full">
            Plastic Surgeon
          </p>
          <p className="font-Poppins font-normal text-sm text-[#3B82F6] bg-[#dae0e9] px-2 py-1 rounded-full">
            Plastic Surgeon
          </p>
          <p className="font-Poppins font-normal text-sm text-[#3B82F6] bg-[#dae0e9] px-2 py-1 rounded-full">
            Plastic Surgeon
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorItems;
