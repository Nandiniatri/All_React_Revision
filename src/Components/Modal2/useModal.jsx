import { useState } from "react";
import Modal2 from "./modal2";

const UseModal = () => {
    const [isModalOpen , setIsModalOpen] = useState(true);

    
    return (
        <div>
            <Modal2 isOpen={isModalOpen} >
                <div style={{border:'solid'}}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil animi aliquid cupiditate repellat aspernatur alias, voluptas similique in laborum deserunt recusandae, maxime consectetur accusantium obcaecati aut ipsum. Quia, voluptatum.
                    </p>
                    <button>Close modal</button>
                </div>
            </Modal2>
        </div>
    )
}
export default UseModal;