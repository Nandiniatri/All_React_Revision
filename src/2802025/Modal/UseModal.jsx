import { useState } from "react";
import Modal5 from "./modal5";

const UseModal5 = () => {
    const [isModalOpen , setIsModalOpen] = useState(false);

    const closeModal = () =>{
        setIsModalOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true);
    }


    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal5 isOpen={isModalOpen} onclose={closeModal}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi itaque ducimus soluta, obcaecati et ratione aperiam, tenetur sunt optio veritatis voluptatem modi qui iste. Fuga quis facere itaque vitae doloribus.</p>
                <button onClick={closeModal}>Close Modal</button>
            </Modal5>
        </div>
    )
}

export default UseModal5;