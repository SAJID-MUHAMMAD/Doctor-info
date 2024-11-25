import React from "react";
import { PiOfficeChair } from "react-icons/pi";
import { MdPhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiMiniPhoneArrowUpRight } from "react-icons/hi2";
import { IoCopyOutline } from "react-icons/io5";

const DoctorDetails = () => {
  return (
    <div className="flex gap-5 justify-between">
      {/* =================================================================================================================== */}
      <div className="p-5 rounded-3xl border bg-white w-[780px]">
        {/* doctor titles */}
        <div className="pb-5">
          <div className="flex gap-5">
            <div className="rounded-md overflow-hidden w-[88px] h-[88px]">
              <img
                className="w-full h-full"
                src="/specialist-img/sp-doctor.png"
                alt="sp-doctor"
              />
            </div>
            <div>
              <h3 className="font-Poppins font-semibold text-xl pb-2">
                Dr. Md. Zahidul Islam
              </h3>
              <p className="font-Poppins font-normal text-sm text-[#828282] pb-5 w-[250px]">
                MBBSBCS (Health)MPhil (Pathology). Pathologist
              </p>
              <h3 className="text-base font-Poppins font-normal text-brand py-3 px-5 bg-bgColor rounded-full w-fit h-fit">
                18 Years of Experience Overall
              </h3>
              {/* doctor titles end */}

              {/* doctor details start  */}
              <div className="flex gap-5 mt-5 pt-5 border-t-2">
                <div className="w-[300px]">
                  <div className="flex items-center gap-1 pb-3">
                    <PiOfficeChair className="text-xl text-[#828282]" />

                    <p className="font-Poppins font-medium text-xl text-[#828282]">
                      Chamber
                    </p>
                  </div>
                  <p className="font-Poppins font-normal text-lg text-[#333333] w-[275px]">
                    House # 25, Road # 7, Sector # 4, Jashim Uddin Moar, Uttara,
                    Dhaka, Dhaka-1230, Bangladesh
                  </p>
                </div>
                <div className="w-[300px]">
                  <div className="flex items-center gap-1 pb-3">
                    <img
                      className="text-xl text-[#828282]"
                      src="/specialist-img/sp-icon2.png"
                      alt="sp-icon"
                    />
                    <p className="font-Poppins font-medium text-xl text-[#828282]">
                      Working In
                    </p>
                  </div>
                  <p className="font-Poppins font-normal text-lg text-[#333333]  w-[220px]">
                    Shaeed Suhrwawrdy Medical College Hospital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1 pb-3">
            <img
              className="w-5 h-5"
              src="/specialist-img/sp-icon.png"
              alt="sp-icon"
            />
            <p className="font-Poppins font-medium text-xl text-[#828282]">
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
            <p className="font-Poppins font-normal text-base text-[#333333] bg-[#F2F2F2] py-1 px-2 rounded-md">
              Endosurgery
            </p>
            <p className="font-Poppins font-normal text-base text-[#333333] bg-[#F2F2F2] py-1 px-2 rounded-md">
              Endosurgery
            </p>
            <p className="font-Poppins font-normal text-base text-[#333333] bg-[#F2F2F2] py-1 px-2 rounded-md">
              Endosurgery
            </p>
          </div>
        </div>

        {/* doctor details start  */}
      </div>
      {/* =================================================================================================================== */}
      <div className="py-20 px-16 bg-white rounded-3xl w-[480px] border">
        <div>
          <div className="p-5 w-fit bg-bgColor text-brand text-xl rounded-full m-auto">
            <MdPhoneInTalk />
          </div>
          <p className="font-Poppins font-normal text-xl text-[#333333] text-center m-auto pt-14 pb-5 w-[230px]">
            Doctor's Chamber Contact for Appointments
          </p>
          <h4 className="font-Poppins font-medium text-xl text-[#333333] text-center pb-5">
            +88018xxxxxxxx
          </h4>
          <div className="flex gap-3 justify-center">
            <Link
              to="tel:+88018xxxxxxxx"
              className="flex gap-2 items-center text-xl font-Poppins font-normal text-brand border-2 border-brand rounded-xl p-3 bg-bgColor "
            >
              <HiMiniPhoneArrowUpRight />
              Call Now
            </Link>
            <Link
              to="tel:+88018xxxxxxxx"
              className="flex gap-2 items-center text-xl font-Poppins font-normal text-brand border-2 border-brand rounded-xl p-3 bg-bgColor "
            >
              <IoCopyOutline />
              Copy Number
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
