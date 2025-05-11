import React from "react";

const BlackButton = ({ text }) => {
  return (
    <div className="flex items-center justify-center py-2 px-8 font-[Sansation] bg-black text-white text-[12px] whitespace-nowrap">
      {text}
    </div>
  );
};

export default BlackButton;
