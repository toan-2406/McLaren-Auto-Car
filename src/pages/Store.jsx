import React, { useState, useCallback, useEffect } from "react";
import SrcVideo from "../assets/video/765LT_Spider_8.mp4";
import Button from "../components/Button";
import productData from "../assets/fake-data/product";
import { BsArrowLeftSquare } from "react-icons/bs";

import CheckBox from "../components/CheckBox";
import Input from "../components/Input";

import category from "../assets/fake-data/category";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  searchFilterSelector,
  categoryFilterSelector,
  sortFilterSelector,
} from "../redux/selector";
import {
  searchFilterChange,
  categoryFilterChange,
  clearFilterChange,
  sortFilterChange,
} from "../redux/filter-product/filterSlice";
import InfinityList from "../components/InfinityList";
import Helmet from "../components/Helmet";

function Store() {
  const [toggle, setToggle] = useState(false);
  const productList = productData.getAllCars();
  const [products, setProducts] = useState(productList);
  //dispatch
  const dispatch = useDispatch();
  //useSelector
  const searchFilter = useSelector(searchFilterSelector);
  const categoryFilter = useSelector(categoryFilterSelector);
  const sortFilter = useSelector(sortFilterSelector);
  // console.log("categoryFilter", categoryFilter);
  // console.log("productList", productList);
  //update Product sau khi filter
  const updateProduct = useCallback(() => {
    let temp = productList;
    if (searchFilter !== "") {
      temp = temp.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1
        );
      });
      console.log("search", temp);
    }
    if (categoryFilter.length > 0) {
      temp = temp.filter((item) => {
        return categoryFilter.includes(item.categorySlug);
      });
      console.log("cate", temp);
    }
    if (sortFilter !== "") {
      temp = temp.sort((a, b) => {
        if (sortFilter === "price-asc") {
          return a.price - b.price;
        } else if (sortFilter === "price-desc") {
          return b.price - a.price;
        }
      });
    }
    console.log("sort", temp);

    setProducts(temp);
  }, [searchFilter, categoryFilter, sortFilter, productList]);

  useEffect(() => {
    updateProduct();
  }, [updateProduct]);

  const handleSearchFilterChange = (e) => {
    dispatch(searchFilterChange(e.target.value));
  };

  const filterSelect = (checked, categorySlug) => {
    if (checked) {
      dispatch(categoryFilterChange(categorySlug));
    } else {
      dispatch(categoryFilterChange([]));
    }
  };
  return (
    <Helmet title="Store">
      <div className="store">
        <div className="store__banner">
          <video autoPlay loop muted>
            <source src={SrcVideo} type="video/mp4" />
          </video>
          <div className="store__banner__btn">
            <Button backgroundColor="orange" size="lg">
              Discover
            </Button>
          </div>
        </div>
        <div className="store__product">
          <div className={`store__product__filter ${toggle ? "active" : ""}`}>
            <div className="store__product__filter__toggle">
              <BsArrowLeftSquare
                className={toggle ? "active" : ""}
                onClick={() => setToggle(!toggle)}
              />
            </div>
            <div className="store__product__filter__content">
              <div className="store__product__filter__content__title">
                Search
              </div>

              <Input
                type="text"
                placeholder="Search"
                classStyle="input"
                setOnChange={handleSearchFilterChange}
                value={searchFilter}
              />
            </div>
            <div className="store__product__filter__content">
              <div className="store__product__filter__content__title">
                Model
              </div>
              <div className="store__product__filter__content__list">
                {category.map((item, index) => {
                  return (
                    <div
                      className="store__product__filter__content__list__item"
                      key={index}
                    >
                      <CheckBox
                        label={item.displayName}
                        onChange={(input) =>
                          filterSelect(input.checked, item.categorySlug)
                        }
                        checked={categoryFilter.includes(item.categorySlug)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="store__product__filter__content">
              <div className="store__product__filter__content__title">
                Sort by price
              </div>

              <select
                placeholder="select"
                onChange={(e) => dispatch(sortFilterChange(e.target.value))}
                value={sortFilter}
              >
                <option value="All">All</option>
                <option value="price-asc">Lowest to highest</option>
                <option value="price-desc">Highest to lowest</option>
              </select>
            </div>
            <div className="store__product__filter__content">
              <Button
                backgroundColor="orange"
                size="md"
                onClick={() => dispatch(clearFilterChange())}
              >
                Clear Filter
              </Button>
            </div>
          </div>
          <div className="store__product__cars">
            <InfinityList data={products} />
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Store;
