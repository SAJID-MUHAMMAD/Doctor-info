import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DoctorItems from "./DoctorItems";
const Doctors = () => {
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
    <section className="pt-40">
      <div className="container mb-10">
        <h2 className="font-Poppins font-semibold text-4xl text-center pb-5">
          Expert Doctors You Can Trust{" "}
        </h2>
        <Slider className="" {...settings}>
          <div className="1">
            <div className="flex justify-between ">
              <DoctorItems img="/public/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/public/Home-img/doctors/doctor-img2.png" />
              <DoctorItems img="/public/Home-img/doctors/doctor-img3.png" />
              <DoctorItems img="/public/Home-img/doctors/doctor-img4.png" />
            </div>
            <div className="flex pt-3 justify-between ">
              <DoctorItems img="/public/Home-img/doctors/doctor-img5.png" />
              <DoctorItems img="/public/Home-img/doctors/doctor-img6.png" />
              <DoctorItems img="/public/Home-img/doctors/doctor-img7.png" />
              <DoctorItems img="/public/Home-img/doctors/doctor-img8.png" />
            </div>
          </div>
          <div className="2">
            <div className="flex justify-between ">
              <DoctorItems img="/public/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/public/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/public/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/public/Home-img/doctors/doctor-img1.png" />
            </div>
            <div className="flex pt-3 justify-between ">
              <DoctorItems img="/public/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/public/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/public/Home-img/doctors/doctor-img1.png" />
              <DoctorItems img="/public/Home-img/doctors/doctor-img1.png" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Doctors;
