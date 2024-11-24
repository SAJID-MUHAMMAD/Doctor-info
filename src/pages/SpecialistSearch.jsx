import React from "react";
import Banner from "../components/specialistSearch-pages/Banner";
import SpecialistSearchItems from "../components/specialistSearch-pages/SpecialistSearchItems";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoReload } from "react-icons/io5";

const SpecialistSearch = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
  };
  return (
    <section>
      <Banner />
      <div className="container max-w-[1280px] xxl:max-w-[1440px] xxl:px-20 mt-28 pb-20 pt-5">
        <h4 className="font-Poppins font-semibold text-4xl text-[#4F4F4F] m-auto py-3 px-5 bg-bgColor rounded-full w-fit mb-10">
          <span className="text-brand">80</span> General Physicians Found -
          Chamber Details Available
        </h4>
        <div className="flex gap-5">
          <div>
            <div className="flex flex-col gap-5">
              <SpecialistSearchItems />
              <SpecialistSearchItems />
              <SpecialistSearchItems />
              <SpecialistSearchItems />
              <SpecialistSearchItems />
              <SpecialistSearchItems />
              <SpecialistSearchItems />
              <SpecialistSearchItems />
              <SpecialistSearchItems />
              <SpecialistSearchItems />
            </div>
            <button className="flex gap-1 items-center py-4 px-5 rounded-full border border-brand text-brand text-xl font-Poppins font-medium hover:bg-brand hover:text-white mt-10 m-auto">
              <IoReload />
              Load More
            </button>
          </div>
          <div>
            <div className="flex gap-20 pb-5">
              <h3 className="font-Poppins font-semibold text-xl text-[#333333]">
                Important Health Devices
              </h3>
              <Link className="font-Poppins font-semibold text-xl text-[#333333] border-b-2 border-b-black hover:text-brand hover:border-b-2 hover:border-b-brand">
                See All
              </Link>
            </div>
            <div className="w-[410px]">
              <Slider {...settings}>
                <div>
                  <div className="w-[400px] h-[400px] bg-bgColor rounded-xl"></div>
                </div>
                <div>
                  <div className="w-[400px] h-[400px] bg-bgColor rounded-xl"></div>
                </div>
              </Slider>
            </div>
            <div className="overflow-hidden rounded-3xl mt-10 w-[410px]">
              <img
                className="w-full"
                src="/specialist-img/sp-add.png"
                alt="sp-add"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistSearch;
