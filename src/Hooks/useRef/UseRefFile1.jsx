//useRef is a React Hook that lets you reference a value that’s not needed for rendering.
//const ref = useRef(initialValue);

import { useRef } from "react"

const UseRefFile = () => {  
    const inc = useRef(0);
    console.log(inc);

    const handleInc = () => {
        inc.current += 1    
        console.log(inc.current);
    }

    return (
        <div>
            <button onClick={handleInc}>Inc</button>
            <h3>{inc.current}</h3>
        </div>
    )
}


export default UseRefFile;