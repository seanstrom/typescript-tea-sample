import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import App, { init, update } from './app'

export interface Config {
  mountNode: HTMLElement
}

export function main({ mountNode }: Config): void {
  const middleware = applyMiddleware(thunk)
  const store = createStore(update, init, middleware)
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  )

  render(app, mountNode)
}
