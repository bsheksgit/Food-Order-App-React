import { createContext, useState } from "react";

const CartContext = createContext({
    cartItems:[],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    cartOpenClose: () => {},
    goToCheckout: () => {}
});

export default function CartContextProvider({children}){

    const [cartItems, setCartItems] = useState([]);

    function addItemToCart(item){
        setCartItems((prevItems) => [...prevItems, item]);
    }


    const ctxValue = {
        cartItems,
        addItemToCart,
        increaseQuantity,
        decreaseQuantity,
        cartOpenClose,
        goToCheckout
    }
}