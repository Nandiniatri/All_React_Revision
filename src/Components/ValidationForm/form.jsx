import { useEffect, useState } from "react";

const ValidationForm = () =>{
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    // const [debouncedInputValue , setDebouncedInputValue] = useState('');

    // useEffect(() =>{
    //     const debouncedValue = setTimeout(() =>{
    //         setDebouncedInputValue(debouncedValue);
    //     },1000)
    //     return clearTimeout;
    // },[name , email , password])

    const handleName = (e) =>{
        const nameTarget = e.target.value;
        if(/^[A-Za-z\s]*$/.test(nameTarget)){
            setName(nameTarget);
        }
    }

    const handleEmail = (e) =>{
        const emailValue = e.target.value;
        if(emailValue == '/^[^\s@]+@[^\s@]+\.[^\s@]+$'){
            alert('hello')
            setEmail(emailValue);
        }
    }

    const handlePassword = (e) =>{
        const passwordValue = e.target.value;
        if(passwordValue >= 8){
            setPassword(passwordValue);
        }
    }

    

    return (
        <div>
            <form>
                <label>Username:</label>
                <input type="text" onChange={handleName} value={name} />
                <label>Email:</label>
                <input type="email" onChange={handleEmail} value={email} />
                <label>Password:</label>
                <input type="password" onChange={handlePassword} value={password} />
            </form>

            {/* <h2>{debouncedInputValue}</h2> */}
        </div>
    )
}

export default ValidationForm;