import React from "react";
import "./KoisAds.scss";

const products = [
  {
    id: 1,
    name: "Cá Koi KujaKu Nhật Size Lớn",
    price: "5 triệu",
    imageUrl:
      "https://cakoinhat.com/wp-content/uploads/2019/09/Hikarimoyo500_2.jpg",
  },
  {
    id: 2,
    name: "Cá Koi KujaKu Nhật Size Lớn",
    price: "5 triệu",
    imageUrl:
      "https://cakoinhat.com/wp-content/uploads/2019/09/Hikarimoyo500_2.jpg",
  },
  {
    id: 3,
    name: "Cá Koi KujaKu Nhật Size Lớn",
    price: "5 triệu",
    imageUrl:
      "https://cakoinhat.com/wp-content/uploads/2019/09/Hikarimoyo500_2.jpg",
  },
  {
    id: 4,
    name: "Cá Koi KujaKu Nhật Size Lớn",
    price: "5 triệu",
    imageUrl:
      "https://cakoinhat.com/wp-content/uploads/2019/09/Hikarimoyo500_2.jpg",
  },
];

const ProductCard = ({ product }) => (
  <div className={"productCard"}>
    <div className={"link"}>
      <div className={"productImage"}>
        <img src={product.imageUrl} alt={product.name} />
      </div>
    </div>
    <div className={"text"}>
      <div className={"link2"}>
        <span className={"productName"}>{product.name}</span>
      </div>
      <div className={"container"}>
        <button className={"price"}>{`GIÁ: ${product.price}`}</button>
      </div>
    </div>
  </div>
);

function KoisAds() {
  return (
    <div className={"koiads-main-container"}>
      <span className={"title"}>Sản phẩm mới</span>
      <div className={"flexRowA"}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default KoisAds;
