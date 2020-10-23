const initialState = {
    google: [],
    bing: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_RESULTS_SUCCESS': {
            return { ...state, ...action.payload }
        }
        default: {
            return state
        }
    }
}

export default reducer
