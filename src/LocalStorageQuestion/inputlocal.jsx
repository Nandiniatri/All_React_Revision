import { useEffect, useState } from "react"
import useLocalStorage from "./CustomHookOfLocalStorage/useLocalStorage";

const InputLocal = () => {
    const [inputvalue, setInputValue] = useState('');
    const [name, setName] = useLocalStorage('name' , '');
    // const [ key, value, localValue ] = useLocalStorage();
    // const [] = useLocalStorage()

    const handlename = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handlename} />
            <label>Name:</label>
        </div>
    )
}

export default InputLocal;