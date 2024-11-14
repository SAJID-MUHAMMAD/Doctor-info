import React from "react";
import Banner from "../components/home-pages/Banner";
import Doctors from "../components/home-pages/Doctors";
import MedicalDevice from "../components/home-pages/MedicalDevice";

const Home = () => {
  return (
    <>
      <Banner />
      <Doctors />
      <MedicalDevice />
    </>
  );
};

export default Home;
