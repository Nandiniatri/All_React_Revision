import { useRef } from "react";

const FocusOnInput = () => {
    const inputRef = useRef(null);
    console.log(inputRef);
    
    const focusInput = () => {
        console.log(inputRef);
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default FocusOnInput;