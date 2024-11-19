import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[1280px] xxl:max-w-[1440px] xxl:px-20">
        <h2 className="font-Poppins font-semibold text-[40px] w-full leading-[48px] pb-10">
          More than <span className="text-brand">90%</span> of our users
          consistently give us a 5-star rating, reflecting their high
          satisfaction with our service.
        </h2>
        <div className="flex justify-between gap-5">
          <div className="overflow-hidden rounded-2xl  drop-shadow w-[35%] h-[519px]">
            <img
              className="w-full h-full"
              src="/Home-img/review-img1.png"
              alt="review-img"
            />
          </div>
          <div className="overflow-hidden rounded-2xl drop-shadow w-[35%] h-[519px]">
            <img
              className="w-full h-full"
              src="/Home-img/review-img2.png"
              alt="review-img"
            />
          </div>
          <div className="overflow-hidden rounded-2xl drop-shadow w-[35%] h-[519px] relative">
            <img
              className="w-full h-full"
              src="/Home-img/review-img3.png"
              alt="review-img"
            />
            <Link to="https://www.youtube.com/" target="blank">
              <span className="rounded-full bg-brand p-5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hover:shadow-xl hover:shadow-[#728fba]">
                <FaPlayCircle className="text-xl text-white " />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
