import React, { ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReduxState } from 'src/store'
import { TodoState } from 'src/modules/todoModule'
import Todo from 'src/views/Todo'
import ActionDispatcher from 'src/containers/todo/ActionDispatcher'

const TodoContainer: React.FC = (): ReactElement => {
  const todo = useSelector<ReduxState, TodoState[]>(state => {
    return state.todo
  })
  return <Todo value={todo} actions={new ActionDispatcher(useDispatch())} />
}

export default TodoContainer
