import { Action } from 'redux'

enum ActionNames {
  INC = 'counter/increment',
  DEC = 'counter/decrement'
}

interface IncrementAction extends Action {
  type: ActionNames.INC,
  amount: number
}

export const incrementAmount = (amount: number): IncrementAction => ({
  type: ActionNames.INC,
  amount
})

interface DecrementAction extends Action {
  type: ActionNames.DEC,
  amount: number
}

export const decrementAmount = (amount: number): DecrementAction => ({
  type: ActionNames.DEC,
  amount
})

export interface CounterState {
  num: number
}

export type CounterActions = IncrementAction | DecrementAction

const initialState: CounterState = { num: 0 }

export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case ActionNames.INC:
      return { num: state.num + action.amount }
    case ActionNames.DEC:
      return { num: state.num - action.amount }
    default:
      return state
  }
}
