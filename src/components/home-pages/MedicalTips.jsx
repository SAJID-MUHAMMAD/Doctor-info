import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LuCalendarRange } from "react-icons/lu";
import { LuBookMinus } from "react-icons/lu";
import MedicalTipsItems from "./MedicalTipsItems";

const MedicalTips = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    // autoplay: true,
    arrows: false,
  };
  return (
    <section className="py-20">
      <div className="container max-w-[1280px]">
        <div className="flex justify-between border-b-2 pb-10">
          <div className="w-3/4">
            <h2 className="font-Poppins font-semibold text-4xl  pb-5 text-[#333333]">
              Discover the Latest Medical Tips and Insights
            </h2>
            <p className="font-Poppins font-normal text-xl w-4/5 text-[#828282]">
              Check out our latest medical tips for expert advice and essential
              health insights. Stay informed and improve your well-being with
              our regular updates.
            </p>
          </div>
          <div className="w-1/4 flex items-end justify-end mr-3 ">
            <button className="p-5 border-[1px] border-brand text-brand hover:bg-brand hover:text-white hover:border-none rounded-full flex items-center  gap-2 text-xl font-Poppins font-medium shadow">
              See All Tips <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="pt-10">
          <Slider {...settings}>
            <div>
              <div className="flex gap-3 justify-between">
                <p className="font-Poppins font-normal text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-2 rounded-full">
                  Latest Tips
                </p>

                <p className="font-Poppins font-normal  text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-[10px] w-fit rounded-full">
                  Nutrition and Diet
                </p>
                <p className="font-Poppins font-normal  text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-[10px] w-fit rounded-full">
                  Physical Fitness
                </p>
                <p className="font-Poppins font-normal  text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-[10px] w-fit rounded-full">
                  Mental Well-being
                </p>
                <p className="font-Poppins font-normal  text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-[10px] w-fit rounded-full">
                  Preventive Care
                </p>
                <p className="font-Poppins font-normal text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-[10px] w-fit rounded-full">
                  Hydration and Wellness
                </p>

                <p className="font-Poppins font-normal text-base w-fit text-[#4F4F4F] border-[1px] bg-white hover:bg-brand hover:text-white p-[10px] rounded-full">
                  Chronic Condition Management
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 justify-between">
                <p className="font-Poppins font-normal  text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-[10px] w-fit rounded-full">
                  Latest Tips
                </p>

                <p className="font-Poppins font-normal  text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-[10px] w-fit rounded-full">
                  Nutrition and Diet
                </p>
                <p className="font-Poppins font-normal  text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-[10px] w-fit rounded-full">
                  Physical Fitness
                </p>
                <p className="font-Poppins font-normal  text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-[10px] w-fit rounded-full">
                  Mental Well-being
                </p>
                <p className="font-Poppins font-normal  text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-[10px] w-fit rounded-full">
                  Preventive Care
                </p>
                <p className="font-Poppins font-normal  text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-[10px] w-fit rounded-full">
                  Hydration and Wellness
                </p>
                <p className="font-Poppins font-normal  text-base text-[#4F4F4F] drop-shadow border-[1px] hover:bg-brand hover:text-white p-[10px] w-fit rounded-full">
                  Chronic Condition Management
                </p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="pt-10 flex gap-5 justify-between">
          <div className="">
            <div className="overflow-hidden rounded-tl-[20px] rounded-tr-[20px]">
              <img
                className="w-full"
                src="/Home-img/medicalTips-img.png"
                alt="medicalTips-img"
              />
            </div>
            <div className="p-5 bg-white drop-shadow rounded-bl-[20px] rounded-br-[20px]">
              <div className=" flex gap-2 items-center">
                <div className="overflow-hidden rounded-xl w-20 h-20">
                  <img
                    className="w-full h-full bg-cover bg-no-repeat"
                    src="/Home-img/doctors/doctor-img1.png"
                    alt="doctor-img"
                  />
                </div>
                <div className="pt-5">
                  <h4 className="text-xl text-[#333333] font-Poppins font-semibold">
                    Dr. MD. Zahidul Islam
                  </h4>
                  <p className=" text-sm font-Poppins font-normal text-[#828282]">
                    MBBS, BCS (Health), FCPS (Medicine)
                  </p>
                  <div>
                    <span className="flex gap-1 text-sm  items-center font-Poppins font-normal text-[#828282]">
                      <LuCalendarRange />
                      August 15,2024
                    </span>
                    <span className="flex gap-1 items-center text-sm font-Poppins font-normal text-[#828282]">
                      <LuBookMinus />2 min Read
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-Poppins font-normal w-fit text-base text-brand bg-[#e0e9f8] drop-shadow my-5 p-2 rounded-full">
                Hydration and Wellness
              </p>
              <h3 className="text-3xl text-[#333333] font-Poppins font-semibold w-[565px] pt-9 pb-5">
                Drink 8 glasses of water daily for better health
              </h3>
              <p className="font-normal font-Poppins text-xl  text-[#828282] w-[570px] pt-4">
                Staying well-hydrated is crucial for maintaining optimal health
                and overall well-being. Drinking at least 8 glasses of water
                each day helps support various bodily functions, including
                digestion, nutrient absorption, and temperature regulation.
                Proper hydration also plays a vital role in keeping your skin
                healthy, boosting energy levels, and improving cognitive
                function. Regularly drinking enough water can prevent
                dehydration, which may lead to issues such as fatigue,
                headaches, and impaired physical performance...
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <MedicalTipsItems
              img="/Home-img/medicalTips-img1.png"
              title=" Hydration and Wellness"
            />
            <MedicalTipsItems
              img="/Home-img/medicalTips-img2.png"
              title="Preventive Care"
            />
            <MedicalTipsItems
              img="/Home-img/medicalTips-img3.png"
              title="Chronic Condition Management"
            />
            <MedicalTipsItems
              img="/Home-img/medicalTips-img4.png"
              title="Hydration and Wellness"
            />
            <MedicalTipsItems
              img="/Home-img/medicalTips-img4.png"
              title="Hydration and Wellness"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTips;
