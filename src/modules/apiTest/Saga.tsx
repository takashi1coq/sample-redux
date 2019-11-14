import axios from 'axios'
import { put, call, takeEvery } from 'redux-saga/effects'
import { ActionNames } from 'src/modules/apiTest/apiTestModule'

const requestCountryApi = () => {
  const url = 'https://restcountries.eu/rest/v2/all'
  return axios
    .get(url)
    .then(response => {
      const country = response.data
      return { country }
    })
    .catch(error => {
      return { error }
    })
}

export function* fetchCountry() {
  const { country, error } = yield call(requestCountryApi)
  if (country) {
    yield put({ type: ActionNames.SUCCESS_COUNTRY_API, responseItems: country })
  } else {
    yield put({ type: ActionNames.ERROR_COUNTRY_API, errorItems: error })
  }
}

export function* countrySaga() {
  yield takeEvery(ActionNames.FETCH_COUNTRY, fetchCountry)
}
