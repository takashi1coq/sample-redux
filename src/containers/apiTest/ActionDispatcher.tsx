import { Dispatch } from 'redux'
import { ApiTestActions, fetchCountryApi, searchRegionsApi, testPostAxios } from 'src/modules/apiTest/apiTestModule'

export default class ActionDispatcher {
  constructor(private dispatch: Dispatch<ApiTestActions>) {
    this.dispatch = dispatch
  }

  public fetchApi(select: string): void {
    this.dispatch(fetchCountryApi(select))
  }

  public getRegion(): void {
    this.dispatch(searchRegionsApi())
  }

  public testAxiosdis(): void {
    this.dispatch(testPostAxios())
  }
}
