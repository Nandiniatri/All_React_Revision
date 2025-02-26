import { useState } from "react";
import Modal4 from "./modal4";
const UseModal4 = () => {
    const [isModalOpen , setIsModalOpen] = useState(false);

    const openModal = () =>{
        alert('njnj')
        setIsModalOpen(true);
    }

    const closeModal = () =>{
        setIsModalOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal4 isOpen={isModalOpen} onclose={closeModal}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium possimus aut incidunt ea earum ad, in ipsa sint laboriosam fugit atque sed provident deserunt cupiditate tenetur, soluta aliquid doloribus nobis?</p>
                <button onClick={closeModal}>Close Modal</button>
            </Modal4>
        </div>
    )
}

export default UseModal4;