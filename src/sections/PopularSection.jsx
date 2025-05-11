import React from "react";
import ImageCard1 from "../assets/images/6060b634700f26e61fff64622ba95139c310641a.jpg";
import ImageCard2 from "../assets/images/3bea26a5393d259ff06de501cc0f0534403826f1.jpg";
import ImageCard3 from "../assets/images/ad561efd06c2eebd86658598b9e353cbfac8fe01.jpg";
import PostCard from "../components/cards/PostCard";

const cardsData = [
  {
    heading: "HOME-MADE SCRUBS - ORGANIC",
    description:
      "Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...",
    image: ImageCard1,
  },
  {
    heading: "HOME-MADE SCRUBS - ORGANIC",
    description:
      "Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...",
    image: ImageCard2,
  },
  {
    heading: "fasfaffas",
    description:
      "Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...",
    image: ImageCard3,
  },
];

const PopularSection = () => {
  return (
    <div className="px-10">
      <div className="flex justify-center text-[32px] py-10">
        <p>POPULAR POSTS</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-[50px]">
        {cardsData.map((item, index) => (
          <PostCard
            key={index}
            heading={item.heading}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
