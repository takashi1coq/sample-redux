import { Dispatch } from 'redux'
import {
  CounterActions,
  decrementAmount,
  incrementAmount,
  asyncIncrementAmout,
} from 'src/modules/counterModule'

export default class ActionDispatcher {
  constructor(private dispatch: Dispatch<CounterActions>) {
    this.dispatch = dispatch
  }

  public increment(amount: number): void {
    this.dispatch(incrementAmount(amount))
  }

  public decrement(amount: number): void {
    this.dispatch(decrementAmount(amount))
  }

  public asyncIncrement(): void {
    this.dispatch(asyncIncrementAmout())
  }
}
