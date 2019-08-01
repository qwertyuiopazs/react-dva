import Axios from 'axios'
import {serverHost, port} from '../config'
let r = Axios.create({
    baseURL: `${serverHost}:${port}`
})

let request = function(url="", options={}) {
    if(url==='') return Promise.reject('url爲空')
    return r({
        url,
        method: 'get',
        ...options
    })
}

export default request