import { put, call, takeEvery } from 'redux-saga/effects'
import { ActionNames, FetchCountry } from 'src/modules/apiTest/apiTestModule'
import {requestApi, postApi} from 'src/modules/Api'

export function* fetchCountry(action: FetchCountry) {
  let url = 'https://restcountries.eu/rest/v2/all'
  if (action.countryName !== 'all') {
    url = 'https://restcountries.eu/rest/v2/region/' + action.countryName
  }
  const { successResult, error } = yield call(requestApi, url)
  if (successResult) {
    yield put({ type: ActionNames.SUCCESS_COUNTRY_API, responseItems: successResult })
  } else {
    yield put({ type: ActionNames.ERROR_COUNTRY_API, errorItems: error })
  }
}

function* getRegion() {
  let url = 'https://restcountries.eu/rest/v2/all'
  const {successResult, error} = yield call(requestApi, url)
  if (successResult) {
    yield put({type: ActionNames.SUCCESS_SEARCH_REGIONS, responseRegionsItem: successResult})
  } else {
    yield put({type: ActionNames.ERROR_SEARCH_REGIONS, errorItem: error})
  }
}

function* textAxiosAct() {
  let url = 'http://localhost:3000/checkService'
  let data = {
    name: 'name',
    num: '3',
  }
  const {successResult, error} = yield call(postApi, url, data)
  if (successResult) {
    yield put({type: ActionNames.SUCCESS_POST_AXIOS, testAxios: successResult})
  } else {
    yield put({type: ActionNames.ERROR_SEARCH_REGIONS, errorAxios: error})
  }
}

export function* countrySaga() {
  yield takeEvery(ActionNames.FETCH_COUNTRY, fetchCountry)
}

export function* regionSaga() {
  yield takeEvery(ActionNames.SEARCH_REGIONS, getRegion)
}

export function* testAxiosSaga() {
  yield takeEvery(ActionNames.TEST_POST_AXIOS, textAxiosAct)
}
