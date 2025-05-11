import React from "react";
import BlackButton from "../buttons/BlackButton";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row item-center py-6 px-20 justify-between max-[900px]:px-10">
        <div className="flex md:hidden items-center">
          <GiHamburgerMenu />
        </div>
        <div className="text-[24px] font-bold">Logo</div>
        <div className="hidden md:flex items-center">
          <ul className="flex flex-row gap-[20px] font-[Sansation]">
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>BLOGS</li>
            <li>^</li>
          </ul>
        </div>
        <box className="hidden md:block">
          <BlackButton text="Button" />
        </box>
      </div>
    </div>
  );
};

export default Navbar;
