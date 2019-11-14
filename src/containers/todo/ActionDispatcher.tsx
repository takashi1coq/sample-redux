import { Dispatch } from 'react'
import { TodoActions, allTodoText } from 'src/modules/todoModule'

export default class ActionDispatcher {
  constructor(private dispatch: Dispatch<TodoActions>) {
    this.dispatch = dispatch
  }

  public alltodotext(text: string): void {
    this.dispatch(allTodoText(text))
  }
}
