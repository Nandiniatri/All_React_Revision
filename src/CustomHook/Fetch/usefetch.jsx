import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    const fetchApiData = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
    }

    useEffect(() => {
        fetchApiData();
    }, [url])

    return { data }
}

export default useFetch;