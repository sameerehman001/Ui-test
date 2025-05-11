import React from "react";
import image from "../assets/images/aba1b1443a89e727f82306b6e5f2f7ea316a4100.jpg";
import BlackButton from "../components/buttons/BlackButton";

const ImageMain = () => {
  return (
    <div>
      <div className="h-[376px] w-[100%] relative">
        <img
          src={image}
          alt="image"
          className="h-[100%] w-[100%] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFFE0] py-8 px-16 max-[600px]:px-6 max-[400px]:px-4">
          <div className="flex flex-col items-center w-[350px] text-center max-[600px]:w-[300px] max-[400px]:w-[250px] max-[300px]:w-[200px]">
            <p className="text-[8px] font-[Sansation]">COSMETICS</p>
            <p className="font-[Sansation] text-[24px] max-[600px]:text-[20px] max-[400px]:text-[18px]">
              BEST MAKE-UP PRODUCTS 2023
            </p>
            <div className="mt-2">
              <BlackButton text="Read More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageMain;
