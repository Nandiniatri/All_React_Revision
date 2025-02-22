import { useState } from "react";

const Modal = ({ children, isOpen, onClose }) => {
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    if (!isOpen) {
        return null;
    }

    return (
        <div>
            <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', marginTop: '30px', padding: '30px', width: '40%' }}>
                {/* <button onClick={onClose}>onclose</button> */}
                {children}
            </div>
        </div> 
    )
}

export default Modal;