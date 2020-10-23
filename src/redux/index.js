// @vendors
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import immutableInvariant from 'redux-immutable-state-invariant'

// @reducer
import reducer from './reducer'

const middleware =
    process.env.NODE_ENV === 'production'
        ? [thunk]
        : [immutableInvariant(), thunk]

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const store = createStore(reducer, enhancer)
store.subscribe(value => value)

export default store
