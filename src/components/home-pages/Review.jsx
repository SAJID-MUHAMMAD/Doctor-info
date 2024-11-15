import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex gap-20">
          <div className="overflow-hidden rounded-2xl  drop-shadow">
            <img
              className="w-full"
              src="/public/Home-img/review-img1.png"
              alt="review-img"
            />
          </div>
          <div className="overflow-hidden rounded-2xl drop-shadow">
            <img
              className="w-full"
              src="/public/Home-img/review-img2.png"
              alt="review-img"
            />
          </div>
          <div className="overflow-hidden rounded-2xl drop-shadow relative">
            <img
              className="w-full"
              src="/public/Home-img/review-img3.png"
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
