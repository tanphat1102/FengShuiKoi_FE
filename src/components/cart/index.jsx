import React, { useState } from "react";
import "./Cart.scss";
import { Button } from "antd";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Mũi Hàn 500",
      price: 25000,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/228/168/products/sualai.jpg?v=1573720306000",
      quantity: 1,
    },
    {
      id: 2,
      title: "Máy Bơm Chìm Hộ Gia Đình QDX 1500W 220VAC 40L/1min H=8m",
      price: 1599000,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/228/168/products/sp1-a45a32a1-38d4-4a8a-9c37-e936013858b2.jpg?v=1575877003000",
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (id, value) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: value } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="cart-container">
        <div className="cart-body">
          <div className="cart-header cart-row">
            <span className="cart-item cart-column">Sản Phẩm</span>
            <span className="cart-price cart-column">Giá</span>
            <span className="cart-quantity cart-column">Số Lượng</span>
          </div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-row" key={item.id}>
                <div className="cart-item cart-column">
                  <img
                    className="cart-item-image"
                    src={item.image}
                    width="100"
                    height="100"
                    alt={item.title}
                  />
                  <span className="cart-item-title">{item.title}</span>
                </div>
                <span className="cart-price cart-column">{item.price}đ</span>
                <div className="cart-quantity cart-column">
                  <input
                    className="cart-quantity-input"
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <strong className="cart-total-title">Tổng Cộng:</strong>
              <span className="cart-total-price">
                {total.toLocaleString()} VNĐ
              </span>
            </div>
          </div>
        </div>
        <div className="cart-footer">
          <button className="cart-submit-button">Thanh toán</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
