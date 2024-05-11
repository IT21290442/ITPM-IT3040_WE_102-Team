import React from 'react'
import './Home.css'
import ShopProducts from './images/ShopProducts';
import Item from '../components/item/Item';



const Home = () => {
 
  return (
    <div>
     <div className='Sell-Items'>
            {ShopProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}
        </div>
   
  

    
  </div>
);
}
export default Home