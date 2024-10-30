import { Button } from 'antd';
import React from 'react';
import './index.scss'

const shopItems = [
    {
        id: 1,
        name: "Cá Koi KujaKu Nhật Size Lớn",
        description: "Mệnh Kim",
        price: "5 triệu",
        imageUrl:
          "https://cakoinhat.com/wp-content/uploads/2019/09/Hikarimoyo500_2.jpg",
    },
    {
        id: 2,
        name: "Cá Koi KujaKu Nhật Size Lớn",
        description: "Mệnh Kim",
        price: "5 triệu",
        imageUrl:
          "https://cakoinhat.com/wp-content/uploads/2019/09/Hikarimoyo500_2.jpg",
    },
    {
        id: 3,
        name: "Cá Koi KujaKu Nhật Size Lớn",
        description: "Mệnh Kim",
        price: "5 triệu",
        imageUrl:
          "https://cakoinhat.com/wp-content/uploads/2019/09/Hikarimoyo500_2.jpg",
    },
    {
        id: 4,
        name: "Cá Koi KujaKu Nhật Size Lớn",
        description: "Mệnh Kim",
        price: "5 triệu",
        imageUrl:
          "https://cakoinhat.com/wp-content/uploads/2019/09/Hikarimoyo500_2.jpg",
    },

    {
        id: 5,
        name: "Cá Koi KujaKu Nhật Size Lớn",
        description: "Mệnh Kim",
        price: "5 triệu",
        imageUrl:
          "https://cakoinhat.com/wp-content/uploads/2019/09/Hikarimoyo500_2.jpg",
    },
];

const ShopItemCard = ({ items }) => (
    <div className="product">
        <img 
          src={items.imageUrl} 
          alt={items.name} 
          style={{ width: '200px', height: '150px' }}
        />
        <h3>{items.name}</h3>
        <p>{items.description}</p>
        <span>{items.price}</span>
        <Button type="primary">Add to cart</Button>
    </div>
);

function ShopItems() {
  return (
    <div className='shopItem'>
        <div className="flexRowA">
            {shopItems.map((items) => (
                <ShopItemCard key={items.id} items={items} />
            ))}
        </div>
    </div>
  );
}

export default ShopItems;
