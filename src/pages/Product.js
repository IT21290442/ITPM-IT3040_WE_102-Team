import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum'
import ProductDisplay from '../components/productDisplay/ProductDisplay'

const Product = () => {
    const {ShopProducts} = useContext(ShopContext )
    const {ProductId} = useParams();
    const Product = ShopProducts.find((e)=> e.id === Number(ProductId));
  return (
    <div>
        <Breadcrum Product ={Product}/>
        <ProductDisplay Product={Product}/>
        
    </div>
  )
}

export default Product
