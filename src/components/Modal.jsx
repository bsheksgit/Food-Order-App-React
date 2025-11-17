import { createPortal } from "react-dom";
import {useRef, useEffect} from 'react';

export default function Modal({className, open, onClose, children}){

    const dialog = useRef();

    useEffect(() => {
    const modal = dialog.current;
    if (open && modal && modal.isConnected) {
        modal.showModal();
    }
    return () => {
        if (modal && modal.open) {
        modal.close();
        }
    };
    }, [open]);


    return createPortal(<>

    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
        {children}
    </dialog>
    </>, document.getElementById('modal'));

}
