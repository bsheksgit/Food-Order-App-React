import logo from "../assets/logo.jpg";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";

export default function Header()
{
    const {cartItems, setCartStatus} = useContext(CartContext);
    return (
        <>
        <header id="main-header">
            <div id="title">
                <img src= {logo} alt="Food App Logo"/>
                <h1>Abhishek Food Order</h1>
            </div>
            <button 
            className="text-button"
            onClick={() => setCartStatus(true)}>
                Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
            </button>
        </header>
        </>
    );
}