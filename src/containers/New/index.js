import React, {Component} from 'react'
import NewProduct from '../../components/NewProduct'
import {connect} from 'react-redux'
import {postNewProduct} from '../../actions/products'
class New extends Component {
    constructor(props){
        super(props)
        this.state={
            form:{}
        }
        this.handleNewProduct = this.handleNewProduct.bind(this)
    }
    handleNewProduct(e, data){
        e.preventDefault()
        this.props.dispatch(postNewProduct(data, 'El producto se creo con exito'))
    }

    render() {
        return <NewProduct form={this.state.form} title="Crear un nuevo Producto" handleSubmit={this.handleNewProduct}/>
    }
}
function mapStateToProps(state) {
    return {}
}
export default connect(mapStateToProps)(New)