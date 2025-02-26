import { useState } from "react";
import Modal3 from "./modal3";

const UseMYMOdal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () =>{
        setIsModalOpen(true);
    }

    const closeModal = () =>{
        setIsModalOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal3 isOpen={isModalOpen} onclose={closeModal}>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae voluptate rerum, laboriosam modi vel voluptatum iste reprehenderit ea asperiores alias odit velit molestias voluptatibus reiciendis debitis corporis? Magni, nobis facilis.</p>
                    <button onClick={closeModal}>close</button>
                </div>
            </Modal3>
        </div>
    )
}

export default UseMYMOdal;