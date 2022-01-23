import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import numberWithCommas from "../../utils/numberWithCommas";

const CarCard = (props) => {
  // console.log(props);
  const { name, price, image, slug, priceSale } = props;
  return (
    <div className="car-item">
      <Link to={`/store/${slug}`}>
        <div className="car-item__img">
          <img src={image.icon} alt={name} />
        </div>
        <div className="car-item__name">{name}</div>
      </Link>
      <div className="car-item__info">
        <div className="car-item__info__price">
          <span>
            Price:
            {priceSale ? (
              <span className="price-sale">
                <del>{numberWithCommas(price)}$</del>
                <span>{numberWithCommas(price - priceSale)}$</span>
              </span>
            ) : (
              <span>{numberWithCommas(price)}$</span>
            )}
          </span>
        </div>
        <div className="car-item__info__btn">
          <Button backgroundColor="orange" size="md">
            <span>Enquired to buy</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
