import { actionTypes1 } from "../actionTypes"
// ACTIONS
const serverRenderClock = isServer => dispatch => {
    return dispatch({ type: actionTypes1.TICK, light: !isServer, ts: Date.now() })
}

const startClock = dispatch => {
    return setInterval(() => {
        dispatch({ type: actionTypes1.TICK, light: true, ts: Date.now() })
    }, 1000)
}

const incrementCount = () => dispatch => {
    return dispatch({ type: actionTypes1.INCREMENT })
}

const decrementCount = () => dispatch => {
    return dispatch({ type: actionTypes1.DECREMENT })
}

const resetCount = () => dispatch => {
    return dispatch({ type: actionTypes1.RESET })
}

export default {
    serverRenderClock,
    startClock,
    incrementCount,
    decrementCount,
    resetCount
}