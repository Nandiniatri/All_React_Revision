import { useReducer } from "react";
import Counter1 from "./counter1";
import CounterReducer from "./counterReducer";
import ChangeBackgroundColor from "./changeBackgroundColor";

const initialValue = {
    count: 0,
    color: ''
}

const UseCounterReducer = () => {
    const [state, dispatch] = useReducer(CounterReducer, initialValue);

    const handleCounterPlus = () => {
        dispatch({ type: 'Incre' })
    }

    const handleCounterMinus = () => {
        dispatch({ type: 'Decre' })
    }

    const handlebg = () =>{
        dispatch({ type:'change_Bg' , payload:'red'})
    }

    return (
        <>
            <Counter1 count={state.count} handleCounterPlus={handleCounterPlus} handleCounterMinus={handleCounterMinus} />
            <ChangeBackgroundColor handlebg={handlebg} color={state.color} />
        </>

    )
}

export default UseCounterReducer;