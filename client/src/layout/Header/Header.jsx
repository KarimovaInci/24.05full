import React from "react";
import { Link } from "react-router-dom";
import {CiSearch } from 'react-icons/ci';
import {HiShoppingCart } from 'react-icons/hi';
import {AiOutlineHeart } from 'react-icons/ai';
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="custom__navbar">
        <div className="custom__navbar__top">
          <div className="custom__navbar__top__left">
            <p>Free shipping for standard order over $100</p>
          </div>
          <div className="custom__navbar__top__right">
            <ul>
              <li>Help &FAQs</li>
              <li>My Account</li>
              <li>EN</li>
              <li>USD</li>
            </ul>
          </div>
        </div>
        <div className="custom__navbar__bottom">
          <div className="custom__navbar__bottom__left">
            <div className="custom__navbar__bottom__left__img">
              <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp" alt="" />
            </div>
            <ul>
              <Link to="/"> Home</Link>
              <Link to="/add"> Add</Link>
              <li>Shop</li>
              <li>Features</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="custom__navbar__bottom__right">
            <ul>
              <li><CiSearch/></li>
              <li className="basket"><HiShoppingCart/> <div className="box">0</div></li>
              <li><AiOutlineHeart/></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
