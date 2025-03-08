import { useState } from "react";

const ToogleText = () => {
    const [showText, setShowText] = useState(false);

    const handleToogleText = () => {
        setShowText(true);
    }

    return (
        <div>
            {showText &&
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempore eum repellat ab aspernatur! Quibusdam assumenda eligendi nihil nemo nisi ratione eaque a ea? Expedita consequatur aspernatur rerum maiores quo.</p>
            }
            <button onClick={handleToogleText}>Toogle Text</button>
        </div>
    )
}

export default ToogleText;