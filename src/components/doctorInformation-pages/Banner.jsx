import React from "react";
import DoctorDetails from "./DoctorDetails";

const Banner = () => {
  return (
    <section className="bg-bgColor pt-20">
      <div className="container max-w-[1280px] xxl:max-w-[1440px] xxl:px-20">
        <div className="relative bottom-[-320px] mt-[-320px] mb-[320px]">
          <DoctorDetails />
          <div className="py-5 px-8 border rounded-3xl mt-5">
            <h3 className="font-Poppins font-medium text-xl text-[#828282] pb-3">
              About Doctor
            </h3>
            <p className="font-Poppins font-normal text-xl text-[#333333]">
              Dr. Md. Zahidul Islam is a highly qualified Pathologist with an
              MBBS, BCS (Health), and MPhil in Pathology. He has undergone
              extensive training and education, including medical school and
              specialized residency programs, to develop expertise in pathology.
              Dr. Islam is skilled in diagnosing and analyzing diseases by
              examining tissues, organs, and bodily fluids. His expertise plays
              a crucial role in identifying and managing various medical
              conditions, aiding in accurate treatment decisions. If you require
              a Pathology Specialist, Dr. Md. Zahidul Islam is an excellent
              choice. For more information, call us at 09611 530 530.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
