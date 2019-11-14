import { Dispatch } from 'redux'
import { ApiTestActions, fetchCountryApi } from 'src/modules/apiTest/apiTestModule'

export default class ActionDispatcher {
  constructor(private dispatch: Dispatch<ApiTestActions>) {
    this.dispatch = dispatch
  }

  public fetchApi(): void {
    this.dispatch(fetchCountryApi())
  }
}
