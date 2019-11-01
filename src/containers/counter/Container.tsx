import * as React from 'react'
import {Counter} from 'views/Counter'
import {useDispatch, useSelector} from 'react-redux'
import { CounterState } from 'modules/counterModule'
import {ReduxState} from 'store'
import {ActionDispatcher} from 'containers/counter/ActionDispatcher'

export default function CounterContainer() {
  const count = useSelector<ReduxState, CounterState>((state) => {
    return state.counter
  })
  return (
      <Counter
          value={count}
          actions={new ActionDispatcher(useDispatch())}
      />
  )
}
