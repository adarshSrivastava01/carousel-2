import "../../App.css";

const SliderItem = ({ d }) => {
  return (
    <>
      <style global jsx>
        {`
          .slider__item {
            height: 600px;
            width: 600px;
            color: #fff;
            background-color: #000;
          }
          .image__box {
            width: 600px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .image {
            margin-top: 16px;
          }
        `}
      </style>
      <div className="slider__item">
        <div className="image__box">
          <div className="image">
            <img src="https://picsum.photos/500" alt={d} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderItem;
