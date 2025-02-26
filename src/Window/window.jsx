import { useEffect, useState } from "react";

const WindowFolder = () =>{
    const [showWidth , setShowWidth] = useState(window.innerWidth);

    useEffect(() =>{
        const showWindowWidth = () =>{
            setShowWidth(window.innerWidth);
        }
        window.addEventListener('resize' , showWindowWidth);
        return (() => window.removeEventListener('resize' , showWindowWidth));
    },[])
    

    return (
        <div>
            <button>Window Width</button>
            <h2>{showWidth}</h2>
        </div>
    )
}

export default WindowFolder;