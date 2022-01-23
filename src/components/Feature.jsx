import React, { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import aos from "aos";
import "aos/dist/aos.css";

const Feature = (props) => {
  const { id, title, image } = props;

  useEffect(() => {
    aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="feature">
        <img src={image} alt="" className="bg" />
        <div
          data-aos="fade-up"
          className={`feature__wrapper ${id % 2 === 0 ? "even" : "odd"} `}
        >
          <div className="feature__wrapper__img">
            <img className={id === 1 ? "select" : ""} src={image} alt={title} />
            <div className="feature__wrapper__img__title">
              {title} <br />
              <span>
                <MdKeyboardArrowRight /> Discover
              </span>
            </div>
          </div>
        </div>
        <div
          className={`feature__number ${id % 2 === 0 ? "chan" : "le"}`}
        >{`0${id}`}</div>
      </div>
    </>
  );
};

export default Feature;
