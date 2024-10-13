import React from 'react'
import { Breadcrumb } from 'antd';
import './ShopFilter.scss';

function ShopFilter() {
  return (
    <div>
        <div className="shop-nav-bar">
            <div className="shop-nav-tile">
                <li>Kim</li>
                <li>Mộc</li>
                <li>Thủy</li>
                <li>Hỏa</li>
                <li>Thổ</li>
            </div>
        </div>

        <Breadcrumb
        items={[
        {
            title: 'Home',
        },
        {
            title: <a href="">Application Center</a>,
        },
        {
            title: <a href="">Application List</a>,
        },
        {
            title: 'An Application',
        },
        ]}
    />
    </div>
  )
}

export default ShopFilter