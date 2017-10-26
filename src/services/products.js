import fetch from 'isomorphic-fetch'
import axios from 'axios'
import qs from 'qs'
class ProducService {

    constructor(url) {
        this.url = url
    }

    _get(url, params) {
        return axios.get(url, {
            method: 'GET',
            params: {...params},
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if(response.status === 200){
            }
            return response.data
        }).catch(err=>{
            console.log('Error en GET axios', err)
        })
    }

    _post(url, params) {

        return axios.post(url, params, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            /*

             if (response.status >= 400) {
             throw new Error('API Server Error')
             }
             if (response.status === 204) {
             return {
             status: 'options'
             }
             }
             */

            if(response.status === 200){
            }
            return response.data
        }).catch(err=>{
            console.log('Error en POST axios', err)
        })
    }
    _put(url, params) {

        return axios.put(url, params, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            /*

             if (response.status >= 400) {
             throw new Error('API Server Error')
             }
             if (response.status === 204) {
             return {
             status: 'options'
             }
             }
             */

            if(response.status === 200){
            }
            return response.data
        }).catch(err=>{
            console.log('Error en POST axios', err)
        })
    }
    _del(url) {

        return axios.delete(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            /*

             if (response.status >= 400) {
             throw new Error('API Server Error')
             }
             if (response.status === 204) {
             return {
             status: 'options'
             }
             }
             */

            if(response.status === 200){
            }
            return response.data
        }).catch(err=>{
            console.log('Error en POST axios', err)
        })
    }

    __get(url) {
        fetch(url)
    }

    __post(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    getAll() {
        return this._get(`${this.url}/products`)
    }

    post(data) {
        return this._post(`${this.url}/products`, data)
    }
    put(id, data) {
        return this._put(`${this.url}/products/${id}`, data)
    }
    del(id) {
        return this._del(`${this.url}/products/${id}`)
    }
}
export default new ProducService('http://localhost:4000')