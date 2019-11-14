import counter, { CounterActions, CounterState } from 'src/modules/counterModule'
import { createStore, combineReducers, Action, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core'
import todo, { TodoState, TodoActions } from 'src/modules/todoModule'
import apiTest, { ApiTestState, ApiTestActions } from 'src/modules/apiTest/apiTestModule'
import rootSaga from './sagas'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers({
      counter,
      todo,
      apiTest,
    }),
    applyMiddleware(logger, sagaMiddleware),
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore

export type ReduxState = {
  counter: CounterState
  todo: TodoState[]
  apiTest: ApiTestState
}

export type ReduxAction = ApiTestActions | TodoActions | CounterActions | Action
