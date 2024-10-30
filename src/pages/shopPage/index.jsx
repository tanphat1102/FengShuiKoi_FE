import React from "react";
import Layout from "../../components/Layout";
import "./ShopPage.scss";
import ShopFilter from "../../components/shop-filter";
import ShopItems from "../../components/shop-items";

function ShopPage() {
  return (
    <Layout>
      <div className="shopPage-container">
        <ShopFilter />
        <ShopItems />
      </div>
    </Layout>
  );
}

export default ShopPage;
