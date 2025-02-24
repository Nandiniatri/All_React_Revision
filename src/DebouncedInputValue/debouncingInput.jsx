import { useEffect, useState } from "react"
import useDebounced from "./usedebouncedValue";

const DebouncedInputValue = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const debouncedName = useDebounced(name, 1000);
    console.log(debouncedName);
    const debouncedEmail = useDebounced(email , 1000);


    useEffect(() => {
        if (debouncedName) {
            console.log('Debounced Name :', debouncedName);
        }
    }, [debouncedName])

    useEffect(() =>{
        if(debouncedEmail){
            console.log('Debounced Email :' , debouncedEmail);
        }
    },[debouncedEmail])

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <label>Username:</label>
            <input type="text" value={name} onChange={handleName} />
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmail} />
            <p>{debouncedName}</p>
            <p>{debouncedEmail}</p>
        </>
    )
}

export default DebouncedInputValue;