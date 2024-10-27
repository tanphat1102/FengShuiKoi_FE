import React from "react";
import "./PlanAds.scss";
const PackageCard = ({ title, description, price, onClick, rank }) => (
  <div className={`package-card`} id={rank}>
    <div className={"package-background"} />
    <span className={"package-title"}>{title}</span>
    <span className={"package-description"}>{description}</span>
    <div className={"package-footer"}>
      <button className={"purchase-button"} onClick={onClick}>
        {price}
      </button>
    </div>
  </div>
);

export default function PlanAds() {
  const handlePurchase = (packageType) => {
    console.log(`Purchased: ${packageType}`);
  };

  return (
    <div className={"main-container"}>
      <div className={"title"}>
        <span className={"mua-goi-dang"}>Mua gói đăng</span>
      </div>
      <PackageCard
        rank="gold"
        title="Gói Đăng Tin Premium"
        description="Gói đăng tin cao cấp, 15 bài đăng dùng trong 1 tháng hiển thị ở vị trí ưu tiên."
        price="200K/Tháng"
        onClick={() => handlePurchase("Premium")}
      />
      <PackageCard
        rank="silver"
        title="Gói Đăng Tin Nâng Cao"
        description="Gói đăng tin với tính năng nâng cao, 10 bài đăng hiển thị ở vị trí ưu tiên."
        price="150K/Tháng"
        onClick={() => handlePurchase("Advanced")}
      />
      <PackageCard
        rank="copper"
        title="Gói Đăng Tin Cơ Bản"
        description="Gói đăng tin cơ bản với 10 bài đăng dùng trong 1 tháng."
        price="100K/Tháng"
        onClick={() => handlePurchase("Basic")}
      />
    </div>
  );
}
