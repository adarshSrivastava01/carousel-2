import "./App.css";
import { useState, useRef } from "react";
import Slider from "react-slick";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import Carousel from "react-elastic-carousel";

const data = [
  "https://picsum.photos/400/500",
  "https://picsum.photos/400/500",
  "https://picsum.photos/400/500",
  "https://picsum.photos/400/500",
  "https://picsum.photos/400/500",
  "https://picsum.photos/400/500",
  "https://picsum.photos/400/500",
  "https://picsum.photos/400/500",
  "https://picsum.photos/400/500",
];

const breakPoints = [
  { width: 350, itemsToShow: 1 },
  { width: 720, itemsToShow: 2 },
  { width: 950, itemsToShow: 3 },
  { width: 1300, itemsToShow: 3 },
];

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(1);
  const [nextImageIndex, setNextImageIndex] = useState(2);
  console.log(previousImageIndex, imageIndex, nextImageIndex);
  // const previousImageIndex = useRef(0);
  // const nextImageIndex = useRef(2);
  const NextArrow = ({ currentSlide, onClick }) => {
    return (
      <div
        className="arrow next"
        onClick={() => {
          onClick();
          // setPreviousImageIndex(currentSlide);
          // setImageIndex((currentSlide + 1) % 9);
          // setNextImageIndex((currentSlide + 2) % 9);
        }}
      >
        <HiArrowRight fill={"#ffff00"} />
      </div>
    );
  };
  const PrevArrow = ({ currentSlide, onClick }) => {
    return (
      <div
        className="arrow prev"
        onClick={() => {
          onClick();
          // setNextImageIndex(currentSlide);
          // setImageIndex((currentSlide - 1 + 9) % 9);
          // setPreviousImageIndex((currentSlide - 2 + 9) % 9);
        }}
      >
        <HiArrowLeft fill={"#ffff00"} />
      </div>
    );
  };
  const selectClass = (idx) => {
    if (idx === imageIndex) return "slide activeSlide";
    else if (idx === previousImageIndex) return "slide leftSlide";
    else if (idx === nextImageIndex) return "slide nextSlide";
    else return "hello";
  };
  const setSlides = (x, y) => {
    if (x !== 0 && y !== 0 && x !== 8 && y !== 8) {
      if (x < y) {
        console.log("Right Pressed");
        setPreviousImageIndex((y - 1 + 9) % 9);
        setImageIndex((y + 9) % 9);
        setNextImageIndex((y + 2) % 9);
      } else {
        console.log("Left Pressed");
        setNextImageIndex(y);
        setImageIndex((y - 1 + 9) % 9);
        setPreviousImageIndex((y - 2 + 9) % 9);
      }
    } else if (x === 1 && y === 0) {
      console.log("Left Pressed");
      setNextImageIndex(y);
      setImageIndex((y - 1 + 9) % 9);
      setPreviousImageIndex((y - 2 + 9) % 9);
    } else if (x === 0 && y === 8) {
      console.log("Left Pressed");
      setNextImageIndex(y);
      setImageIndex((y + 1) % 9);
      setPreviousImageIndex((y - 2 + 9) % 9);
    } else if (x === 8 && y === 0) {
      console.log("Right Pressed");
      setPreviousImageIndex((y + 9) % 9);
      setImageIndex((y + 1) % 9);
      setNextImageIndex((y + 2) % 9);
    } else if (x === 7 && y === 8) {
      console.log("Right Pressed");
      setPreviousImageIndex((y - 1 + 9) % 9);
      setImageIndex((y + 9) % 9);
      setNextImageIndex((y + 2) % 9);
    } else if (x === 0 && y === 1) {
      console.log("Right Pressed");
      setPreviousImageIndex((y - 1 + 9) % 9);
      setImageIndex((y + 9) % 9);
      setNextImageIndex((y + 2) % 9);
    } else if (x === 8 && y === 7) {
      console.log("Left Pressed");
      setNextImageIndex(y);
      setImageIndex((y - 1 + 9) % 9);
      setPreviousImageIndex((y - 2 + 9) % 9);
    }
  };
  const settings = {
    initialSlide: 1,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: setSlides,
  };
  return (
    <div className="App">
      <Slider {...settings}>
        {data.map((img, idx) => (
          <div className={selectClass(idx)} key={idx}>
            <img src={img} key={idx} alt={img} />
            Hello {idx}
          </div>
        ))}
      </Slider>
    </div>
  );
  // return (
  //   <Carousel
  //     breakPoints={breakPoints}
  //     initialActiveIndex={Math.floor(data.length / 2)}
  //   >
  //     {data.map((img, idx) => (
  //       <div key={idx} style={{ display: "flex", flexDirection: "column" }}>
  //         <img src={img} key={idx} alt={img} />
  //         Hello {idx}
  //       </div>
  //     ))}
  //   </Carousel>
  // );
}

export default App;
