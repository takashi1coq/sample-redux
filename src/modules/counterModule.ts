import {Action} from 'redux'
import { put, takeEvery, call } from 'redux-saga/effects'

// ActionCreater

enum ActionNames {
  INC = 'counter/increment',
  DEC = 'counter/decrement',
  Asy = 'counter/increment_async',
}

// インクリメント
interface IncrementAction extends Action {
  type: ActionNames.INC
  plusAmount: number
}
export const incrementAmount = (amount: number): IncrementAction => ({
  type: ActionNames.INC,
  plusAmount: amount
})

// デクリメント
interface DecrementAction extends Action {
  type: ActionNames.DEC
  minusAmount: number
}

export const decrementAmount = (amount: number): DecrementAction => ({
  type: ActionNames.DEC,
  minusAmount: amount
})

// 非同期（saga）インクリメント
interface AsyncIncrementAmout extends Action {
    type: ActionNames.Asy
}

export const asyncIncrementAmout = (): AsyncIncrementAmout => ({
    type: ActionNames.Asy,
})

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: ActionNames.INC, plusAmount: 6 })
}

export function* watchIncrementAsync() {
  yield takeEvery(ActionNames.Asy, incrementAsync)
}

// まとめといて後でdispatch
export type CounterActions = IncrementAction | DecrementAction | AsyncIncrementAmout


// Reducer

export interface CounterState {
  num: number
}

const initialState:CounterState = {num: 0}

export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case ActionNames.INC:
      return {num: state.num + action.plusAmount}
    case ActionNames.DEC:
      return {num: state.num - action.minusAmount}
    default:
      return state
  }
}
