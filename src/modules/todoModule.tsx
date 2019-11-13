import {Action} from 'redux'

enum ActionNames {
  ALL_TODO = 'ALL_TODO'
}

interface AllTodoAction extends Action {
  type: ActionNames.ALL_TODO
  incrementId: number
  todoText: string
}

export const allTodoText = (id: number, text: string): AllTodoAction => ({
  type: ActionNames.ALL_TODO,
  incrementId: id,
  todoText: text,
})

export type TodoActions = AllTodoAction

export interface TodoState {
  idNum: number
  textString: string
}

const initialState: TodoState = { idNum: 0, textString: ''}

export default function reducer(
  state: TodoState = initialState,
  action: TodoActions,
): TodoState {
  switch (action.type) {
    case ActionNames.ALL_TODO:
      // bad !!
      return {
        idNum: state.idNum + 1,
        textString: action.todoText
      }
    default:
      return state
  }
}
