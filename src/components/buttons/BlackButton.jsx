import React from "react";

const BlackButton = ({ text }) => {
  return (
    <div className="flex items-center justify-center p-2 font-[Sansation] bg-black text-white text-[12px]">
      {text}
    </div>
  );
};

export default BlackButton;
