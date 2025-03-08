import { useEffect, useState } from "react";

// const useLocalStorage = (key, value) => {
//     const [localValue, setLocalValue] = useState('');


//     const setInLocal = localStorage.setItem('key', value);
//     setLocalValue(setInLocal);

//     return { key, value , localValue}
// }

// export default useLocalStorage;



// function useLocalStorage(key, initialValue) {
//     const storedValue = localStorage.getItem(key);
//     const [storedValueState, setStoredValueState] = useState(
//         storedValue ? JSON.parse(storedValue) : initialValue
//     );
//     const setValue = (value) => {
//         const valueToStore = value instanceof Function ? value(storedValueState) : value;
//         localStorage.setItem(key, JSON.stringify(valueToStore));
//         setStoredValueState(valueToStore);
//     };
//     return [storedValueState, setValue];
// }

// export default useLocalStorage;



// function useLocalStorage(key, initialValue) {
//     const [value, setValue] = useState(() => {
//         try {
//             const stored = localStorage.getItem(key);
//             return stored ? JSON.parse(stored) : initialValue;
//         } catch (error) {
//             console.error("Error reading localStorage", error);
//             return initialValue;
//         }
//     });

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value]);

//     return [value, setValue];
// }

// export default useLocalStorage;



function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key)) || initialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue];
}

export default useLocalStorage;
