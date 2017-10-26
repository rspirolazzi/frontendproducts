import React from 'react'
import ListItem from './ListItem'
const List = ({products})=><table className="table table-striped">
    <thead>
    <tr>
        <th>Nombre</th>
        <th>Marca</th>
        <th>Categoria</th>
        <th>Precio</th>
        <th>Precio de lista</th>
        <th>Es virtual?</th>
        <th>Modificado</th>
        <th>Creado</th>
        <th></th>
    </tr>
    </thead>
    <tbody>
    {products.length == 0 ? <tr><td colspan="100%" className="info">No hay productos cargados. Haga click en "Nuevo" para agregar productos.</td></tr> :
        products.map(product=><ListItem key={product._id} {...product}/>)
    }
    </tbody>
</table>
export default List