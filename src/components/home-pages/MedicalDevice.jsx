import React from "react";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DoctorItems from "./DoctorItems";
import MedicalDeviceItems from "./MedicalDeviceItems";
import MedicalDeviceDetails from "./MedicalDeviceDetails";
const MedicalDevice = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    autoplaySpeed: 2000,
    arrows: false,
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "30px",
            color: "#3B82F6",
            backgroundColor: "#dae0e9",
            borderRadius: "45%",
          }}
        >
          {i + 1}
        </div>
      );
    },
  };
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="font-Poppins font-semibold text-4xl text-center pb-5">
          Top-Quality Medical Devices for Home Use
        </h2>

        <Slider className="" {...settings}>
          <div className="1">
            <div className="flex justify-around pb-3 gap-5">
              <MedicalDeviceItems />
              <MedicalDeviceItems />
              <MedicalDeviceItems />
            </div>
            <div className="flex justify-around gap-5">
              <MedicalDeviceItems />
              <MedicalDeviceItems />
              <MedicalDeviceItems />
            </div>
          </div>
          <div className="2">
            <div className="flex justify-around pb-3 gap-5">
              <MedicalDeviceItems />
              <MedicalDeviceItems />
              <MedicalDeviceItems />
            </div>
            <div className="flex justify-around gap-5">
              <MedicalDeviceItems />
              <MedicalDeviceItems />
              <MedicalDeviceItems />
            </div>
          </div>
        </Slider>
        <div className="pt-20 flex justify-between gap-4">
          <MedicalDeviceDetails />
          <MedicalDeviceDetails />
          <MedicalDeviceDetails />
        </div>
      </div>
    </section>
  );
};

export default MedicalDevice;
