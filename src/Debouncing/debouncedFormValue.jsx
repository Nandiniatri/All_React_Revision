import { useEffect, useState } from "react";

const DebouncedFormValue = () => {
    const [firstName , setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [debouncedfirstname , setDebouncedfirstname] = useState(firstName);
    const [debouncedEmail , setDebouncedEmail] = useState(email);

    useEffect(() =>{
        const debuncedFirstname = setTimeout(() =>{
            setDebouncedfirstname(firstName);
        },1000)

        return (() => clearTimeout(debuncedFirstname))
    },[firstName])

    useEffect(() =>{
        const debluncedEmail = setTimeout(() =>{
            setDebouncedEmail(email)
        },1000)

        return (() => clearTimeout(debluncedEmail))
    },[email])

    const handleFirstName = (e) =>{
        console.log("First Name" , e.target.value);
        setFirstName(e.target.value);
    }

    const handleEmail = (e) =>{
        console.log("Email",e.target.value);
        setEmail(e.target.value);
    }

    const handlePassword = (e) =>{
        console.log("Password" ,e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div className="form-container">
            <form className="debounced-form">
                <label>First Name:</label>
                <input type="text" placeholder="Enter your firstname" value={firstName} onChange={handleFirstName}/>
                
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" value={email} onChange={handleEmail}/>
                
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" value={password} onChange={handlePassword}/>
            </form>

            <h1>{debouncedfirstname}</h1>
            <h1>{debouncedEmail}</h1>
        </div>
    );
};

export default DebouncedFormValue;
