import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";

const Banner = () => {
  const [showDivision, setShowDivision] = useState(false);
  const [showDistrict, setShowDistrict] = useState(false);
  const [showSpecialist, setShowSpecialist] = useState(false);
  return (
    <section className="bg-bgColor pt-20 relative">
      <div className=" absolute top-0 left-0">
        <img src="/Home-img/bannerVictor1.png" alt="bannerVictor" />
      </div>
      <div>
        <img
          className=" absolute bottom-0 right-0"
          src="/Home-img/bannerVictor2.png"
          alt="bannerVictor"
        />
      </div>
      <div className="max-w-[1280px] container relative ">
        <h1 className="text-7xl font-Poppins font-semibold text-center w-[822px] m-auto">
          Find the Best Doctors Near You in Bangladesh
        </h1>
        <p className="text-xl font-Poppins font-normal text-[#4F4F4F] text-center w-[630px] pt-14  m-auto">
          Find and Connect with the Most Recommended Doctors in Bangladesh
          Through Our Extensive Database of Local Healthcare Professionals
        </p>
        {/* ===================================================== DROPDOWN ============================================================== */}
        <div className="bg-white py-7 w-3/4 2xl:w-[950px] px-3 m-auto rounded-xl flex flex-col justidy-around relative bottom-[-90px] shadow">
          <div className="flex justify-around gap-3">
            {/* ============================================================================= */}
            <div
              onClick={() => setShowDivision(!showDivision)}
              className="p-5 border-2 w-[300px] rounded-xl leading-3 cursor-pointer"
            >
              <p className="font-Poppins font-normal text-base text-[#828282]">
                Division
              </p>
              <div className="text-2xl font-Poppins font-medium text-[#333333] home_dropDown relative">
                <h4 className=" flex items-center justify-between gap-5">
                  Rajshahi <FaChevronDown className="home_chevron " />
                </h4>
                {showDivision && (
                  <ul className="home_dropDown_items border-2 flex flex-col gap-3 menuList shadow">
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
                    <li>Rajshahi</li>
                    <li>Rangpur</li>
                    <li>Sylhet</li>
                  </ul>
                )}
              </div>
            </div>
            {/* ============================================================================= */}
            <div
              onClick={() => setShowDistrict(!showDistrict)}
              className="p-5 border-2 w-[300px] rounded-xl leading-3 cursor-pointer"
            >
              <p className="font-Poppins font-normal text-base text-[#828282]">
                District
              </p>
              <div className="text-2xl font-Poppins font-medium text-[#333333] home_dropDown relative">
                <h4 className=" flex items-center justify-between gap-5">
                  Chapai Nawabganj <FaChevronDown className="home_chevron " />
                </h4>
                {showDistrict && (
                  <ul className="home_dropDown_items border-2 flex flex-col gap-3 shadow">
                    <span>
                      <CiSearch className="absolute left-4 top-[18px] text-xl text-[#828282]" />
                      <input
                        className="border-2 w-full pl-8 rounded-xl placeholder:text-lg"
                        placeholder="Search"
                        type="text"
                      />
                    </span>
                    <li>Bogra</li>
                    <li>Joypurhat</li>
                    <li>Naogaon</li>
                    <li>Natore</li>
                    <li>Chapai Nawabganj</li>
                    <li>Pabna</li>
                    <li>Rajshahi</li>
                    <li>Sirajganj</li>
                  </ul>
                )}
              </div>
            </div>

            {/* ============================================================================= */}
            {/* ============================================================================= */}
            <div
              onClick={() => setShowSpecialist(!showSpecialist)}
              className="p-5 border-2 w-[300px] rounded-xl leading-3 cursor-pointer"
            >
              <p className="font-Poppins font-normal text-base text-[#828282]">
                Specialist
              </p>
              <div className="text-2xl font-Poppins font-medium text-[#333333] home_dropDown relative">
                <h4 className=" flex items-center justify-between gap-5">
                  General Physician <FaChevronDown className="home_chevron " />
                </h4>
                {showSpecialist && (
                  <ul className="home_dropDown_items border-2 flex flex-col gap-3 shadow">
                    <span>
                      <CiSearch className="absolute left-4 top-[18px] text-xl text-[#828282]" />
                      <input
                        className="border-2 w-full pl-8 rounded-xl placeholder:text-lg"
                        placeholder="Search"
                        type="text"
                      />
                    </span>
                    <li>General Physician</li>
                    <li>Cardiologist</li>
                    <li>Neurologist</li>
                    <li>Dermatologist</li>
                    <li>Endocrinologist</li>
                    <li>Psychiatrist</li>
                    <li>Gastroenterologist</li>
                    <li>Oncologist</li>
                  </ul>
                )}
              </div>
            </div>
            {/* ============================================================================= */}
          </div>
          {/* ===================================================== DROPDOWN ============================================================== */}
          <div className="pt-5 flex justify-between gap-3">
            <input
              className="border-2 leading-7 py-5 pl-5 w-3/4 outline-none rounded-xl placeholder:text-lg placeholder:font-Poppins placeholder:font-normal placeholder:text-[#828282] placeholder:w-fit"
              type="text"
              placeholder="Search by Doctor's name & Specialty"
            />
            <button className="flex items-center gap-3 leading-3 rounded-xl py-6 px-8 bg-brand text-xl font-normal font-Poppins text-white">
              <span>
                <CiSearch />
              </span>
              Find Doctors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
