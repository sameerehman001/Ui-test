import React from "react";
import "./card.css";
import BlackButton from "../buttons/BlackButton";

const PostCard = ({ heading, description, image }) => {
  return (
    <div className="p-4 max-w-[340px] custom-dashed-border max-[900px]:max-w-[300px] max-[400px]:p-2">
      <div className="flex flex-col gap-2">
        <div className="w-[100%] h-[282px]">
          <img
            src={image}
            alt="image"
            className="w-[100%] h-[100%] object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-4 h-auto">
          <p className="text-[24px] text-center font-[600] font-[Abhaya-Libre] max-[720px]:text-[18px] max-[400px]:text-[12px]">
            {heading}
          </p>
          <p className="text-[12px] text-center font-[Sansation]">
            {description}
          </p>
          <div className="flex justify-center">
            <BlackButton text={"READ MORE"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
