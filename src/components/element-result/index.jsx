import React from "react";
import "./element-result.scss";
function ElementResult() {
  const icon = "src/assets/icon-hoa.png";
  return (
    <div className="element-result-main-container">
      <div className="element-result-container">
        <div className="image">
          <img src={icon} alt="" />
        </div>
        <div className="name-info">
          <p>Tên: Jame</p>
          <p>Ngày sinh: 03/04/2002</p>
          <p>Mệnh của bạn: Kim</p>
        </div>
        <div className="result">
          <p>Hình dáng hồ phù hợp:</p>
          <p>Hướng đặt hồ phù hợp:</p>
          <p>Màu sắc cá phù hợp:</p>
        </div>
      </div>
    </div>
  );
}

export default ElementResult;
