import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
   
   
    <div className='item'>
       
       <Link to={`/Product/${props.id} `}><img src={props.image} alt=''/></Link> 
        <p1><h4>{props.name}</h4></p1> 
         <p2> Rs.{props.price}.00</p2>
        
    </div>
  )
}

export default Item