import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import aos from "aos";
import "aos/dist/aos.css";
const CarFeature = ({ bg, title, desc }) => {
  useEffect(() => {
    aos.init({
      duration: 1500,
      once: true,
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="car-view__overview__features__item"
        style={{
          backgroundImage: `url(${bg})`,
        }}
        data-aos="fade-up"
      >
        <div className="car-view__overview__features__item__text">
          <div className="car-view__overview__features__item__text__title">
            <span onClick={handleClick}>{!isOpen ? "+" : "-"}</span>
            <h3>{title}</h3>
          </div>

          <div
            className={`car-view__overview__features__item__text__desc ${
              isOpen ? "active" : ""
            }`}
          >
            <p>{desc}</p>
            <span>
              <MdKeyboardArrowRight /> Discover
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarFeature;
