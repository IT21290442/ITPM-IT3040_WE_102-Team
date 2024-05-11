//import React, {useContext, useEffect, useState } from 'react'
import React from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../context/ShopContext'
import { WishlistContext } from '../../context/WishlistContext'

import Star_icon from '../assets/star.jpg'
import { useContext } from 'react'
//import { MdClose } from "react-icons/md";
//import axios from "axios"


/*axios.defaults.baseURL = "http://localhost:8080/"
*/

const ProductDisplay = (props) => {


    /*const[addSection,setAddSection] = useState(false)
    const [formData,setFormData] = useState({
      name : "",
      email : "",
      mobile : "",
    })
    const [dataList,setDataList] = useState([])

    const handleOnChange = (e)=>{
      const {value,name} = e.target
      setFormData((preve)=>{
        return{
          ...preve,
          [name] : value
        }
      })
    }

  //submit button   ||post
const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await axios.post("/create",formData)

    console.log(data)
    if (data.data.sucess){
      setAddSection(false)
      alert(data.data.message)
      getFetchData()
    }
}
// ||get data
const getFetchData = async()=>{
  const data = await axios.get("/")

  console.log(data)
  if (data.data.sucess){
    setDataList(data.data.data)
  }
}
useEffect(()=>{
  getFetchData()
},[])

const handleDelete = async(id)=>{
  const data = await axios.delete("/delete/"+id)
  
  if(data.data.sucess){
    getFetchData()
    alert(data.data.message)
  }
}*/

    //product display
    const {Product} = props
    const {addToCart} = useContext(ShopContext);
    const {addToWishlist} = useContext(WishlistContext);
  return (
    <div className='product-display'>
        <div className='product-display-left'>
            <div className='product-display-img-list'>
                <img src={Product.image} alt=""/>
                <img src={Product.image} alt=""/>
                <img src={Product.image} alt=""/>
            </div>
            <div className='product-display-img'>
                <img className='product-display-main-img' src={Product.image} alt=""/>
            </div>
        </div>
        <div className='product-display-right'>
            <h1>{Product.name}</h1>
            <div className='product-display-right-star'>
                <img src={Star_icon} alt=''/>
                <img src={Star_icon} alt=''/>
                <img src={Star_icon} alt=''/>
                <img src={Star_icon} alt=''/>
                <img src={Star_icon} alt=''/>
                <p>(122)</p>
            </div>
            <div className='product-display-right-prices'>
                Rs.{Product.price}.00
            </div>
            <div className='product-display-right-descripion'>
            The Image may be slightly different from the actual product in terms of color due to LIGHTING CONDITIONS or the display used to view. We hope you can seem to understand, it's beyond our ability to get the EXACT product color on the Image.
            </div>
            <div className='product-display-right-size'>
                <h1>Select Size</h1>
                    <div className='product-display-right-size'>
                     <div>S</div>
                     <div>M</div>
                     <div>L</div>
                     <div>XL</div>
                     <div>XXL</div>
              </div>
            </div>
          
            <button onClick={()=>{addToWishlist(Product.id)}}>Add to Wishlist</button>
            <p className='product-display-right-category'><span>Category:</span>Women,T-Shirt,Crop Top</p>
            <p className='product-display-right-category'><span>Tags:</span>Modern,Latest</p>



            <button onClick={()=>{addToCart(Product.id)}}>Add to Cart</button>
            <p className='product-display-right-category'><span>Category:</span>Women,T-Shirt,Crop Top</p>
            <p className='product-display-right-category'><span>Tags:</span>Modern,Latest</p>




   {/* <div className='product-review'>
              <button className='button-add' onClick={()=>setAddSection(true)}>Add Review</button>
              {
                addSection && (
                  <div className='product-review-form'>
                    
                    <form onSubmit={handleSubmit}>
                    <div className='product-review-close' onClick={()=>setAddSection(false)}><MdClose /></div>
                        <label htmlFor='name'>Name:</label>
                        <input type ='text' id ="name" name="name" onChange={handleOnChange}/>
                        <label htmlFor='name'>Email:</label>
                        <input type ='email' id ="email" name="email" onChange={handleOnChange}/>
                        <label htmlFor='name'>Mobile:</label>
                        <input type ='text' id ="mobile" name="mobile" onChange={handleOnChange}/>

                        <button> Submit</button>
                    </form>
                </div>
             )
            }

            <div className='product-review-view'>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>mobile</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    dataList[0] ? (
                    dataList.map((el)=>{
                      return(
                        <tr>
                          <td>{el.name}</td>
                          <td>{el.email}</td>
                          <td>{el.mobile}</td>
                          <td>
                          <button className='edit-review'>Edit</button>
                          <button className='delete-review' onClick={()=>handleDelete(el._id)}>Delete</button>
                          </td>
                        </tr>
                      )
                    
                    }))
                    :(
                      <p style={{textAlign : "center"}}>No reviews</p>
                    )
                    
                  }
                </tbody>
              </table>
                </div>


             </div>*/}
                </div>
    </div>
    
  )
}
export default ProductDisplay