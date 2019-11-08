import {Dispatch} from 'redux'
import {CounterActions, decrementAmount, incrementAmount, asyncIncrementAmout} from 'modules/counterModule'

export class ActionDispatcher {
  constructor(private dispatch: Dispatch<CounterActions>) {}

  public increment(amount: number) {
    this.dispatch(incrementAmount(amount))
  }

  public decrement(amount: number) {
    this.dispatch(decrementAmount(amount))
  }

  public asyncIncrement() {
    this.dispatch(asyncIncrementAmout())
  }
}

