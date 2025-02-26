import { useEffect, useState } from "react"

const InputLocal = () =>{
    const [inputvalue , setInputValue] = useState('');

    const handleInput = (e) =>{
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    useEffect(() =>{
        localStorage.setItem("inputValue" , inputvalue);
        localStorage.getItem("inputValue" , inputvalue);
    },[inputvalue])

    return (
        <div>
            <input type="text" value={inputvalue} onChange={handleInput}/>
        </div>
    )
}

export default InputLocal;