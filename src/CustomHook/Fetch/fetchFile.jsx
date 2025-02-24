import { useEffect, useState } from "react";
import useFetch from "./usefetch";

const FetchFile = () => {
    const { data } = useFetch('https://dummyjson.com/products');
    const [inputSearch, setInputSearch] = useState('');
    const [debouncedInputValue, setDebouncedInputValue] = useState(inputSearch);

    useEffect(() => {
        const debouncedValue = setTimeout(() => {
            setDebouncedInputValue(inputSearch);
        }, 1000)
        return (() => clearTimeout(debouncedValue));
    }, [inputSearch])

    const handleSearchInput = (e) => {
        // console.log(e.target.value);
        const inputValue = e.target.value;
        setInputSearch(inputValue);
    }

    const filtered = data.products && data.products.filter((item) =>
        item.title.toLowerCase().includes(inputSearch)
    )
    // console.log(filtered);

    return (
        <div>
            <div>
                <input type="search" value={inputSearch} onChange={handleSearchInput} />
            </div>
            <div>
                {filtered && filtered.map((itm) => {
                    return (
                        <div key={itm.id}>
                            <p>{itm.title}</p>
                        </div>
                    )
                })}
            </div>

            <p>{debouncedInputValue}</p>
        </div>
    )
}

export default FetchFile;