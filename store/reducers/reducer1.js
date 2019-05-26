import {actionTypes1} from "../actionTypes"
import {exampleInitialState} from "../InitialState"
// REDUCERS
const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
      case actionTypes1.TICK:
        return Object.assign({}, state, {
          lastUpdate: action.ts,
          light: !!action.light
        })
      case actionTypes1.INCREMENT:
        return Object.assign({}, state, {
          count: state.count + 1
        })
      case actionTypes1.DECREMENT:
        return Object.assign({}, state, {
          count: state.count - 1
        })
      case actionTypes1.RESET:
        return Object.assign({}, state, {
          count: exampleInitialState.count
        })
      default:
        return state
    }
  }
  export default reducer;