import { createPortal } from "react-dom";
import {useRef, useEffect} from 'react';

export default function Modal({className, isVisible}){

    const dialog = useRef();

    useEffect(() => {
    const modal = dialog.current;
    if (isVisible && modal && modal.isConnected) {
        modal.showModal();
    }
    return () => {
        if (modal && modal.open) modal.close();
    };
    }, [isVisible]);

    return createPortal(
    <>
    <dialog ref={dialog} className={`modal ${className}`}>
        <h3>Your Cart</h3>
        <ul>

        </ul>
    </dialog>
    </>, document.getElementById('modal'));

}
