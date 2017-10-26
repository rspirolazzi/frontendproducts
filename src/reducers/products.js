import * as types from '../actions/products/types'

function items(state = initialProducts, action) {
    switch (action.type) {
        case types.FETCH:
            return action.items.map(p=>item(p, {type: action.type, item: p}))
        case types.FETCH_ITEM:
            return [...state.items, action.item]
        case types.UPDATE_ITEM:
            return [...state.items.map(p=> {
                if (p._id === action.item._id) {
                    p = action.item
                }
                return p
            })]
        case types.REMOVE_ITEM:
            return [...state.items.filter(p=> {
                if (p._id !== action.id) {
                    return p
                }
            })]
        default:
            return state
    }
}
function item(state = initialProduct, action) {
    switch (action.type) {
        case types.FETCH:
            return Object.assign({}, state, action.item)
        case types.FETCH_ITEM:
            return Object.assign({}, state, action.item)
        default:
            return state
    }
}
const initialProducts = {isFetching: false, didInvalidate: false, items: [], message:'', alertType:'success'}
const initialProduct = {name: "", price: 0, list_price: 0, brand: "", category_id: 0, virtual: false}

function reducerForProducts(state = initialProducts, action) {
    switch (action.type) {
        case types.FETCH:
            return Object.assign({}, state, {items: items(null, action)})
        case types.REMOVE_ITEM:
            return Object.assign({}, state, {items: items(state, action)})
        case types.UPDATE_ITEM:
            return Object.assign({}, state, {items: items(state, action)})
        case types.FETCH_ITEM:
            return Object.assign({}, state, {items: items(state, action)})
        case types.REQUEST:
            return Object.assign({}, state, {isFetching: true, didInvalidate: false})
        case types.REQUEST_DONE:
            return Object.assign({}, state, {isFetching: false, didInvalidate: false})
        case types.SHOW_MESSAGE:
            return Object.assign({}, state, {message: action.message, alertType: action.alertType})
        case types.POST:
        case types.RECEIVED:
        case types.ERROR:
        default:
            return state
    }
}

export default reducerForProducts