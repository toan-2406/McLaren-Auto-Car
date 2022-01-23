import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import category from "../assets/fake-data/category";

import { ReactComponent as Logo } from "../assets/images/logo_mclaren2.svg";
import { useDispatch } from "react-redux";

import { set } from "../redux/nav-model/NavModelSlice";

const navLink = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Racing",
    path: "/racing",
  },
  {
    display: "Contact",
    path: "/contact",
  },
  {
    display: "Store",
    path: "/store",
  },
];

const Header = () => {
  //redux
  const dispatch = useDispatch();

  const refMenu = useRef(null);
  const refNavMenu = useRef(null);
  const refModel = useRef(null);
  console.log(refMenu);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpennavCar, setIsOpennavCar] = useState(false);
  const [navLinkIndex, setNavLinkIndex] = useState(null);
  const [navLinkIndexCar, setNavLinkIndexCar] = useState(false);

  if (isOpennavCar || isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const handleScroll = () => {
    if (
      window.scrollY > 200 ||
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      refNavMenu.current.classList.add("hide");
    } else {
      refNavMenu.current.classList.remove("hide");
    }
  };
  const handleScroll1 = () => {
    if (
      window.scrollY > 50 ||
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      refNavMenu.current.classList.add("hidebg");
    } else {
      refNavMenu.current.classList.remove("hidebg");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll1);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const handleClick = () => {
    refMenu.current.classList.add("open");
    setIsOpen(true);
  };
  const handleClose = () => {
    refMenu.current.classList.remove("open");
    setIsOpen(false);
  };

  const toggleArrowMobile = () => {
    refModel.current.classList.toggle("open");
    setIsOpennavCar(!isOpennavCar);
  };
  const { pathname } = useLocation();
  const activeNav = navLink.findIndex((e) => e.path === pathname);

  return (
    <div className={`header ${isOpen ? "open" : ""}`} ref={refNavMenu}>
      <div
        className={`mask ${isOpen ? "open" : ""}`}
        onClick={handleClose}
      ></div>
      <div className="header__logo">
        <Link to="/">
          <Logo className={isOpen || isOpennavCar ? "active" : ""} />
        </Link>
      </div>
      <div className="header__models">
        Models <MdOutlineKeyboardArrowDown onClick={toggleArrowMobile} />
      </div>
      <div className="header__cars" ref={refModel}>
        {category.map((item, index) => {
          return (
            <div className="header__cars__container" key={index}>
              <div
                className="header__cars__container__item"
                onClick={() => {
                  dispatch(set(item.categorySlug, !navLinkIndexCar));
                  setNavLinkIndex(index);
                  setNavLinkIndexCar(!navLinkIndexCar);
                  console.log(navLinkIndexCar);
                }}
              >
                <span
                  className={
                    navLinkIndex === index && navLinkIndexCar ? "active" : ""
                  }
                >
                  {item.displayName}
                </span>

                <MdOutlineKeyboardArrowDown
                  className={
                    navLinkIndex === index && navLinkIndexCar ? "active" : ""
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="header__hambugericons">
        <FiMenu onClick={handleClick} />
      </div>
      <div className="header__menu" ref={refMenu}>
        <AiOutlineClose onClick={handleClose} />
        <ul className="header__menu-list">
          {navLink.map((link, index) => (
            <li
              key={index}
              className={`header__menu-item ${
                index === activeNav ? "active" : ""
              }`}
            >
              <Link
                to={link.path}
                onClick={handleClose}
                className="header__menu-link"
              >
                {link.display}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
