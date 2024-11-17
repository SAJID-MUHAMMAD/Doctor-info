import React from "react";
import { MdPermPhoneMsg } from "react-icons/md";
import { IoMailOpen } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-20 pb-5 px-1 bg-[#d7e0ee]">
      <div className="container max-w-[1920px] 2xl:px-20">
        <div className="flex justify-between border-b-2 pb-20 border-slate-300 ">
          <div>
            <div>
              <img src="/logo.png" alt="logo" />
            </div>
            <Link
              className="font-Poppins font-normal text-xl text-[#333333] flex items-center gap-2 py-5"
              to="tel:+8801846447109"
              target="blank"
            >
              <span className="bg-slate-400 p-3 rounded-full">
                <MdPermPhoneMsg />
              </span>
              +8801846447109
            </Link>
            <Link
              className="font-Poppins font-normal text-xl text-[#333333] flex items-center gap-2 pb-5"
              to="mailto:email@email.com"
              target="blank"
            >
              <span className="bg-slate-400 p-3 rounded-full">
                <IoMailOpen />
              </span>
              email@email.com
            </Link>
            <Link
              className="font-Poppins font-normal text-xl text-[#333333] flex items-center gap-2 w-[305px]"
              to="https://www.google.com/maps/search/++++++++++++++1234+Elm+Street,+Gulshan-2,+Dhaka+1212,+Bangladesh/@23.7968399,90.4039191,15z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
              target="blank"
            >
              <span className="bg-slate-400 p-3 rounded-full">
                <FaLocationDot />
              </span>
              1234 Elm Street, Gulshan-2, Dhaka 1212, Bangladesh
            </Link>
          </div>
          <div className="flex gap-24 text-xl text-[#333333] font-Poppins font-normal ">
            <div>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link to="/">About us</Link>
                </li>
                <li>
                  <Link to="/">How It Works</Link>
                </li>
                <li>
                  <Link to="/">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/">Add Privet Hospital</Link>
                </li>
                <li>
                  <Link to="/">Add Diagostics Center</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Refund-Return Policy</Link>
                </li>
                <li>
                  <Link to="/">Help</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-base text-[#828282] font-Poppins font-normal text-center pt-5">
          © Websitename. 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
