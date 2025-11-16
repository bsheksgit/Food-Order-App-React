import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItems:[],
    cartStatus: Boolean,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    setCartModalStatus: () => {},
    goToCheckout: () => {}
});

export default function CartContextProvider({children}){

    const [cartItems, setCartItems] = useState([]);
    const [cartStatus, setCartStatus] = useState(false);

    function addItemToCart(item) {
    setCartItems((prevItems) => {
        if (prevItems.some(prevItem => prevItem.id === item.id)) {
        // Map over previous items, increment quantity for matching item
        return prevItems.map(prevItem => {
            if (prevItem.id === item.id) {
            return { 
                ...prevItem,
                quantity: (prevItem.quantity || 1) + 1
            };
            }
            return prevItem;
        });
        } else {
        // Add new item to array with initial quantity 1 (or from item)
        return [...prevItems, { ...item, quantity: 1 }];
        }
    });


    }

   function removeItemFromCart(item) {
    setCartItems(prevItems => {
        return prevItems.flatMap(prevItem => {
        if (prevItem.id === item.id) {
            if (prevItem.quantity > 1) {
            // Decrease quantity by 1
            return { ...prevItem, quantity: prevItem.quantity - 1 };
            } else {
            // quantity === 1, so remove item by returning empty array
            return [];
            }
        }
        // Keep other items unchanged
        return prevItem;
        });
    });
    }

    function setCartModalStatus(status){
        setCartStatus(status);
    }

    function goToCheckout(){

    }


    const ctxValue = {
        cartItems,
        cartStatus,
        addItemToCart,
        removeItemFromCart,
        setCartModalStatus,
        goToCheckout
    }

    return <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>
}