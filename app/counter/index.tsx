import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { incrementAmount, decrementAmount } from './module'
import { ReduxState, ReduxAction } from '../store'
import { Counter } from './Counter'

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {}

  public increment(amount: number) {
    this.dispatch(incrementAmount(amount))
  }

  public decrement(amount: number) {
    this.dispatch(decrementAmount(amount))
  }
}

export default connect(
  (state: ReduxState) => ({ value: state.counter }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch)
  })
)(Counter)
