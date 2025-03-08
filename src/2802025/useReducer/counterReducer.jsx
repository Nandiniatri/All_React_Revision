const CounterReducer = (state, action) => {
    switch (action.type) {
        case "Incre":
            return { count: state.count + 1 }
        case "Decre":
            return { count: state.count - 1 }
        case "change_Bg":
            return {
                ...state,
                color: action.payload
            }
        default:
            return state;
    }
}

export default CounterReducer; 