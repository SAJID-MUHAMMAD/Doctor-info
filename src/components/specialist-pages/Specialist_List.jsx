import React from "react";
import Specialist_items from "./Specialist_items";

const Specialist_List = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[1280px] xxl:max-w-[1440px] xxl:px-20 flex flex-col gap-5">
        <div className="flex gap-5">
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
        </div>
        <div className="flex gap-5">
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
        </div>
        <div className="flex gap-5">
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
        </div>
        <div className="flex gap-5">
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
        </div>
        <div className="flex gap-5">
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
        </div>
        <div className="flex gap-5">
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
          <Specialist_items />
        </div>
      </div>
    </section>
  );
};

export default Specialist_List;
