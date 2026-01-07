import Logo from "@/components/Helper/Logo";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-white border-t border-gray-200 mt-20 ">
      <div className="w-[80%] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 ">
        {/* 1st column  */}
        <div className="space-y-4 ">
          <Logo />
          <p className="text-gray-500 text-sm leading-relaxed ">
            We&apos;re the digital agency to create your digital presence for
            better conversion and sales.
          </p>
        </div>
        {/* 2nd column  */}
        <div>
          <h3 className="text-gray-400 font-medium mb-6 ">Company</h3>
          <ul className="space-y-4 text-sm text-gray-700 ">
            <li className="hover:text-black cursor-pointer">About us</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-black cursor-pointer">FAQ</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </div>
        {/* 3rd column  */}
        <div>
          <h3 className="text-gray-400 font-medium mb-6 ">Contact Details</h3>
          <ul className="space-y-4 text-sm text-gray-700 ">
            <li className="flex items-start gap-3 ">
              <span className="text-pink-500 text-lg"> 📍</span>
              <span>
                Amsterdam <br /> Netherlands
              </span>
            </li>
            <li className="flex items-start gap-3 ">
              <span className="text-pink-500 text-lg"> 📞</span>
              <div>
                <p> +31 45 54 123 </p>
                <p className="text-gray-400 "> 7 Days - 8am - 10pm</p>
              </div>
            </li>

            <li className="flex items-start gap-3 ">
              <span className="text-pink-500 text-lg"> ✉️</span>
              <span> info@email.com</span>
            </li>
          </ul>
        </div>
        {/* 4th column  */}
        <div>
          <h3 className="text-gray-400 font-medium mb-6 ">
            Follow us on social media
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Get the latest trends updates right at your inbox.
          </p>
          <div className="flex flex-wrap gap-2 text-sm  text-gray-700 mb-6 ">
            <span className="hover:text-black cursor-pointer ">Facebook</span>.
            <span className="hover:text-black cursor-pointer ">Twitter</span>.
            <span className="hover:text-black cursor-pointer ">Instagram</span>.
          </div>
          {/* payment image  */}
          <Image
            src={"/images/footer.png"}
            alt="payment"
            className="object-contain"
            width={200}
            height={200}
          />
        </div>
      </div>
      {/* bottom bar  */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500 ">
        © 2026 Shahidur Rahman . All Rights Reserved
      </div>

    </div>
  );
};

export default Footer;
