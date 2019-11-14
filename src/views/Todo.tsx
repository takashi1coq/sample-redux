import React, { ReactElement, useState, ChangeEvent } from 'react'
import { TodoState } from 'src/modules/todoModule'
import ActionDispatcher from 'src/containers/todo/ActionDispatcher'

interface Props {
  value: TodoState[]
  actions: ActionDispatcher
}

const Todo: React.FC<Props> = (props): ReactElement => {
  const [text, setText] = useState()
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value)
  }
  return (
    <div>
    <ul>
    {props.value.map((todo, i) => {
      return <li key={i}>{todo.textString}</li>
    })}
    </ul>
      <input type="text" onChange={handleChange} />
      <button type="button" onClick={() => props.actions.alltodotext(text)}>
        todo test
      </button>
    </div>
  )
}

export default Todo
