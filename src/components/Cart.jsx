import { CartContext } from "../store/CartContext";
import { useContext, useEffect } from "react";
import Modal from './Modal'
import CartItem from "./CartItem";
import { currencyFormatter } from '../utils/formatting.js';

export default function Cart(){

    const {cartStatus, 
        setCartStatus, 
        cartItems,
        addItemToCart,
        removeItemFromCart,
        goToCheckout} = useContext(CartContext);

    const cartTotal = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

    return(<Modal className="cart" open={cartStatus} onClose={() => setCartStatus(false)}>
        <h2>Your Cart</h2>
        <ul>
            {cartItems.map((item) => <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} 
            onDecrease={() => removeItemFromCart(item)} onIncrease={() => addItemToCart(item)}/>)}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <button onClick={() => setCartStatus(false)} className="text-button">
            Close
            </button>
            {cartItems.length > 0 && (
            <button className="button" onClick={goToCheckout}>Go to Checkout</button>
            )}
        </p>
        </Modal>);
    
}