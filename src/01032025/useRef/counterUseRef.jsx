import { useRef } from "react";

const CounterUseRef = () => {
    const counter = useRef(0);
    console.log(counter);

    const handlePlus = () =>{
        counter.current += 1;
        console.log('Counter Plus' , counter.current);
        
    }

    const handleMinus = () =>{
        counter.current -= 1;
        console.log('Counter Minus' , counter.current);
    }

    return (
        <div>
            <button onClick={handlePlus}>Count +</button>
            {/* <h2>{counter}</h2> */}
            <h1 ref={counter}>{counter.current}</h1>
            <button onClick={handleMinus}>Count -</button>
        </div>
    )
}

export default CounterUseRef;