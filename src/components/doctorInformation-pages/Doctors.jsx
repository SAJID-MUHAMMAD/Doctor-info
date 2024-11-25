import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DoctorItems from "../home-pages/DoctorItems";
const Doctors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    autoplaySpeed: 2000,
    autoplay: true,
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
      <div className="container max-w-[1280px] xxl:max-w-[1440px] xxl:px-20">
        <h2 className="font-Poppins font-semibold text-4xl text-[#333333] pb-10">
          Top Endoscopy Specialists for Expert Surgical Care
        </h2>
        <Slider className="" {...settings}>
          <div className="1">
            <div className="flex gap-4 justify-between ">
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
            </div>
            <div className="flex gap-4 pt-3 justify-between ">
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
            </div>
          </div>
          <div className="1">
            <div className="flex gap-4 justify-between ">
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
            </div>
            <div className="flex gap-4 pt-3 justify-between ">
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/Home-img/doctors/doctor-img1.png" />
            </div>
          </div>
        </Slider>
        <div className="mt-20 overflow-hidden rounded-3xl">
          <img
            className="w-full"
            src="/specialist-img/sp-add2.png"
            alt="sp-add"
          />
        </div>
      </div>
    </section>
  );
};

export default Doctors;
