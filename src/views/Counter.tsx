import React, { ReactElement } from 'react'
import { CounterState } from 'src/modules/counterModule'
import ActionDispatcher from 'src/containers/counter/ActionDispatcher'

interface Props {
  value: CounterState
  actions: ActionDispatcher
}

const Counter: React.FC<Props> = (props): ReactElement => {
  const { value } = props
  return (
    <div>
      <p>
        score:
        {value.num}
      </p>
      <button type="button" onClick={() => props.actions.increment(3)}>
        追加 3
      </button>
      <button type="button" onClick={() => props.actions.decrement(2)}>
        減らす 2
      </button>
      <button type="button" onClick={() => props.actions.asyncIncrement()}>
        非同期で６くらい増やす
      </button>
    </div>
  )
}

export default Counter
