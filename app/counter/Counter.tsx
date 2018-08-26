import * as React from 'react'
import { CounterState } from './module'
import { ActionDispatcher } from './'

interface Props {
  value: CounterState,
  actions: ActionDispatcher
}

export class Counter extends React.Component<Props> {
  render() {
    const { actions } = this.props
    return (
      <div>
        <p>score: {this.props.value.num}</p>
        <button onClick={() => actions.increment(3)}>Increment 3</button>
        <button onClick={() => actions.decrement(2)}>Decrement 2</button>
      </div>
    )
  }
}
