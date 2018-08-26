import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../app/store'
import Counter from '../app/counter'

(async () => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Counter />
    </Provider>,
    document.getElementById('app')
  )
})()
