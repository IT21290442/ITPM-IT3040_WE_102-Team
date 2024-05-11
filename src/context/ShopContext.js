import React ,{createContext, useState} from 'react'
import ShopProducts from '../pages/images/ShopProducts'

export const ShopContext = createContext(null);

const getDefaultCart  = ()=>{
    let cart ={};
    for (let index = 0; index < ShopProducts.length; index++) {
        cart[index]=0;    
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const[cartItems,setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                let itemInfo = ShopProducts.find((Product) => Product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }
          
        }
        return totalAmount;
    }
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    


    const contextValue = {getTotalCartAmount,getTotalCartItems,ShopProducts,cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;

