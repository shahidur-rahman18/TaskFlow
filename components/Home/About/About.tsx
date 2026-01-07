import Image from "next/image";
import React from "react";
import { CiGrid42 } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";

const About = () => {
  return (
    <div className="py-24 bg-[#6a26da] ">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <Image
            src={"/images/about.png"}
            alt="about"
            width={800}
            height={800}
          />
        </div>
        {/* Text content  */}
        <div>
          {/* heading  */}
          <h1 className="text-3xl sm:text-4xl text-white md:text-5xl lg:text-6xl font-bold">
            Best features <br /> for your project <br /> management.
          </h1>
          {/* list  */}
          <div className="mt-10">
            {/* list one  */}
            <div className="flex items-center space-x-5 ">
              <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center flex-col ">
                <CiGrid42 className="text-white w-10 h-10" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-medium text-white ">
                  Manage Smartly
                </h1>
                <p className="text-white mt-2 sm:w-2/3 ">
                  Stay on top of your task lists and stay in touch with
                  what&apos;s happening
                </p>
              </div>
            </div>
            {/* list Two  */}
            <div className="flex items-center space-x-5 mt-6 ">
              <div className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center flex-col ">
                <MdOutlineMessage className="text-white w-10 h-10" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-medium text-white ">
                  Communicate Fast
                </h1>
                <p className="text-white mt-2 sm:w-2/3 ">
                  Stay on top of your task lists and stay in touch with what&apos;s
                  happening
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
