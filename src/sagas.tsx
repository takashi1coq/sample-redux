import {call, all} from 'redux-saga/effects'
import {watchIncrementAsync} from 'modules/counterModule'

// Saga全てを同時に起動して、全ての返却値が配列として返却される
export default function* rootSaga() {
  yield all([
    call(watchIncrementAsync)
  ])
}
