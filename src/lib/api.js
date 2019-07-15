import axios from 'axios'

// axios.defaults.header.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截
axios.interceptors.request.use(res => {
  return res
}, error => {
  return Promise.reject(error)
})
// 响应拦截
axios.interceptors.response.use(res => {
  console.log('res', res)
  return res
}, error => {
  return Promise.reject(error)
})
// 封装post
const fetch = (url, params) => {
  return new Promise((resolve, reject) => {
    axios({url: url, params: params, method: 'post'}).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
// 输出
export default {
  mockData (url, params) {
    return fetch(url, params)
  },
  mockDataAge (url, params) {
    return new Promise((resolve, reject) => {
      axios({url: url, params: params, method: 'get'}).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
