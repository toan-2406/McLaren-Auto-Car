import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "../router/Router";
import Footer from "./Footer";
import Header from "./Header";
import PostModal from "./Post/PostModal";
import { remove } from "../redux/post-modal/PostModalSlice";
import { FiXCircle } from "react-icons/fi";
import { FaArrowCircleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import NavModel from "./NavModel";
import { navModelIsOpenSelector } from "../redux/selector";

const Layout = () => {
  const dispatch = useDispatch();
  const statusPost = useSelector((state) => state.postModal.isOpen);
  const navIsOpenSelector = useSelector(navModelIsOpenSelector);

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        {backToTop && (
          <div className="back-to-top" onClick={scrollToTop}>
            <FaArrowCircleUp />
          </div>
        )}
        {navIsOpenSelector && <NavModel />}
        <Header />
        <div className="main">
          <Router />
        </div>
        <Footer />
        <PostModal />
        {statusPost && (
          <div className="post-modal__content__close">
            <FiXCircle onClick={() => dispatch(remove())} />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default Layout;
