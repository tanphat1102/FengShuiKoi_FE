import React, { Children } from "react";
import "./Layout.scss";
import Logo from "../../assets/logo.jpg";

export default function Layout({ children }) {
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
              <li>Trang chủ</li>
              <li>Sản phẩm</li>
              <li>Tra cứu mệnh</li>
              <li>Đăng quảng cáo</li>
              <li>Blog</li>
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
            <p>Trang chủ</p>
            <p>Sản phẩm</p>
            <p>Tra cứu mệnh</p>
            <p>Đăng quảng cáo</p>
            <p>Blog</p>
          </div>
          <div className="footer-contact">
            <h5>Liên hệ</h5>
            <div>
              <span class="material-symbols-outlined">call</span>
              <span>0372516026</span>
            </div>
            <div>
              <span class="material-symbols-outlined">mail</span>
              <span>fengsuikois@gmail.com</span>
            </div>
            <div>
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
