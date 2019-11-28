import { call, all } from 'redux-saga/effects'
import { watchIncrementAsync } from 'src/modules/counterModule'
import { countrySaga, regionSaga, testAxiosSaga } from 'src/modules/apiTest/Saga'

// Saga全てを同時に起動して、全ての返却値が配列として返却される
export default function* rootSaga() {
  yield all([call(watchIncrementAsync), call(countrySaga), call(regionSaga), call(testAxiosSaga)])
}
