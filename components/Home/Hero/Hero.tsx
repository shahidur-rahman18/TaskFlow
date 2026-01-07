import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[145vh] md:h-[120vh] lg:h-[160vh] items-center flex justify-center flex-col ">
      <div className=" relative">
        {/* circle  */}
        <div className="w-36 h-36 rounded-full -top-16 -left-10 bg-yellow-300 absolute -z-10"></div>
        {/* Heading   */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 ">
          The intelligent way to manage projects.
        </h1>
      </div>
      <p className="mt-6 text-base sm:text-lg lg:text-xl leading-8 text-center text-gray-500 ">
        Create custom landing pages with Fastland that <br /> converts more
        visitors than any website.
      </p>
      {/* Email box  */}
      <div className="h-20 rounded-full mt-8 md:px-4 w-[95%] md:w-1/2 lg:w-1/3 border-2 border-gray-300 flex items-center justify-between ">
        {/* input  */}
        <input
          type="text"
          className="h-[90%] outline-none ml-4 placeholder:text-gray-600 text-gray-600 rounded-full "
          placeholder="@ Enter Your Email"
        />
        {/* Button  */}
        <button className="bg-orange-600 cursor-pointer hover:bg-orange-400 transition-all duration-200 px-8 h-[70%] mr-2 md:mr-0 text-sm text-white rounded-full " >Start Now</button>
      </div>
      {/* image  */}
      <div className="mt-10">
        <Image src={"/images/hero.png"} alt="img" width={500} height={500} />

      </div>
    </div>
  );
};

export default Hero;
