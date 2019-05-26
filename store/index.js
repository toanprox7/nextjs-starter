import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {reducer1} from "./reducers"
import {exampleInitialState} from "./InitialState"

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer1,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
