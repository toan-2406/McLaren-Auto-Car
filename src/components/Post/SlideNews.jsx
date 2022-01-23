import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import postData from "../../assets/fake-data/post";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import PostModal from "./PostModal";

//import useDispatch
import { useDispatch } from "react-redux";

import { set } from "../../redux/post-modal/PostModalSlice";

// install Swiper modules
SwiperCore.use([Pagination]);

const SlideNews = ({ getData, tag }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {getData === "tag"
          ? postData.getPostbyTag(tag).map((item) => (
              <SwiperSlide
                key={item.id}
                onClick={() => dispatch(set(item.slug))}
              >
                <div className="slide-news">
                  <div className="slide-news__img">
                    <img src={item.image.main} alt="error" />
                  </div>
                  <div className="slide-news__text">
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                    <button>Read More</button>
                  </div>
                </div>
              </SwiperSlide>
            ))
          : postData.getPost(7).map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                  onClick={() => dispatch(set(item.slug))}
                >
                  <div className="slide-news">
                    <div className="slide-news__img">
                      <img src={item.image.main} alt="error" />
                    </div>
                    <div className="slide-news__text">
                      <h2>{item.title}</h2>
                      <p>{item.subtitle}</p>
                      <button>Read More</button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </>
  );
};

export default SlideNews;
