import React from "react";
import "./card.css";
import BlackButton from "../buttons/BlackButton";

const PostCard = ({ heading, description, image }) => {
  return (
    <div className="p-4 max-w-[340px] custom-dashed-border max-[900px]:max-w-[300px]">
      <div className="flex flex-col gap-2">
        <div className="w-[100%] h-[282px]">
          <img
            src={image}
            alt="image"
            className="w-[100%] h-[100%] object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-4 h-auto">
          <p className="text-[24px] text-center">{heading}</p>
          <p className="text-[12px] text-center">{description}</p>
          <div className="flex justify-center">
            <BlackButton text={"READ MORE"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
