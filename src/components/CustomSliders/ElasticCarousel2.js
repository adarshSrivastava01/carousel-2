import React from "react";
import Carousel from "react-elastic-carousel";
import SliderItem from "../SliderItem/SliderItem";

const breakPoints = [
  { width: 350, itemsToShow: 1 },
  { width: 720, itemsToShow: 2 },
  { width: 950, itemsToShow: 3 },
  { width: 1300, itemsToShow: 4 },
  { width: 1600, itemsToShow: 5 },
  { width: 2000, itemsToShow: 6 },
];

const data = ["1", "2", "3", "4", "5", "6"];

const Slider = () => {
  return (
    <Carousel breakPoints={breakPoints}>
      {data.map((each) => (
        <SliderItem key={each} d={each} />
      ))}
    </Carousel>
  );
};

export default Slider;
