import { Action } from 'redux'

export enum ActionNames {
  FETCH_COUNTRY = 'apitest/fetch_country',
  SUCCESS_COUNTRY_API = 'apitest/success_country_api',
  ERROR_COUNTRY_API = 'apitest/error_country_api',
}

// fetch
interface FetchCountry extends Action {
  type: ActionNames.FETCH_COUNTRY
}
export const fetchCountryApi = (): FetchCountry => ({
  type: ActionNames.FETCH_COUNTRY,
})

// success
interface SuccessCountry extends Action {
  type: ActionNames.SUCCESS_COUNTRY_API
  responseItems: []
}
export const successCountryItem = (items: []): SuccessCountry => ({
  type: ActionNames.SUCCESS_COUNTRY_API,
  responseItems: items,
})

// error
interface ErrorCountry extends Action {
  type: ActionNames.ERROR_COUNTRY_API
  errorItems: []
}
export const errorCountryApi = (items: []): ErrorCountry => ({
  type: ActionNames.ERROR_COUNTRY_API,
  errorItems: items,
})

export type ApiTestActions = FetchCountry | SuccessCountry | ErrorCountry

// state and reducer
export interface ApiTestState {
  resItems: []
}

const initialState: ApiTestState = { resItems: [] }

export default function reducer(
  state: ApiTestState = initialState,
  action: ApiTestActions,
): ApiTestState {
  switch (action.type) {
    case ActionNames.SUCCESS_COUNTRY_API:
      return { resItems: action.responseItems }
    case ActionNames.ERROR_COUNTRY_API:
      return { resItems: action.errorItems }
    default:
      return state
  }
}
