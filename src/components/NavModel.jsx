import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import productData from "../assets/fake-data/product";
import { Link } from "react-router-dom";
import { navModelProductSelector } from "../redux/selector";
import Grid from "./Grid";
import Button from "./Button";

const NavModel = () => {
  const productSlug = useSelector(navModelProductSelector);

  const [product, setProduct] = useState(undefined);
  const [activeModel, setActiveModel] = useState(true);
  const refNavControl = useRef(null);

  useEffect(() => {
    setProduct(productData.getCarbyCategorySlug(productSlug));
  }, [productSlug]);
  const handleClose = () => {
    setActiveModel(false);
  };

  return (
    <div
      className={`nav-modal ${
        product === undefined || !activeModel ? "" : "active"
      }`}
    >
      <Grid col={4} mdCol={2} smCol={1} gap={20}>
        {product &&
          product.map((item, index) => (
            <div className="nav-modal__item" key={item.id}>
              <div className="nav-modal__item__img">
                <img src={item.image.icon} alt={item.name} />
              </div>
              <div className="nav-modal__item__name">
                <div onClick={() => setActiveModel(false)}>{item.name}</div>
              </div>

              <div className="nav-modal__item__controls" ref={refNavControl}>
                <Link to={"/store/" + item.slug}>
                  <Button
                    backgroundColor="transparent"
                    style={"outer-stoke"}
                    size="md"
                    onClick={handleClose}
                  >
                    Discover
                  </Button>
                </Link>
              </div>
            </div>
          ))}
      </Grid>
      <div className="overlay" onClick={handleClose}></div>
    </div>
  );
};

export default NavModel;
