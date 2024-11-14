import React from "react";

const MedicalDeviceItems = () => {
  return (
    <div className="p-5 my-5 bg-white drop-shadow hover:brightness-90	 cursor-pointer rounded-xl">
      <div className="rounded-xl overflow-hidden">
        <img
          className="w-full"
          src="/public/Home-img/medicalDevice.png"
          alt="medicalDevice"
        />
      </div>
      <div>
        <h3 className="font-Poppins font-medium py-5 text-lg text-[#333333]">
          Omron Digital Blood Pressure Monitor (Model-HEM-7120)
        </h3>

        <p className="font-Poppins font-normal text-base text-[#3B82F6] bg-[#dae0e9] px-1 py-1 flex items-center justify-center  medical_device_discount">
          10% Discount
        </p>
        <div className="flex justify-between py-2">
          <span className="font-Poppins font-normal text-sm flex gap-2 items-center">
            <p className="medical_device">৳3885</p>
            <p>৳3300</p>
          </span>
          <button className="font-Poppins font-normal text-sm border border-brand text-[#3B82F6] bg-[#dae0e9] px-2 py-1 rounded-xl">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalDeviceItems;
