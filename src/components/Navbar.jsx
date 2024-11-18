import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-[#FFFFFF] border py-10 ">
      <div className="container max-w-[1280px] flex items-center justify-between">
        <div>
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-10 font-Poppins font-normal text-xl text-[#828282]">
            <li className="hover:text-brand">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-brand">
              <Link to="/">Specialist</Link>
            </li>
            <li className="hover:text-brand">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hover:text-brand">
              <Link to="/">Leave a Review</Link>
            </li>
            <li className="hover:text-brand">
              <Link to="/">About Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="py-2 px-5 bg-brand text-white font-Poppins font-semibold text-xl rounded-full">
            Add Doctor
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
