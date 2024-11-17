import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
const Report = () => {
  const [showDistrict, setShowDistrict] = useState(false);
  const [showSpecialist, setShowSpecialist] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);
  return (
    <section className="py-20 bg-[#dae0e9]">
      <div className="container max-w-[1920px] 2xl:px-20">
        <div className="flex flex-col items-center justify-center pb-10">
          <h2 className="font-Poppins font-semibold text-4xl text-center  pb-5 text-[#333333] w-[415px]">
            Report <span className="text-red-500">Incorrect</span> Doctor
            Chamber Information
          </h2>
          <p className="font-Poppins font-normal text-xl text-center text-[#828282] w-[575px]">
            Notice incorrect doctor chamber information? Report it to help us
            keep our details accurate and reliable.
          </p>
        </div>
        <form>
          <div className="py-7 px-10 bg-white drop-shadow rounded-xl w-3/5 m-auto">
            <input
              className="block p-5 w-full outline-none border-2 rounded-xl"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="block p-5 w-full outline-none border-2 rounded-xl my-5"
              type="number"
              placeholder="Your Phone Number"
            />
            {/* =========================================================================================== */}
            <div className="flex gap-5 justify-between mb-5">
              <div
                onClick={() => setShowDistrict(!showDistrict)}
                className="p-5 border-2 w-1/2 rounded-xl cursor-pointer"
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

              <div
                onClick={() => setShowSpecialist(!showSpecialist)}
                className="p-5 border-2 w-1/2 rounded-xl cursor-pointer"
              >
                <p className="font-Poppins font-normal text-base text-[#828282]">
                  Specialist
                </p>
                <div className="text-2xl font-Poppins font-medium text-[#333333] home_dropDown relative">
                  <h4 className=" flex items-center justify-between gap-5">
                    General Physician
                    <FaChevronDown className="home_chevron " />
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
            </div>
            {/* ====================================================================== */}
            {/* ============================================================================= */}
            <div
              onClick={() => setShowDoctor(!showDoctor)}
              className="p-5 border-2 w-full rounded-xl cursor-pointer"
            >
              <div className="text-2xl font-Poppins font-medium text-[#333333] home_dropDown relative">
                <h4 className=" flex items-center justify-between gap-5 font-Poppins font-normal text-lg text-[#828282]">
                  Choose Doctor
                  <FaChevronDown className="home_chevron " />
                </h4>
                {showDoctor && (
                  <ul className="home_dropDown_items border-2 flex flex-col gap-3 shadow">
                    <span>
                      <CiSearch className="absolute left-4 top-[18px] text-xl text-[#828282]" />
                      <input
                        className="border-2 w-full pl-8 rounded-xl placeholder:text-lg"
                        placeholder="Search"
                        type="text"
                      />
                    </span>
                    <li>Doctor 1</li>
                    <li>Doctor 2</li>
                    <li>Doctor 3</li>
                    <li>Doctor 4</li>
                    <li>Doctor 5</li>
                    <li>Doctor 6</li>
                    <li>Doctor 7</li>
                    <li>Doctor 8</li>
                  </ul>
                )}
              </div>
            </div>

            {/* ============================================================================= */}
            <textarea
              className="block p-5 w-full  outline-none border-2 rounded-xl my-5 placeholder:text-left"
              name=""
              id=""
              placeholder="What seems to be the issue?"
            ></textarea>
            <button className="p-5 m-auto text-white bg-brand rounded-xl flex items-center  gap-2 text-xl font-Poppins font-normal">
              Submit <FaArrowRightLong />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Report;
