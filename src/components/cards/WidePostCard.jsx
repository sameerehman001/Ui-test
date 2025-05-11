import React from "react";
import "./card.css";
import BlackButton from "../buttons/BlackButton";

const WidePostCard = ({ heading, description, image }) => {
  return (
    <div className="p-4 max-w-[731px] custom-dashed-border">
      <div className="flex flex-row gap-2 w-[100%] max-[450px]:flex-col">
        <div className="w-[60%] h-[282px] max-[450px]:w-[100%]">
          <img
            src={image}
            alt="image"
            className="w-[100%] h-[100%] object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-4 h-auto justify-center w-[40%] max-[450px]:w-[100%]">
          <p className="text-[24px] font-[Abhaya-Libre] font-[600] max-[720px]:text-[18px] max-[400px]:text-[12px]">
            {heading}
          </p>
          <p className="text-[12px]">{description}</p>
          <div className="w-fit">
            <BlackButton text={"READ MORE"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidePostCard;
