import React ,{createContext, useState} from 'react'
import ShopProducts from '../pages/images/ShopProducts'


export const WishlistContext = createContext(null);

const getDefaultWishlist  = ()=>{
    let wishlist ={};
    for (let index = 0; index < ShopProducts.length; index++) {
        wishlist[index]=0;    
    }
    return wishlist;
}


const WishlistContextProvider = (props) => {


    const[wishlistItems,setWishlistItems] = useState(getDefaultWishlist());


    const addToWishlist = (itemId) => {
        setWishlistItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
        console.log(wishlistItems);
    }
    const removeFromWishlist = (itemId) => {
        setWishlistItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalWishlistItems = () =>{
        let totalItem = 0;
        for(const item in wishlistItems){
            if(wishlistItems[item]>0){
                totalItem += wishlistItems[item];
            }
        }
        return totalItem;
    }
    

     

   

    const contextValue = {ShopProducts,wishlistItems,getTotalWishlistItems,addToWishlist,removeFromWishlist};



  return (
    <WishlistContext.Provider value={contextValue}>
        {props.children}
    </WishlistContext.Provider>

  )
}

export default WishlistContextProvider;