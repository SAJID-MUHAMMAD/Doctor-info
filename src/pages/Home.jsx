import React from "react";
import Banner from "../components/home-pages/Banner";
import Doctors from "../components/home-pages/Doctors";
import MedicalDevice from "../components/home-pages/MedicalDevice";
import FindDoctor from "../components/home-pages/FindDoctor";
import MedicalTips from "../components/home-pages/MedicalTips";
import Report from "../components/home-pages/Report";
import Review from "../components/home-pages/Review";

const Home = () => {
  return (
    <>
      <Banner />
      <Doctors />
      <MedicalDevice />
      <FindDoctor />
      <MedicalTips />
      <Report />
      <Review />
    </>
  );
};

export default Home;
