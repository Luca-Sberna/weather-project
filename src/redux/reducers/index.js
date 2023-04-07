const initialState = {
    weatherMain: {
        weather: ''
    },
    citySelected: {
        content: {}
    }
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_WEATHER_MAIN":
            return {
                ...state,
                weatherMain: action.payload,
                isSunny: action.payload === "Clear" || action.payload === "Sun"
            };
        default:
            return state;
    }
}

export default mainReducer;

