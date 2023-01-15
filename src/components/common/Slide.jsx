import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Slide = ({ url }) => {
  const slide = useRef();
  const [slideWidth, setSlideWidth] = useState();

  useEffect(() => {
    getSlideWidth();
  }, []);

  const getSlideWidth = () => {
    setSlideWidth(slide.current.offsetWidth);
  };

  const nextSlide = () => {
    console.log(slideWidth);
    slide.current.style.transform = `translateX(-${slideWidth}px)`;
    console.log(slide.current.style.transform);
  };

  return (
    <div ref={slide} onClick={nextSlide} className="slide__item">
      <img src={require(`/src/${url}`)} alt="" />
    </div>
  );
};

export default Slide;
