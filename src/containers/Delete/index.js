import React, {Component} from 'react'
import {connect} from 'react-redux'
import {delDeleteProduct} from '../../actions/products'
import {Redirect} from 'react-router'
import {Link} from "react-router-dom";
import _ from 'lodash'
class Edit extends Component {
    constructor(props) {
        super(props)
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this)
    }

    handleDeleteProduct(e) {
        e.preventDefault()
        this.props.dispatch(delDeleteProduct(this.props.product._id, 'El producto se elimino con exito'))
    }

    render() {
        if (this.props.product === undefined) {
            return <Redirect to={`/`}/>
        }
        const {product} = this.props
        return <div className="well">
            <h1>Eliminar producto "{product.name}"</h1>
            <h3>Esta a punto de eliminar el producto "{product.name}". Esta acción no puede deshacerse</h3>
            <h4>¿Desea continuar?</h4>
            <div className="btn-group">
                <Link to={`/`} className="btn btn-primary">Volver</Link>
                <a class="btn btn-danger" onClick={this.handleDeleteProduct}>Confirmar</a>
            </div>
        </div>
    }
}
function mapStateToProps(state, props) {
    const {productsReducer} = state
    const product = _.find(productsReducer.items, (e)=>e._id === props.match.params.id)
    return {
        product
    }
}
export default connect(mapStateToProps)(Edit)