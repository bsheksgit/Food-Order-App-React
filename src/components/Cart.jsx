import { CartContext } from "../store/CartContext";
import { useContext } from "react";
import Modal from './Modal'

export default function Cart(){
    const {cartStatus} = useContext(CartContext);

    return(
        <Modal className="cart" isVisible={cartStatus}/>
    );
    

}