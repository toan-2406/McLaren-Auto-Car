import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import PostView from "./PostView";
import postData from "../../assets/fake-data/post";
import { useDispatch } from "react-redux";

const PostModal = () => {
  const postSlug = useSelector((state) => state.postModal.post);

  const [post, setPost] = useState(undefined);

  if (post !== undefined) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    setPost(postData.getPostbySlug(postSlug));
  }, [postSlug]);

  console.log(post);

  return (
    <div className={`post-modal ${post === undefined ? "" : "active"}`}>
      <div className="post-modal__content">
        <PostView post={post} />
      </div>
    </div>
  );
};

export default PostModal;
