import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

interface WorkSliderProps {
    imgUrls: string[];
}

const WorkSlider: React.FC<WorkSliderProps> = ({ imgUrls }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4200
    };

    return (
        <Slider {...settings}>
            {imgUrls.map((url, i) => (
                <div key={i} className="slide__item">
                    <img src={require(`/src/${url}`)} alt="" />
                </div>
            ))}
        </Slider>
    );
};

export default WorkSlider;
