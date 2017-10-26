import productService from '../../services/products'
import * as types from './types'

function requestProducts() {
    return {
        type: types.REQUEST
    }
}
export function showMessage(message, alertType='success') {
    return {
        type: types.SHOW_MESSAGE,
        message,
        alertType
    }
}
export function hideMessage(type='success') {
    return showMessage('', type)
}
function requestDone() {
    return {
        type: types.REQUEST_DONE
    }
}
function fetchItems(items) {
    return {
        type: types.FETCH,
        items,
        receivedAt: Date.now()
    }
}
function fetchItem(item) {
    return {
        type: types.FETCH_ITEM,
        item,
        receivedAt: Date.now()
    }
}
function updateItem(item) {
    return {
        type: types.UPDATE_ITEM,
        item,
        receivedAt: Date.now()
    }
}
function removeItem(id) {
    return {
        type: types.REMOVE_ITEM,
        id,
        receivedAt: Date.now()
    }
}
export function fetchProducts() {
    return (dispatch, getState) => {
        try {
            dispatch(requestProducts())
            return productService.getAll()
                .then(json => dispatch(fetchItems(json)))
                .then(json => dispatch(requestDone()))
        } catch (e) {
            console.log('fetchProducts:Error', e)
        }
    }
}
export function postNewProduct(product, message='') {
    return (dispatch, getState) => {
        try {
            dispatch(requestProducts())
            return productService.post(product)
                .then(json => dispatch(fetchItem(json||[])))
                .then(json => dispatch(requestDone()))
                .then(json => dispatch(showMessage(message)))
        } catch (e) {
            console.log('fetchProducts:Error', e)
        }
    }
}
export function putUpdateProduct(id, product, message='') {
    return (dispatch, getState) => {
        try {
            dispatch(requestProducts())
            return productService.put(id, product)
                .then(json => dispatch(updateItem(json||{})))
                .then(json => dispatch(requestDone()))
                .then(json => dispatch(showMessage(message)))
        } catch (e) {
            console.log('fetchProducts:Error', e)
        }
    }
}
export function delDeleteProduct(id, message='') {
    return (dispatch, getState) => {
        try {
            dispatch(requestProducts())
            return productService.del(id)
                .then(json => dispatch(removeItem(id)))
                .then(json => dispatch(requestDone()))
                .then(json => dispatch(showMessage(message)))
        } catch (e) {
            console.log('fetchProducts:Error', e)
        }
    }
}
