import React from 'react';
import ReactDOM from 'react-dom';
//import renderer from 'react-test-renderer';
import Home from './index';
import {Router, StaticRouter} from 'react-router-dom'

const products = [
    {
        "_id":"1",
        "name": "televisor 32 LED",
        "price": 19999.99,
        "list_price": 29999.99,
        "brand": "SONY",
        "category_id": 12345
    },
    {
        "_id":"2",
        "name": "televisor 50 4K",
        "price": 29999.99,
        "list_price": 39999.99,
        "brand": "LG",
        "category_id": 12345
    },
    {
        "_id":"3",
        "name": "Microsoft OFFICE 365 PERSONAL",
        "price": 999.99,
        "list_price": 999.99,
        "brand": "Microsoft",
        "category_id": 123123,
        "virtual": true
    }
]

it('listado de productos', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StaticRouter><Home products={products}/></StaticRouter>, div);
})