import counter, { CounterActions, CounterState } from 'src/modules/counterModule'
import { createStore, combineReducers, Action, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './sagas'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers({
      counter,
    }),
    applyMiddleware(logger, sagaMiddleware),
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore

export type ReduxState = {
  counter: CounterState
}

export type ReduxAction = CounterActions | Action
