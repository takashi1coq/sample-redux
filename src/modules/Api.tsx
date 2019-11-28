import axios from 'axios'

export const requestApi = async (url: string) => {
  return axios
    .get(url)
    .then(response => {
      const successResult = response.data
      return { successResult }
    })
    .catch(error => {
      return { error }
    })
}

export const postApi = async (url: string, data: {}) => {
  return axios
    .post(url,data)
    .then(response => {
      const successResult = response.data
      return { successResult }
    })
    .catch(error => {
      return {error}
    })
}
