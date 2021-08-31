import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

export interface Model {
  count: number
}

export enum MsgTypes {
  Increment = 'Increment',
  Decrement = 'Decrement'
}

export type Msg
  = Increment
  | Decrement

export interface Increment {
  type: MsgTypes.Increment,
  value: number
}

export interface Decrement {
  type: MsgTypes.Decrement
}

export interface Props extends Model {
  dispatch: Dispatch<Msg>
}

export function update (model: Model, msg: Msg): Model {
  switch (msg.type) {
    case (MsgTypes.Increment):
      return { count: model.count + 1 }
    case MsgTypes.Decrement:
      return { count: model.count - 1 }
    default:
      return model
  }
}

export const init: Model =
  { count: 0 }


function mapState (state: Model) {
  return state
}

export const view = ({ count, dispatch }: Props) => {
  const increment = (amount: number) => {
    const message = { type: MsgTypes.Increment, value: amount }
    return (_: any) => {
      dispatch(message)
    }
  }
  const decrement = (amount: number) => {
    const message = { type: MsgTypes.Decrement, value: amount }
    return (_: any) => {
      dispatch(message)
    }
  }

  return (
    <div className='counter'>
      <button onClick={increment(1)}>+</button>
      <span>{ count }</span>
      <button onClick={decrement(1)}>-</button>
    </div>
  )
}

export default connect(mapState)(view)
