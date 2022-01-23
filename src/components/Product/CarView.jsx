import React, { useState } from "react";
import productData from "../../assets/fake-data/product";
import { useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import CarViewModal from "./CarViewModal";
import Button from "../Button";
import { Link } from "react-router-dom";
import CarFeature from "./CarFeature";
import SlideNews from "../Post/SlideNews";
import { MdKeyboardArrowRight } from "react-icons/md";

const CarView = () => {
  const { slug } = useParams();
  const product = productData.getCarbySlug(slug);
  const [isOpen, setIsOpen] = useState(false);
  const [activeNavigation, setActiveNavigation] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = [
    {
      display: "Overview",
      path: `/store/${product.slug}`,
    },
    {
      display: "Design",
      path: "#",
    },
    {
      display: "Engine",
      path: "#",
    },
    {
      display: "Performance",
      path: "#",
    },
    {
      display: "Safety",
      path: "#",
    },
    {
      display: "Interior",
      path: "#",
    },
    {
      display: "Exterior",
      path: "#",
    },
    {
      display: "Accessories",
      path: "#",
    },
  ];
  const [stateNavi, setStateNavi] = useState("Overview");

  const handleClick = (index) => {
    setActiveIndex(index);
    setStateNavi(navigation[index].display);
  };
  return (
    <>
      <div className="car-view">
        <div
          className="car-view__banner container"
          style={{
            backgroundImage: `url(${product.image.banner})`,
          }}
        >
          <div className="car-view__banner__text">
            <p>{product.image.content.img1.title}</p>
            <h2>{product.name}</h2>
          </div>
          <div className="car-view__banner__play">
            <span>
              <FaPlay onClick={() => setIsOpen(true)} />
            </span>
          </div>
        </div>
        <div className="car-view__navigation container">
          <div
            className="car-view__navigation__dropdown"
            onClick={() => setActiveNavigation(!activeNavigation)}
          >
            <MdKeyboardArrowRight
              className={activeNavigation ? "active" : ""}
            />
            <span>{stateNavi}</span>
          </div>
          <div
            className={`car-view__navigation__list ${
              activeNavigation ? "active" : ""
            }`}
          >
            {navigation.map((item, index) => (
              <div
                className={`car-view__navigation__list__item ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <Link to={item.path} onClick={() => handleClick(index)}>
                  {item.display}
                </Link>
              </div>
            ))}
          </div>
          <div className="car-view__navigation__btn">
            <Button style="outer-stoke" size="sm">
              Configure
            </Button>
            <Button backgroundColor="orange" size="sm">
              Enquire
            </Button>
          </div>
        </div>
        <div className="car-view__overview ">
          <div className="car-view__overview__text container">
            <h3>Overview</h3>
            <p>{product.description}</p>
          </div>
          <div className="car-view__overview__features">
            <CarFeature
              bg={product.image.content.img1.urlImg}
              title={product.image.content.img1.title}
              desc={product.image.content.img1.description}
            />
            <CarFeature
              bg={product.image.content.img2.urlImg}
              title={product.image.content.img2.title}
              desc={product.image.content.img2.description}
            />
            <CarFeature
              bg={product.image.content.img3.urlImg}
              title={product.image.content.img3.title}
              desc={product.image.content.img3.description}
            />
          </div>
        </div>
        <div className="car-view__lastnew">
          <div className="container">
            <h3>Last News</h3>
            <div className="car-view__lastnew__list">
              <SlideNews getData="tag" tag={product.slug} />
            </div>
          </div>
        </div>
      </div>
      <div className={`car-modal ${isOpen ? "active" : ""}`}>
        <CarViewModal
          isOpen={isOpen}
          src={product.srcYouTube}
          onClose={setIsOpen}
        />
      </div>
    </>
  );
};

export default CarView;
