import { CartContext } from "../store/CartContext";
import { useContext, useEffect } from "react";
import Modal from './Modal';
import Input from "./Input.jsx";
import CartItem from "./CartItem";
import { currencyFormatter } from '../utils/formatting.js';

export default function Checkout(){

    const {cartStatus, 
        setCartStatus, 
        cartItems,
        addItemToCart,
        removeItemFromCart,
        goToCheckout,
        CheckoutStatus,
        setCheckoutStatus} = useContext(CartContext);

    const cartTotal = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

    return(<Modal className="" open={CheckoutStatus} onClose={() => setCheckoutStatus(false)}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            <Input label="Full Name" id="name" type="text"/>
            <Input label="E Mail Address" id="email" type="email"/>
            <Input label="Street" id="street" type="text"/>
            <div className="control-row">
            <Input label="Postal Code" id="postal-Code" type="text"/>
            <Input label="City" id="city" type="text"/>
            </div>
            </Modal>);

}