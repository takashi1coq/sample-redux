import * as React from 'react'
import {CounterState} from 'modules/counterModule'
import {ActionDispatcher} from 'containers/counter/ActionDispatcher'

interface Props {
  value: CounterState
  actions: ActionDispatcher
}

export function Counter(props: Props) {
    return (
      <div>
        <p>score: {props.value.num}</p>
        <button onClick={() => props.actions.increment(3)}>追加 3</button>
        <button onClick={() => props.actions.decrement(2)}>減らす 2</button>
        <button onClick={() => props.actions.asyncIncrement()}>非同期で６くらい増やす </button>
      </div>
    )
}
