import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FindDoctor = () => {
  return (
    <section className="bg-[#becde2] py-20 ">
      <div className="container max-w-[1920px] xxl:px-20">
        <h2 className="font-Poppins font-semibold text-4xl text-center pb-14 text-[#333333]">
          Your Key to Finding the Right Doctor
        </h2>
        <div className="flex justify-between gap-20">
          <div className="overflow-hidden rounded-[20px]">
            <img
              className="w-full"
              src="/Home-img/findDoctor.png"
              alt="findDoctor"
            />
          </div>
          <div>
            <h3 className="font-Poppins font-semibold text-4xl  pb-5 text-[#333333]">
              Extensive Directory
            </h3>
            <p className="font-Poppins font-normal text-xl text-[#828282] pb-10 2xl:w-[570px] w-[490px]">
              Access contact information for over 5,000 doctors across various
              specialties and locations.
            </p>
            <h3 className="font-Poppins font-semibold text-4xl  pb-5 text-[#333333]">
              Up-to-Date Information
            </h3>
            <p className="font-Poppins font-normal text-xl text-[#828282] pb-10 2xl:w-[570px] w-[490px]">
              Our database is updated daily to ensure you have the latest
              contact details for reliable communication.
            </p>
            <h3 className="font-Poppins font-semibold text-4xl pb-5 text-[#333333]">
              Direct Contact
            </h3>
            <p className="font-Poppins font-normal text-xl text-[#828282] pb-10 2xl:w-[570px]  w-[490px]">
              Easily find phone numbers and addresses to connect with doctors
              and schedule your appointments directly.
            </p>
            <button className="p-5 bg-brand text-white rounded-full flex items-center  gap-2 text-xl font-Poppins font-medium shadow">
              Find Doctors <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindDoctor;
