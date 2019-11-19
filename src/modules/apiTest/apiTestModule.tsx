import { Action } from 'redux'

export enum ActionNames {
  FETCH_COUNTRY = 'apitest/fetch_country',
  SUCCESS_COUNTRY_API = 'apitest/success_country_api',
  ERROR_COUNTRY_API = 'apitest/error_country_api',
  SEARCH_REGIONS = 'apitest/search_region',
  SUCCESS_SEARCH_REGIONS = 'apitest/success_search_regions',
  ERROR_SEARCH_REGIONS = 'error_search_regions',
}

// fetch
export interface FetchCountry extends Action {
  type: ActionNames.FETCH_COUNTRY
  countryName: string
}
export const fetchCountryApi = (name: string): FetchCountry => ({
  type: ActionNames.FETCH_COUNTRY,
  countryName: name
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

// search_region
export interface SearchRegions extends Action {
  type: ActionNames.SEARCH_REGIONS
}
export const searchRegionsApi = (): SearchRegions => ({
  type: ActionNames.SEARCH_REGIONS,
})

// success search region
interface SuccessSearchRegions extends Action {
  type: ActionNames.SUCCESS_SEARCH_REGIONS
  responseRegionsItem: {
    region: string
  }[]
}
export const successSearchRegionsItem = (items: []): SuccessSearchRegions => ({
  type: ActionNames.SUCCESS_SEARCH_REGIONS,
  responseRegionsItem: items
})

// error search region
interface ErrorSearchRegions extends Action {
  type: ActionNames.ERROR_SEARCH_REGIONS
  errorItem: []
}

export const errorSearchRegionItem = (items: []): ErrorSearchRegions => ({
  type: ActionNames.ERROR_SEARCH_REGIONS,
  errorItem: items
})

export type ApiTestActions = FetchCountry | SuccessCountry | ErrorCountry | SearchRegions | SuccessSearchRegions | ErrorSearchRegions

// state and reducer
export interface ApiTestState {
  resItems: {
    name: string
    flag: string
    alpha2Code: string
    capital: string
    demonym: string
    region: string
    subregion: string
    translations: {
      ja: string
    }
  }[],
  resRegionItems: string[]
}

const initialState: ApiTestState = { resItems: [], resRegionItems: [] }

export default function reducer(
  state: ApiTestState = initialState,
  action: ApiTestActions,
): ApiTestState {
  switch (action.type) {
    case ActionNames.SUCCESS_COUNTRY_API:
      return {
        ...state,
        resItems: action.responseItems
      }
    case ActionNames.ERROR_COUNTRY_API:
      return {
        ...state,
        resItems: action.errorItems
      }
    case ActionNames.SUCCESS_SEARCH_REGIONS:
      return {
        ...state,
        resRegionItems: action.responseRegionsItem.map(row => {
          return row.region
        }).filter((x,i,self) => {
          return self.indexOf(x) === i
        })
      }
    case ActionNames.ERROR_SEARCH_REGIONS:
      return {
        ...state,
        resRegionItems: action.errorItem
      }
    default:
      return state
  }
}
