import React from "react";
import Title from "../components/title";
import { assets } from "../assets/frontend_assets/assets";
import Newsletterbox from '../components/Newsletterbox'
const about = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            The Forever Great Indian Festival 2024 is your ticket to the best
            deals on lakhs of products across categories. We answer all your top
            questions about the biggest festive shopping event of the year.
          </p>
          <p>
            Since Show off your trendy side with this Champion meets our A2R
            design hoodie! The colorful print on 100% cotton shell, two-ply hood
            with a colored lining, and the instantly recognizable Champion logo
            on left sleeve all come together in this soft and durable hoodie
            that's made to last.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            {" "}
            90% cotton, 10% polyester (light steel is 85% cotton, 15% polyester)
            • 100% cotton shell • Two-ply hood with a colored lining (black
            hoodies have a light steel lining in the hood, navy - oxford grey
            lining, light steel - navy lining) • V-notch rib detail at neck, and
            half-moon insert at the back of the neck
          </p>
        </div>
      </div>

      <div className="text-4xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-row md:flex-row text-sm mb-20">
        <div className=" border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Quality Assurance :</b>
          <p className="text-gray-700">
            Keep your little ones looking fashionable and having fun with online
            shopping for kids clothes in India at ShoppersStop.com. Trendy
            designs and high quality kids’
          </p>
        </div>
        <div className=" border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Convenience:</b>
          <p className="text-gray-700">
            Shop now and give your little ones the best! The wide range of
            apparels, toys, games and other accessories .
          </p>
        </div>
       
      </div>

      <Newsletterbox/>
    </div>
  );
};

export default about;
