import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo_mclaren2.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <div className="footer__left__about">
            <h3 className="footer-title">McLaren Corporate</h3>
            <div className="footer__left__about__link-list">
              <div className="link-list">
                <Link to="/">Partners</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Media</Link>
              </div>
              <div className="link-list">
                <Link to="/">McLaren Group</Link>
                <Link to="/">McLaren Racing</Link>
                <Link to="/">McLaren Applied</Link>
                <Link to="/">Investors</Link>
              </div>
            </div>
          </div>
          <div className="footer__left__about-2">
            <div className="footer__left__about-2__logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="link-list">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Use</Link>
              <Link to="/">Site Map</Link>
              <Link to="/">Terms of Service</Link>
              <Link to="/">Anticipate</Link>
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right__contact">
            <h3 className="footer-title">Contact Us</h3>
            <div className="link-list">
              <Link to="/">Contact</Link>
              <Link to="/">Enquire</Link>
              <Link to="/">Find a Retailer</Link>
            </div>
          </div>
          <div className="footer__right__social">
            <h3 className="footer-title">Follow Us</h3>
            <div className="link-list">
              <Link to="/">Facebook</Link>
              <Link to="/">Instagram</Link>
              <Link to="/">Twitter</Link>
              <Link to="/">Youtube</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
