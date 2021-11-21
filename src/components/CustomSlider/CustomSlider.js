import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "../SliderItem/SliderItem";
const data = ["1", "2", "3", "4", "5", "6"];

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <style global jsx>
        {`
          .slick-slide {
            margin-left: 3px;
          }
        `}
      </style>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {data.map((each) => (
            <SliderItem key={each} d={each} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SimpleSlider;
