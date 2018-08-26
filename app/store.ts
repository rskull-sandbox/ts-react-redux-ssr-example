import { createStore, combineReducers, Action } from 'redux'
import counter, { CounterActions, CounterState } from './counter/module'

export default createStore(
  combineReducers({
    counter
  })
)

export type ReduxState = {
  counter: CounterState
}

export type ReduxAction = CounterActions | Action