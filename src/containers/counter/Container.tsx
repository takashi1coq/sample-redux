import React, { ReactElement } from 'react'
import Counter from 'src/views/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { CounterState } from 'src/modules/counterModule'
import { ReduxState } from 'src/store'
import ActionDispatcher from 'src/containers/counter/ActionDispatcher'

const CounterContainer: React.FC = (): ReactElement => {
  const count = useSelector<ReduxState, CounterState>(state => {
    return state.counter
  })
  return <Counter value={count} actions={new ActionDispatcher(useDispatch())} />
}

export default CounterContainer
