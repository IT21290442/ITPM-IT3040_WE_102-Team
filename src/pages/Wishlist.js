import React, { useEffect, useState } from 'react'
import './Wishlist.css';


import img1 from '../pages/images/p1_img.png'
import img2 from '../pages/images/p2_img.png'
import img3 from '../pages/images/p6_img.png'
import img4 from '../pages/images/p9_img.png'
import delete_icon from '../components/assets/delete_wish.gif'
import virtual_icon from '../components/assets/virtual2_img.gif'


//import { MdClose } from "react-icons/md";
import axios from "axios"
import FormTable from '../components/Form/FormTable';
import WishlistItemsItems from '../components/WishlistItems/WishlistItems';
//import WishlistItems from '../components/WishlistItems/WishlistItems';


axios.defaults.baseURL = "http://localhost:8080/"




export default function Wishlist() {

  

  const[addSection,setAddSection] = useState(false)
  const[editSection,setEditSection] = useState(false)
    const [formData,setFormData] = useState({
      name : "",
      email : "",
      review : "",

    
    })
    const [formDataEdit,setFormDataEdit] = useState({
      name : "",
      email : "",
      review : "",
      _id:""
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
      setFormData({
        name : "",
        email: "",
        review :"",  
      })
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
}
const handleUpdate = async(e) =>{
e.preventDefault()
const data = await axios.put("/update/",formDataEdit)
if(data.data.sucess){
  getFetchData()
  alert(data.data.message)
  setEditSection(false)
}


}
const handleEditOnChange = async(e)=>{

  const {value,name} = e.target
      setFormDataEdit((preve)=>{
        return{
          ...preve,
          [name] : value
        }
      })
}
const handleEdit =(el)=>{
  setFormDataEdit(el)
  setEditSection(true)

}
    
  return (

<div className='wishlist'>
<WishlistItemsItems/>

    <div className="card">
    <div className="photo">
      <img src= {img1} alt=''/>
      <img className='delete' src= {delete_icon} alt=''/>
    </div>

    
    <div className="description">
      <h2>Striped Flutter Sleeve Peplum Hem Blouse</h2>
      <h4>Popular Wear Design</h4>
      <h1>Rs.5050.00</h1>
      <p>You saw, you purchased, you made our day! Enjoy ''Free Delivery'' when your order value is above 10,000/-.</p>
      <button>Add to Cart</button>
      <button>Buy Now</button>
      <div className='continue-shopping'><button>Continue Shopping</button></div>
      <hr></hr>
    </div>



 <div className="photo">
      <img src= {img2} alt=''/>
      <img className='delete' src= {delete_icon} alt=''/>
    </div>

    <div className="description">
      <h2>Striped Flutter Blouse</h2>
      <h4>Popular Wear Design</h4>
      <h1>Rs.850.00</h1>
      <p>You saw, you purchased, you made our day! Enjoy ''Free Delivery'' when your order value is above 10,000/-.</p>
      <button>Add to Cart</button>
      <button>Buy Now</button>
      <div className='continue-shopping'><button>Continue Shopping</button></div>
      <hr></hr>
    </div>


    <div className="photo">
      <img src= {img3} alt=''/>
      <img className='delete' src= {delete_icon} alt=''/>
    </div>
    
    <div className="description">
      <h2>Overlap Collar Peplum H Blouse
</h2>
      <h4>Popular Wear Design</h4>
      <h1>Rs.5000.00</h1>
      <p>You saw, you purchased, you made our day! Enjoy ''Free Delivery'' when your order value is above 10,000/-.</p>
      <button>Add to Cart</button>
      <button>Buy Now</button>
      <div className='continue-shopping'><button>Continue Shopping</button></div>
      <hr></hr>
    </div>


    <div className="photo">
      <img src= {img4} alt=''/>
      <img className='delete' src= {delete_icon} alt=''/>
    </div>
    
    <div className="description">
      <h2>Overlap Collar Peplum H Blouse
</h2>
      <h4>Popular Wear Design</h4>
      <h1>Rs.5000.00</h1>
      <p>You saw, you purchased, you made our day! Enjoy ''Free Delivery'' when your order value is above 10,000/-.</p>
      <button>Add to Cart</button>
      <button>Buy Now</button>
      <div className='continue-shopping'><button>Continue Shopping</button></div>
      <hr></hr>
  </div>
  </div>

  <div className='virtual'>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Madimi+One&display=swap" rel="stylesheet"></link>
  <p>Try on Virtual Dressing Room with LIMIT Fashion Clothings</p>
  <p><i><u>Unlimited Try Ons On "LIMIT VDR"</u></i></p>
  <img src= {virtual_icon} alt=''/>
  <button>Try Virtual dressing room</button>
  </div>
  



  <h2 className='Reviews-ratings-theme'> Reviews & Ratings</h2>
  
<p><i>LIMIT clothing store offers a curated collection of fashion essentials that embody sophistication and style. 
With a keen eye for quality and craftsmanship, we curate a selection of clothing that transcends trends, 
focusing on timeless pieces that effortlessly elevate any wardrobe. From chic basics to statement pieces, 
LIMIT caters to individuals who appreciate understated elegance and seek clothing that reflects their discerning taste. 

Our commitment to quality extends beyond our products, as we strive to provide exceptional customer service,
 ensuring every shopping experience is seamless and enjoyable. At LIMIT, we believe in empowering
  our customers to express their individuality through fashion, offering a sanctuary where style knows no bounds.
   Discover the epitome of sartorial excellence at LIMIT clothing store.</i></p>
  
  <div className='product-review'>
  <button className='button-add' onClick={()=>setAddSection(true)}>Add Review </button>
      {
        addSection && (
            <FormTable 
            handleSubmit ={handleSubmit}
            handleOnChange ={handleOnChange}
            handleClose ={()=>setAddSection(false)}
            rest = {formData}
            />
             )
            }
            {
              editSection && (
                <FormTable 
                handleSubmit ={handleUpdate}
                handleOnChange ={handleEditOnChange}
                handleClose ={()=>setEditSection(false)}
                rest ={formDataEdit}
                />
              )
            }

            <div className='product-review-view'>
            
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Review</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    dataList[0] ? (
                    dataList.map((el)=>{
                      console.log(el)
                      return(
                        <tr>
                          <td>{el.name}</td>
                          <td>{el.email}</td>
                          <td>{el.review}</td>
                          <td>
                          
                          {/*onClick={()=>{setEditSection(true)}}*/}

                          <button className='edit-review' onClick={()=>handleEdit(el)}>Edit</button>
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
          </div>
       </div>
    

    /*<div>Wishlist

      <ul className='wish-bar'>
        <li>Product</li>
        <li>Description</li>
        <li>Price</li>
        <li>Availability</li>

        <button>Remove</button> <br/>
        <button>Add to cart</button><br/>
        <button>Buy Now</button><br/>
      </ul>

  </div>*/

  )
}
