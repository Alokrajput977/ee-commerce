import React from "react";
import Title from "../components/title";
import { assets } from "../assets/frontend_assets/assets";
import Newsletterbox from "../components/Newsletterbox";
const contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"us"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className=" flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">384-b ram nagar krishna nagar <br /> delhi shahdra delhi 110051</p>
          <p className="text-gray-500">Tel: (828) 748-7665 <br /> Email: Contactforeveryou@gmail.com </p>
          <p className="text-gray-600 font-semibold text-xl">Careear at Forever</p>
          <p className="text-gray-600 ">Learn more about our team adn job opctions..</p>
          <button className="border border-black  px-8 py-4 text-sm hover:bg-black hover:text-white  transition-all duration-500 ">Explore jobs</button>
        </div>
      </div>
      <Newsletterbox/>
    </div>
  );
};

export default contact;
