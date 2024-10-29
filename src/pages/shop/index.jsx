import React, { useEffect, useState } from 'react'
import api from '../../config/axios';
import './index.scss'
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/features/cartSlice';
import Layout from '../../components/Layout';

function ShopPage() {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try{
      const response = await api.get("koi")
      setProducts(response.data)
      console.log(response.data)
    }catch(e){
      console.log('error fetch product: ', e);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <Layout>
      <div>
        {/*tu danh sach san pham, bien moi san pham thanh 1 cai product*/}
        <div className='product-list'>
          {
            products.map((product) => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </Layout>
  )
}

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct(product))
  }

  return (
  <div className='product'>
    <img 
      src={product.image} 
      alt ="" />
    <h3>{product.species}</h3>
    <span>{product.price}</span>

    <center>
      <Button onClick={handleAddToCart}>Add to cart</Button>
    </center>
  </div>
  )
}

export default ShopPage
