import 'whatwg-fetch'
import 'es6-promise/dist/es6-promise.min.js'
import 'fetch-ie8/fetch.js'

export default function $api (url, params, method = 'post') {
  let requestUrl = `http://172.32.30.167:3001${url}`
  let request = {}
  if (method === 'get') {
    request = {
      method
    }
  } else {
    request = {
      method,
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(params)
    }
  }
  return fetch(requestUrl, request).then((res) => {
    return res.json()
  }).then((data) => {
    if (data.code === 200) {
      return data.data
    } else {
      // alert('error')
    }
  })
}
