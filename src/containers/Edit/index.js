import React, {Component} from 'react'
import NewProduct from '../../components/NewProduct'
import {connect} from 'react-redux'
import {putUpdateProduct} from '../../actions/products'
import {Redirect} from 'react-router'
import _ from 'lodash'
class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {}
        }
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this)
    }

    handleUpdateProduct(e, data) {
        e.preventDefault()
        this.props.dispatch(putUpdateProduct(this.props.product._id, data, 'El producto se actualizo con exito'))
        
    }

    render() {
        if (this.props.product === undefined) {
            return <Redirect to={`/`}/>
        }
        return <NewProduct title={`Editar producto "${this.props.product.name}"`} values={this.props.product}
                           handleSubmit={this.handleUpdateProduct}/>
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