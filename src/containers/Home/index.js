import React, {Component} from 'react'
import Products from '../../components/Products'
import {connect} from 'react-redux'
import {fetchProducts} from '../../actions/products'
class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount(){
        if(this.props.products.length==0){
            this.props.dispatch(fetchProducts())
        }
    }

    render() {
        const products = this.props.products || []
        return <Products products={products} title="Listado de Productos"/>
    }
}
function mapStateToProps(state) {
    const {productsReducer} = state
    const {isFetching, lastUpdated, items} = productsReducer || {isFetching: true, items: []}

    return {
        isFetching,
        lastUpdated,
        products: items
    }
}
export default connect(mapStateToProps)(Home)