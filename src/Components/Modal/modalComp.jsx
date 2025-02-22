import Modal from "./modal";
import { useState } from "react";

const ModalContentComp = () => {
    const [isModalOpen , setisModalOpen] = useState(false);

    const openModal = () =>{
        setisModalOpen(true);
    }

    const closeModal = () =>{
        setisModalOpen(false);
    }

    return (
        <>
            <div>
                <button onClick={openModal}>Open Modal</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Modal Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit hic fuga. Molestiae qui natus voluptatum libero quisquam ut odit consequatur, nulla incidunt magnam. Voluptas natus mollitia error. Perspiciatis, nisi.</p>
                <button onClick={closeModal}>CLose</button>
            </Modal>
        </>
    )
}

export default ModalContentComp;