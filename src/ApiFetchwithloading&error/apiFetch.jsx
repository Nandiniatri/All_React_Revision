import { useEffect, useState } from "react";

const ApiFetch = () =>{
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    const fetchData = async() =>{
        try{
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products');
            // console.log(response);
            if(!response.ok){
                console.log('Response not ok');
            }
            const result = await response.json();
            // console.log(result.products);
            setData(result.products);
        }catch(error){
            // console.log('error');
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        fetchData();
    },[])

    if(loading) return <h2>Loading..........</h2>
    if(error) return <p>{error}</p>

    return (
        <div>
            {data.map((item) =>{
                console.log(item);
                return (
                    <>
                        <h2>{item.title}</h2>
                    </>
                )
            })}
        </div>
    )
}

export default ApiFetch;