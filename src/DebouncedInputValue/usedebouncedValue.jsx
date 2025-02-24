import { useEffect, useState } from "react"

function useDebounced(value , delay) {
    const [debouncedValue , setDebouncedValue] = useState(value);

    useEffect(() =>{
        const debouncedAllValues = setTimeout(() =>{
            setDebouncedValue(value);
        },1000)

        return (() => clearTimeout(debouncedAllValues));
    },[value , delay])


    return debouncedValue;
}

export default useDebounced;

//it is a custom hook of debounceInputValue;