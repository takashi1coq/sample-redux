import { Action } from 'redux'

enum ActionNames {
  ALL_TODO = 'ALL_TODO',
}

interface AllTodoAction extends Action {
  type: ActionNames.ALL_TODO
  incrementId: string
  todoText: string
}

export const allTodoText = (text: string): AllTodoAction => ({
  type: ActionNames.ALL_TODO,
  incrementId: Math.random().toString(36).slice(-8),
  todoText: text,
})

export type TodoActions = AllTodoAction

export interface TodoState {
  idStr: string
  textString: string
}

const initialState: TodoState[] = []

export default function reducer(
  state: TodoState[] = initialState,
  action: TodoActions,
): TodoState[] {
  switch (action.type) {
    case ActionNames.ALL_TODO:
      return [
        ...state,
        {
          idStr: action.incrementId,
          textString: action.todoText,
        },
      ]
    default:
      return state
  }
}
