import { useEffect, useState } from "react";

const TimerComponent = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const handleTimeStart = () => {
        setIsRunning(true);
    }

    const handleStop = () => {
        setIsRunning(false);
    }

    const handleReset = () => {
        setTimer(0)
        setIsRunning(false);
    }

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevTime) => (prevTime + 1));
            }, 500)
        }else{
            return (() => clearInterval(interval));
        }

        return (() => clearInterval(interval));
    }, [isRunning])


    return (
        <div>
            <h2>{timer}</h2>
            <button onClick={handleTimeStart}>Time Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default TimerComponent;