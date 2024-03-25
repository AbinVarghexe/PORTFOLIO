import React, { useRef } from "react";
import "./Education.css";
import { EDUCATION } from "../../../public/data/data";
import EducationCard from "./EducationCard/EducationCard";
import Slider from "react-slick";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Education = () => {
  const slideRef = useRef();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  };
  const slideLeft = () => {
    slideRef.current.slickPrev();
  };
  return (
    <section id='education' className="experience-container">
      <h5>Education</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined"><FaAngleRight/></span>
        </div>
        <div className="arrow-left" onClick={slideLeft} >
          <span className="material-symbols-outlined"><FaAngleLeft/></span>
        </div>

        <Slider ref={slideRef} {...settings}>
          {/* Fixed typo in className */}
          {EDUCATION.map((item) => (
            <EducationCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Education;