import React from 'react'
import { Breadcrumb, Button } from 'antd';
import './ShopFilter.scss';

function ShopFilter() {
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

  return (
    <div>
        <div className="shop-nav-bar">
            <div className="shop-nav-tile">
                <div className="nav-item">
                    <li>Kim</li>
                    <img src="src\assets\kim.png" alt="Kim" style={{
                        height:'50px',
                        width: '70px'
                    }} />
                </div>

                <div className="nav-item">
                    <li>Mộc</li>
                    <img src="src\assets\mộc.png" alt="Kim" style={{
                        height:'50px',
                        width: '70px'
                    }} />
                </div>

                <div className="nav-item">
                    <li>Thủy</li>
                    <img src="src\assets\thủy.png" alt="Kim" style={{
                        height:'50px',
                        width: '70px'
                    }} />
                </div>

                <div className="nav-item">
                    <li>Hỏa</li>
                    <img src="src\assets\hỏa.png" alt="Kim" style={{
                        height:'50px',
                        width: '70px'
                    }} />
                </div>

                <div className="nav-item">
                    <li>Thổ</li>
                    <img src="src\assets\thổ.png" alt="Kim" style={{
                        height:'50px',
                        width: '70px'
                    }} />
                </div>
            </div>
        </div>

        <Breadcrumb
        items={[
        {
            title: 'Trang chủ',
        },
        {
            title: <a href="">Sản phẩm</a>,
        },
        {
            title: <a href="">Kim</a>,
        },
        ]}
    />
    </div>
  )
}

export default ShopFilter