import React from "react";
import PostCard from "../components/cards/PostCard";
import image1 from "../assets/images/6060b634700f26e61fff64622ba95139c310641a.jpg";
import image2 from "../assets/images/6eae8eed6adfc948dd85fb6d7ddda4eb882d4483.jpg";
import image3 from "../assets/images/79e2019ec613f11302141ebafb3dee66af21c9a3.jpg";
import WidePostCard from "../components/cards/WidePostCard";
import TextonImage from "../components/textonImage/TextonImage";

const LatestSection = () => {
  return (
    <div className="px-10">
      <div className="flex justify-center text-[32px] py-10">
        <p>Latest</p>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9">
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-row justify-center gap-[50px]">
              <PostCard
                heading={"HOME-MADE SCRUBS - ORGANIC"}
                description={
                  "Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at..."
                }
                image={image1}
              />
              <PostCard
                heading={"HOME-MADE SCRUBS - ORGANIC"}
                description={
                  "Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at..."
                }
                image={image2}
              />
            </div>
            <div className="flex justify-center">
              <WidePostCard
                heading={"DOES PERFUME REALLY DESTROY YOUR SKIN?"}
                description={
                  "Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at. Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at..."
                }
                image={image3}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className="hidden md:flex flex flex-col gap-[30px]">
            <TextonImage />
            <TextonImage />
            <TextonImage />
          </div>
          <div className="flex md:hidden flex flex-row gap-[30px]">
            <TextonImage />
            <TextonImage />
            <TextonImage />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="px-12 py-2 border text-[10px]">VIEW ALL</div>
      </div>
    </div>
  );
};

export default LatestSection;
