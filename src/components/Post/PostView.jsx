import React from "react";
import SlideNews from "./SlideNews";

const PostView = (props) => {
  let post = props.post;

  if (post === undefined) {
    post = {
      title: "",
      image: {
        main: "",
        content: "",
        slide: {
          img1: "",
          img2: "",
          img3: "",
        },
      },
      subtitle: "",
    };
  }

  return (
    <>
      <div className="post-view">
        <div className="post-view__img">
          <img src={post.image.main} alt="error" />
        </div>
        <div className="post-view__text">
          <h2>{post.title}</h2>
          <p>{post.subtitle}</p>
        </div>
        <div className="post-view__slide">
          <h3>Last News</h3>
          <div className="post-view__slide__slides">
            <SlideNews />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostView;
