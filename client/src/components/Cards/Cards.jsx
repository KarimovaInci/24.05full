import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./Cards.scss";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [searchValue, setsearchValue] = useState([]);
  const [dummys, setDummy] = useState(false);
  const [isAscording, setisAscording] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:8080/product").then((res) => {
      setData(res.data);
    });
  }, [searchValue === "", dummys ? data : ""]);
  return (
    <>
      <div className="cards">
        <h1>PRODUCT OVERVIEW</h1>
        <ul>
          <li>All Products</li>
          <li>Women</li>
          <li>Men</li>
          <li>Bag</li>
          <li>Shoes</li>
          <li>Watches</li>
        </ul>
        <input
          type="text"
          placeholder="search for..."
          onChange={(e) => {
            setsearchValue(e.target.value);
            setData(data.filter((item) => item.name.includes(searchValue)));
          }}
        />
        <button
          onClick={() => {
            const sortedData = [...data].sort((a, b) => {
              if (isAscording) {
                return a.price - b.price;
              } else {
                return b.price - a.price;
              }
            });
            setData(sortedData)
            setisAscording(!isAscording)
          }}
        >
          sort by price
        </button>
        <div className="cards__sec">
          {data.map((item, index) => {
            return (
              <div className="cards__sec__card">
                <div className="cards__sec__card__img">
                  <img
                    src="https://preview.colorlib.com/theme/cozastore/images/product-09.jpg.webp"
                    alt=""
                  />
                </div>
                <p className="name">{item.name}</p>
                <p className="price">${item.price}</p>
                <button
                  onClick={() => {
                    axios
                      .delete(`http://localhost:8080/product/${item._id}`)
                      .then((res) => {
                        toast.success("item deleted");
                        setDummy(true);
                      });
                  }}
                >
                  Delete
                </button>
                <Link to={`/${item._id}`}>go to detail</Link>
              </div>
            );
          })}
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Cards;
