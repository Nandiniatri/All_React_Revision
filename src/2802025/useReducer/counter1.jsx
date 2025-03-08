const Counter1 = ({ count, handleCounterPlus, handleCounterMinus }) => {
    return (
        <div>
            <button onClick={handleCounterPlus}>Counter +</button>
            <h2>{count}</h2>
            <button onClick={handleCounterMinus}>Counter -</button>
        </div>
    )
}

export default Counter1;