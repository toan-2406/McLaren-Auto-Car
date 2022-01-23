import React from "react";
import Model3d from "../components/Model3d";
import feature from "../assets/fake-data/feature";
import Feature from "../components/Feature";
import SlideNews from "../components/Post/SlideNews";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";

const Home = () => {
  return (
    <Helmet title="Home">
      <div className="home">
        <section className="home__model3d ">
          <div className="home__model3d__text">
            <h4>A look back at the 2021 F1 Season</h4>
            <h1>McLaren Mp4</h1>

            <div className="home__model3d__text__btn"></div>
          </div>
          <div className="home__model3d__bg3d">
            <div className="home__model3d__bg3d__img">
              <Model3d />
            </div>
          </div>
          <Link to="/store/mp4-12c">
            <div className="home__model3d__btn">Discover</div>
          </Link>
        </section>
        <section className="home__feature">
          {feature.map((item, index) => {
            return <Feature key={index} {...item} />;
          })}
        </section>
        <section className="home__last-news">
          <div className="home__last-news__title">
            <h2>Last News</h2>
          </div>
          <div className="home__last-news__slide">
            <SlideNews />
          </div>
        </section>
        <section className="home__enquired-to-buy">
          <div className="container">
            <div className="home__enquired-to-buy__title">
              <h2>Enquired to buy</h2>
            </div>
            <div className="home__enquired-to-buy__content">
              <p>
                Your preferred retailer will be in contact with you within the
                next 48 hours to discuss your enquiry
              </p>
              <button>Enquire</button>
            </div>
          </div>
        </section>
      </div>
    </Helmet>
  );
};

export default Home;
