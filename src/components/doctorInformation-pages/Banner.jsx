import React from "react";
import DoctorDetails from "./DoctorDetails";

const Banner = () => {
  return (
    <section className="bg-bgColor pt-20">
      <div className="container max-w-[1280px] xxl:max-w-[1440px] xxl:px-20 mt-28 pb-20 pt-5">
        <DoctorDetails />
      </div>
    </section>
  );
};

export default Banner;
