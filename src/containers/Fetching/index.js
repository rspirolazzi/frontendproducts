import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Label} from 'react-bootstrap'
class Fetching extends Component {
    render() {
        if(this.props.isFetching){
            return <Label className="pull-right" bsStyle="warning">Cargando....</Label>
        }
        return null
    }
}
function mapStateToProps(state) {
    const {productsReducer}  =state
    const {isFetching} = productsReducer
    return {isFetching}
}
export default connect(mapStateToProps)(Fetching)