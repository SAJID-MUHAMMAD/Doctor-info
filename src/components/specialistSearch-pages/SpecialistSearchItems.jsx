import React from "react";
import { PiOfficeChair } from "react-icons/pi";
import { Link } from "react-router-dom";

const SpecialistSearchItems = () => {
  return (
    <Link to="/DoctorInformation">
      <div className="p-5 rounded-xl border">
        {/* doctor titles */}
        <div className="flex gap-24 pb-5">
          <div className="flex gap-5">
            <div className="rounded-md overflow-hidden w-[88px] h-[88px]">
              <img
                className="w-full h-full"
                src="/specialist-img/sp-doctor.png"
                alt="sp-doctor"
              />
            </div>
            <div className="w-[269px]">
              <h3 className="font-Poppins font-semibold text-xl">
                Dr. Md. Zahidul Islam
              </h3>
              <p className="font-Poppins font-normal text-sm text-[#828282]">
                MBBSBCS (Health)MPhil (Pathology). Pathologist
              </p>
            </div>
          </div>

          <div className=" py-3 px-5 bg-bgColor rounded-full w-fit h-fit flex justify-center items-center gap-2">
            <img
              className="w-5 h-5"
              src="/specialist-img/knowledge.png"
              alt="knowledge"
            />
            <h3 className="text-base font-Poppins font-normal text-brand">
              18 Years of Experience Overall
            </h3>
          </div>
        </div>
        {/* doctor titles end */}
        {/* doctor details start  */}
        <div className="flex gap-5">
          <div>
            <div className="flex items-center gap-1 pb-3">
              <img
                className="w-5 h-5"
                src="/specialist-img/sp-icon.png"
                alt="sp-icon"
              />
              <p className="font-Poppins font-normal text-base text-[#828282]">
                Specialties
              </p>
            </div>
            <div className="flex gap-3 pb-3">
              <p className="font-Poppins font-normal text-base text-[#333333] bg-[#F2F2F2] py-1 px-2 rounded-md">
                Endosurgery
              </p>
              <p className="font-Poppins font-normal text-base text-[#333333] bg-[#F2F2F2] py-1 px-2 rounded-md">
                Endosurgery
              </p>
            </div>
            <div className="flex gap-3">
              <p className="font-Poppins font-normal text-base text-[#333333] bg-[#F2F2F2] py-1 px-2 rounded-md">
                Endosurgery
              </p>
              <button className="font-Poppins font-normal text-base text-brand border border-brand py-1 px-2 rounded-md">
                View All
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1 pb-3">
              <PiOfficeChair className="text-xl text-[#828282]" />

              <p className="font-Poppins font-normal text-base text-[#828282]">
                Chamber
              </p>
            </div>
            <p className="font-Poppins font-normal text-base text-[#333333] w-[220px]">
              House # 25, Road # 7, Sector # 4, Jashim Uddin Moar, Uttara,
              Dhaka, Dhaka-1230, Bangladesh
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1 pb-3">
              <img
                className="text-xl text-[#828282]"
                src="/specialist-img/sp-icon2.png"
                alt="sp-icon"
              />
              <p className="font-Poppins font-normal text-base text-[#828282]">
                Working In
              </p>
            </div>
            <p className="font-Poppins font-normal text-base text-[#333333]  w-[220px]">
              Shaeed Suhrwawrdy Medical College Hospital
            </p>
          </div>
        </div>
        {/* doctor details start  */}
        <button className="font-Poppins font-normal text-base text-white py-3 px-5 bg-brand shadow-xl hover:shadow-shadow rounded-full">
          Show Number
        </button>
      </div>
    </Link>
  );
};

export default SpecialistSearchItems;
