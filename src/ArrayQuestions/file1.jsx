import { useEffect, useState } from "react";

const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const ArrayProblem = () => {
    const [byFive, setByFive] = useState([]);
    const [totalNum , setTotalNumber] = useState([]);

    const divideBy5 = () => {
        const newArry = []
        number.map((item) => (
            // console.log(item)
            newArry.push(item / 5)
        ))
        setByFive(newArry);
        console.log(newArry);

        const totalNumber = newArry.reduce((acc , currentIndex) =>{
            return acc + currentIndex;
        });
        console.log("total" ,totalNumber);
        setTotalNumber(totalNumber);
    }

    console.log(totalNum);

    useEffect(() => {
        divideBy5();
    }, [])

    return (
        <div>
            {number.map((itm , index) => {
                return (
                    <div>
                        <h4>{itm} / 5 = {byFive[index]}</h4>
                    </div>
                )
            })}

            {byFive.map((item) => {
                return (
                    <>
                        <div>
                            <p>{item}</p>
                        </div>
                    </>
                )
            })}

            <div>
                <h2>Total:{totalNum}</h2>
            </div>

        </div>
    )
}

export default ArrayProblem;