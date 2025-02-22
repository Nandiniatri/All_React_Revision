import { useState } from "react";

const ColorPicker = () =>{
    const [color , setColor] = useState('');

    const handleColor = (e) =>{
        console.log(e.target.value);
        setColor(e.target.value)
    }

    return (
        <div>
            <input type="color" onChange={(e) => handleColor(e)} value={color} />
            <div style={{border:'solid' , padding:'30px',width:'30%',height:'30vh', backgroundColor:color}}>

            </div>
        </div>
    )
}

export default ColorPicker;