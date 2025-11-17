import { CartContext } from "../store/CartContext";
import { useContext, useEffect } from "react";
import Modal from './Modal'

export default function Cart(){
    const {cartStatus, setCartStatus} = useContext(CartContext);
    useEffect(() => {
        console.log("Cart status:"+cartStatus);
    }, [cartStatus]);

    return(<Modal className="cart" open={cartStatus} onClose={() => setCartStatus(false)}>
        <h2>Your Cart</h2>
        <ul>
            <li>Hello</li>
        </ul>
        <button onClick={() => setCartStatus(false)} className="text-button modal-actions">
            close
        </button>
        </Modal>);
    
}