import React from "react";
import "./Layout.scss";
import Logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { MdSearch, MdShoppingCart, MdCall, MdEmail, MdHome } from "react-icons/md";

export default function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="header-main-container">
          <div className="upper-header">
            <div className="search-bar">
              <input placeholder="Tìm kiếm..." />
              <MdSearch size={28} className="icon" />
            </div>
            <div className="header-logo">
              <img src={Logo} alt="logo" width="30px" height="30px" />
              <p>Fengsui Kois</p>
            </div>
            <a href="#">Đăng nhập</a>
            <MdShoppingCart size={28} className="icon" />
          </div>

          <div className="nav-bar">
            <div className="nav-tile">
              <li onClick={() => navigate("/")}>Trang chủ</li>
              <li onClick={() => navigate("/shopPage")}>Sản phẩm</li>
              <li onClick={() => navigate("/tracuumenh")}>Tra cứu mệnh</li>
              <li onClick={() => navigate("/dangquangcao")}>Đăng quảng cáo</li>
              <li onClick={() => navigate("/blog")}>Blog</li>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div>{children}</div>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img src={Logo} alt="logo" width="30px" height="30px" />
            <p>Fengsui Kois</p>
          </div>

          <div className="footer-category">
            <h5>Danh mục</h5>
            <li onClick={() => navigate("/")}>Trang chủ</li>
            <li onClick={() => navigate("/shopPage")}>Sản phẩm</li>
            <li onClick={() => navigate("/tracuumenh")}>Tra cứu mệnh</li>
            <li onClick={() => navigate("/dangquangcao")}>Đăng quảng cáo</li>
            <li onClick={() => navigate("/blog")}>Blog</li>
          </div>

          <div className="footer-contact">
            <h5>Liên hệ</h5>
            <div className="footer-contact-row">
              <MdCall className="icon" />
              <span>0372516026</span>
            </div>
            <div className="footer-contact-row">
              <MdEmail className="icon" />
              <span>fengsuikois@gmail.com</span>
            </div>
            <div className="footer-contact-row">
              <MdHome className="icon" />
              <span>FengsuiKois Đường D1, phường Long Thạnh Mỹ, TP Thủ Đức</span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <small>© 2024 Copyright FengsuiKois</small>
        </div>
      </footer>
    </>
  );
}
