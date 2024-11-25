import React from "react";
import Banner from "../components/doctorInformation-pages/Banner";
import AboutDoctor from "../components/doctorInformation-pages/AboutDoctor";

const DoctorInformation = () => {
  return (
    <>
      <Banner />
      <AboutDoctor />
      {/* <div className="container max-w-[1280px] xxl:max-w-[1440px] xxl:px-20 mt-28 pb-20 pt-5"></div> */}
    </>
  );
};

export default DoctorInformation;
