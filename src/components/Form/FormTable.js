 import React from 'react'
 
 import { MdClose } from "react-icons/md";
 
 const FormTable = ({handleSubmit,handleOnChange,handleClose,rest}) => {
   return (
    <div className='product-review-form'>
                    
    <form onSubmit={handleSubmit}>
       <div className='product-review-close' onClick={handleClose}><MdClose /></div>
           <label htmlFor='name'>Name:</label>
            <input type ='text' id ="name" name="name" onChange={handleOnChange} value={rest.name}/> 
            <label htmlFor='name'>Email:</label>
            <input type ='email' id ="email" name="email" onChange={handleOnChange} value={rest.email}/>
            <label htmlFor='name'>Review:</label>
             <input type ='text' id ="review" name="review" onChange={handleOnChange} value={rest.review}/>

        <button> Submit</button>
      </form>
    </div>
   )
 }
 
 export default FormTable