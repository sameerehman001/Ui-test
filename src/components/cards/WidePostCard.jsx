import React from "react";
import "./card.css";
import BlackButton from "../buttons/BlackButton";

const WidePostCard = ({ heading, description, image }) => {
  return (
    <div className="p-4 max-w-[731px] custom-dashed-border">
      <div className="flex flex-row gap-2 w-[100%]">
        <div className="w-[60%] h-[282px]">
          <img
            src={image}
            alt="image"
            className="w-[100%] h-[100%] object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-4 h-auto justify-center w-[40%]">
          <p className="text-[24px]">{heading}</p>
          <p className="text-[12px]">{description}</p>
          <div>
            <BlackButton text={"READ MORE"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidePostCard;
