import React from "react";
import image1 from "../assets/images/215f3f4dac8eb4fed3719791466fabe43ed4f2bb.jpg";
import image2 from "../assets/images/85fd3254ce644687cc634e1e9393ed386d5be2f3.jpg";
import image3 from "../assets/images/be18d39cf9a07648bdd3335e620f42a26c3efbe6.jpg";

const ImageRow = () => {
  return (
    <div className="flex flex-row py-10 h-[491px] w-[100%] gap-[2px] max-[600px]:h-auto">
      <div className="w-[33.2%] h-[100%]">
        <img
          src={image1}
          alt="image1"
          className="w-[100%] h-[100%] object-cover max-[600px]:object-contain"
        />
      </div>
      <div className="w-[33.2%] h-[100%]">
        <img
          src={image2}
          alt="image1"
          className="w-[100%] h-[100%] object-cover max-[600px]:object-contain"
        />
      </div>
      <div className="w-[33.3%] h-[100%]">
        <img
          src={image3}
          alt="image1"
          className="w-[100%] h-[100%] object-cover max-[600px]:object-contain"
        />
      </div>
    </div>
  );
};

export default ImageRow;
