import { CartContext } from "../store/CartContext";
import { useContext, useEffect } from "react";
import Modal from './Modal';
import Input from "./Input.jsx";
import CartItem from "./CartItem";
import { currencyFormatter } from '../utils/formatting.js';
import { useActionState } from "react";

export default function Checkout(){

    const {cartStatus, 
        setCartStatus, 
        cartItems,
        CheckoutStatus,
        setCheckoutStatus} = useContext(CartContext);

    const cartTotal = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

    function handleFormSubmit(prevState,formData){

        const data = {
            errors: null,
            enteredValues: {
                fullName:"",
                email: "",
                street: "",
                postalCode: "",
                city: ""
            }
        }

        data.enteredValues.fullName = formData.get("name")
        data.enteredValues.email = formData.get("email")
        data.enteredValues.street = formData.get("street")
        data.enteredValues.postalCode = formData.get("postal-code")
        data.enteredValues.city = formData.get("city")

    }
    
    const [formState, formAction, pending] = useActionState(handleFormSubmit, {errors:null});

    return(<Modal className="" open={CheckoutStatus} onClose={() => setCheckoutStatus(false)}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            <form action={handleFormSubmit}>
            <Input label="Full Name" id="name" type="text"/>
            <Input label="E Mail Address" id="email" type="email"/>
            <Input label="Street" id="street" type="text"/>
            <div className="control-row">
            <Input label="Postal Code" id="postal-Code" type="text"/>
            <Input label="City" id="city" type="text"/>
            </div>
            <p className="modal-actions">
            <button className="text-button" onClick={() => setCheckoutStatus(false)}>Cancel</button>
            <button className="button">Submit Order</button>
            </p>
            </form>
            </Modal>);

}