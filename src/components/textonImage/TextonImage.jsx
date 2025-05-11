import React from "react";
import BlackButton from "../../components/buttons/BlackButton";

const TextonImage = ({ image }) => {
  return (
    <div className="h-[268px] w-[100%] relative">
      <img src={image} alt="image" className="h-[100%] w-[100%] object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFFE0] w-[70%] py-6 px-0 max-[600px]:px-6 max-[400px]:px-4">
        <div className="flex flex-col items-center w-[100%] text-center overflow-hidden">
          <p className="text-[8px] font-[Sansation]">COSMETICS</p>
          <p className="font-[Sansation] text-[24px] max-[600px]:text-[20px] max-[400px]:text-[18px]">
            LOREM ISPUM
          </p>
          <div className="mt-2">
            <BlackButton text="READ MORE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextonImage;
