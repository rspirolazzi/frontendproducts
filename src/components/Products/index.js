import React from 'react'
import {Link} from "react-router-dom";
import List from './List'
const Products = ({products, title})=><div>
    <h1>{title}</h1>
    <List products={products}/>
    <Link to={`/new`} className="btn btn-primary">Nuevo</Link>
</div>
export default Products