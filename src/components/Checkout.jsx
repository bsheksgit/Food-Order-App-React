import { CartContext } from "../store/CartContext";
import { useContext, useEffect } from "react";
import Modal from './Modal';
import Input from "./Input.jsx";
import { currencyFormatter } from '../utils/formatting.js';
import { useActionState } from "react";
import useHttp from "../hooks/useHttp.js"

export default function Checkout(){

    const {cartStatus, 
        setCartStatus, 
        cartItems,
        setCartItems,
        CheckoutStatus,
        setCheckoutStatus,
        clearFormAndCart} = useContext(CartContext);

    const cartTotal = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    
    const requestConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const { data, error, sendRequest, clearData } = useHttp(
    'http://localhost:3000/orders',
    requestConfig
    );

   async function handleFormSubmit(prevState,formData){

    const customerData = Object.fromEntries(formData.entries());

        await sendRequest(
            JSON.stringify({
                order: {
                items: cartItems,
                customer: customerData,
                },
            })
            );

    }
    
    const [formState, formAction, pending] = useActionState(handleFormSubmit, {errors:null});

      if (data && !error) {
        return (
      <Modal
        open={CheckoutStatus}
        onClose={() => clearFormAndCart()}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className='modal-actions'>
          <button className="button" onClick={() => clearFormAndCart()}>Okay</button>
        </p>
      </Modal>
    );
    }

    return(<Modal className="" open={CheckoutStatus} onClose={() => {clearFormAndCart();
                        clearData();}}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            <form action={formAction}>
            <Input label="Full Name" id="name" type="text"/>
            <Input label="E Mail Address" id="email" type="email"/>
            <Input label="Street" id="street" type="text"/>
            <div className="control-row">
            <Input label="Postal Code" id="postal-code" type="text"/>
            <Input label="City" id="city" type="text"/>
            </div>
            <p className="modal-actions">
            {pending? null :<button className="text-button" onClick={() => setCheckoutStatus(false)} >Cancel</button>}
            <button className="button" disabled={pending}>{pending? "Submitting.....": "Submit Order"}</button>
            </p>
            </form>
            </Modal>);

}