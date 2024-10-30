import React, { Children } from "react";
import "./Layout.scss";
import Logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate(); 
  return (
    <>
      <header>
        <div className="header-main-container">
          <div className="upper-header">
            <div className="search-bar">
              <input></input>
              <span class="material-symbols-outlined">search</span>
            </div>
            <div className="header-logo">
              <img src={Logo} alt="logo" width="30px" height="30px"></img>
              <p>Fengsui Kois</p>
            </div>
            <a>Đăng nhập</a>
            <span class="material-symbols-outlined">shopping_cart</span>
          </div>
          <div className="nav-bar">
            <div className="nav-tile">
              <li onClick={() => navigate("/")}>Trang chủ</li>
              <li>Sản phẩm</li>
              <li onClick={() => navigate("/tracuumenh")}>Tra cứu mệnh</li>
              <li onClick={() => navigate("/dangquangcao")}>Đăng quảng cáo</li>
              <li onClick={() => navigate("/blog")}>Blog</li>
            </div>
          </div>
        </div>
      </header>
      <body>
        <div>{children}</div>
      </body>
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img src={Logo} alt="logo" width="30px" height="30px"></img>
            <p>Fengsui Kois</p>
          </div>
          <div className="footer-category">
            <h5>Danh mục</h5>
            <li onClick={() => navigate("/")}>Trang chủ</li>
            <li>Sản phẩm</li>
            <li onClick={() => navigate("/tracuumenh")}>Tra cứu mệnh</li>
            <li onClick={() => navigate("/dangquangcao")}>Đăng quảng cáo</li>
            <li onClick={() => navigate("/blog")}>Blog</li>
          </div>
          <div className="footer-contact">
            <h5>Liên hệ</h5>
            <div className="footer-contact-row">
              <span class="material-symbols-outlined">call</span>
              <span>0372516026</span>
            </div>
            <div className="footer-contact-row">
              <span class="material-symbols-outlined">mail</span>
              <span>fengsuikois@gmail.com</span>
            </div>
            <div className="footer-contact-row">
              <span class="material-symbols-outlined">home</span>
              <span>
                FengsuiKois Đường D1, phường Long Thạnh Mỹ, TP Thủ Đức
              </span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <small> © 2024 Copyright FengsuiKois</small>
        </div>
      </footer>
    </>
  );
}
