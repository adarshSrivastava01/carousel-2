import "./App.css";
import { useState, useRef } from "react";
import Slider from "react-slick";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const data = [
  "https://picsum.photos/350/500",
  "https://picsum.photos/350/500",
  "https://picsum.photos/350/500",
  "https://picsum.photos/350/500",
  "https://picsum.photos/350/500",
  "https://picsum.photos/350/500",
  "https://picsum.photos/350/500",
  "https://picsum.photos/350/500",
  "https://picsum.photos/350/500",
];

function App() {
  const [imageIndex, setImageIndex] = useState(1);
  // const [previousImageIndex, setPreviousImageIndex] = useState(0);
  // const [nextImageIndex, setNextImageIndex] = useState(2);
  const previousImageIndex = useRef(0);
  const nextImageIndex = useRef(2);

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
    console.log(x, y);
    if (x !== 0 && y !== 0 && x !== 8 && y !== 8) {
      if (x < y) {
        console.log("Right Pressed");
      } else {
        console.log("Left Pressed");
      }
    } else if (x === 1 && y === 0) {
      console.log("Left Pressed");
    } else if (x === 0 && y === 8) {
      console.log("Left Pressed");
    } else if (x === 8 && y === 0) {
      console.log("Right Pressed");
    } else if (x === 7 && y === 8) {
      console.log("Right Pressed");
    } else if (x === 0 && y === 1) {
      console.log("Right Pressed");
    } else if (x === 8 && y === 7) {
      console.log("Left Pressed");
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
}

export default App;
