import { Action } from 'redux'
import {CheckName, CheckFlag, CheckAlpha2Code, CheckCapital, CheckDemonym, CheckRegion, CheckSubRegion} from 'src/modules/apiTest/CheckData'

export enum ActionNames {
  FETCH_COUNTRY = 'apitest/fetch_country',
  SUCCESS_COUNTRY_API = 'apitest/success_country_api',
  ERROR_COUNTRY_API = 'apitest/error_country_api',
  SEARCH_REGIONS = 'apitest/search_region',
  SUCCESS_SEARCH_REGIONS = 'apitest/success_search_regions',
  ERROR_SEARCH_REGIONS = 'error_search_regions',
  TEST_POST_AXIOS = 'test_post_axios',
  SUCCESS_POST_AXIOS = 'success_post_axios',
  ERROR_POST_AXIOS = 'error_post_axios',
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
  responseItems: {
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

// test post axios
interface TestPostAxios extends Action {
  type: ActionNames.TEST_POST_AXIOS,
}
export const testPostAxios = (): TestPostAxios => ({
  type: ActionNames.TEST_POST_AXIOS,
})

// test post axios success
interface SuccessTestAxios extends Action {
  type: ActionNames.SUCCESS_POST_AXIOS,
  testAxios: []
}
export const successTestAxios = (item: []): SuccessTestAxios => ({
  type: ActionNames.SUCCESS_POST_AXIOS,
  testAxios: item
})


// test post axios error
interface ErrorTestAxios extends Action {
  type: ActionNames.ERROR_POST_AXIOS,
  errorAxios: []
}
export const errorTestAxios = (item: []): ErrorTestAxios => ({
  type: ActionNames.ERROR_POST_AXIOS,
  errorAxios: item
})



export type ApiTestActions = FetchCountry | SuccessCountry | ErrorCountry | SearchRegions | SuccessSearchRegions | ErrorSearchRegions | TestPostAxios | SuccessTestAxios | ErrorTestAxios

// state
export interface DataInState {
  data: string
  redF: boolean
}
export interface StateInState {
  name: DataInState
  flag: DataInState
  alpha2Code: DataInState
  capital: DataInState
  demonym: DataInState
  region: DataInState
  subregion: DataInState
  translations: {
    ja: string
  }
}
export interface ApiTestState {
  resItems: StateInState[],
  resRegionItems: string[]
  testAxios: []
}

// reducer
const initialState: ApiTestState = { resItems: [], resRegionItems: [], testAxios: []}

export default function reducer(
  state: ApiTestState = initialState,
  action: ApiTestActions,
): ApiTestState {
  switch (action.type) {
    case ActionNames.SUCCESS_COUNTRY_API:
      return {
        ...state,
        resItems: action.responseItems.reduce((prev: StateInState[], current) => {
          prev.push({
            name: CheckName(current.name),
            flag: CheckFlag(current.flag),
            alpha2Code: CheckAlpha2Code(current.alpha2Code),
            capital: CheckCapital(current.capital),
            demonym: CheckDemonym(current.demonym),
            region: CheckRegion(current.region),
            subregion: CheckSubRegion(current.subregion),
            translations: {
              ja: current.translations.ja
            }
          })
          return prev
        }, [])
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
    case ActionNames.SUCCESS_POST_AXIOS:
      return {
        ...state,
        testAxios: action.testAxios
      }
    case ActionNames.ERROR_POST_AXIOS:
      return {
        ...state,
        testAxios: action.errorAxios
      }
    default:
      return state
  }
}
