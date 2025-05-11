import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-[white] py-12 px-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col gap-4">
              <p className="text-[24px] font-bold">Logo</p>
              <p className="text-[14px]">It’s time to shine again!</p>
              <div className="flex flex-row max-[400px]:flex-col">
                <div className="border border-gray-500 p-2 flex flex-row gap-2 items-center">
                  <div>icon</div>
                  <p className="pr-16 text-[12px]">you@example.com</p>
                </div>
                <div className="flex items-center border border-gray-500 p-2 text-[12px] max-[400px]:border-none">
                  SUBSCRIBE
                </div>
              </div>
              <div className="flex flex-row gap-11">
                <FaFacebook size={25} />
                <IoLogoInstagram size={25} />
                <FaXTwitter size={25} />
                <FaLinkedin size={25} />
                <IoLogoYoutube size={25} />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-4 p-4">
                  <div className="flex flex-col gap-2">
                    <p>SKIN</p>
                    <p>HAIR</p>
                    <p>MAKE-UP</p>
                    <p>PERFUMES</p>
                    <p>COSMETICS</p>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-4 p-4">
                  <div className="flex flex-col gap-2 text-gray-300">
                    <p>ABOUT US</p>
                    <p>TERMS OF SERVICE</p>
                    <p>ADVERTISE</p>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-4 p-4">
                  <div className="flex flex-col gap-2 text-gray-300">
                    <p>PRIVACY POLICY</p>
                    <p>EDITORIAL POLICY</p>
                    <p>CONTACT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-black text-gray-300 text-[14px]">
        <hr className="border-gray-600 border-1" />
        <div className="flex justify-between px-18 pt-8 pb-4">
          <p>© 2023 Relume. All rights reserved.</p>
          <div className="flex flex-row gap-6">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
