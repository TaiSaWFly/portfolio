import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const WorkSlider = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4200,
  };

  return (
    <Slider {...settings}>
      {items.map((url, i) => (
        <div key={i} className="slide__item">
          <img src={require(`/src/${url}`)} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default WorkSlider;
