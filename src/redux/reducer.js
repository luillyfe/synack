import { combineReducers } from 'redux'

import resultsReducer from '../containers/Results/reducer'

const reducer = combineReducers({
    results: resultsReducer,
})

export default reducer
