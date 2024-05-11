import React from 'react'
import './Breadcrum.css'
import Arrow_icon from '../../components/assets/breadcrum arrow.png'

const Breadcrum = (props) => {
    const {Product} = props;
  return (
    <div className='breadcrum'>
        SHOP <img src={Arrow_icon} alt=""/> PRODUCT <img src={Arrow_icon} alt=""/> {Product.id}<img src={Arrow_icon} alt=""/> {Product.name}
    </div>
  )
}

export default Breadcrum