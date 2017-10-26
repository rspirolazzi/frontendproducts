import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Alert} from 'react-bootstrap'
import {hideMessage} from '../../actions/products'
class CustomAlert extends Component {
    constructor(props) {
        super(props)
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
    }

    handleAlertDismiss() {
        this.props.dispatch(hideMessage())
    }

    render() {
        if (this.props.message) {
            return <Alert bsStyle={this.props.alertType} onDismiss={this.handleAlertDismiss}>
                <p>{this.props.message}</p>
            </Alert>
        }
        return null
    }
}
function mapStateToProps(state) {
    const {productsReducer}  =state
    const {message, alertType} = productsReducer
    return {message, alertType}
}
export default connect(mapStateToProps)(CustomAlert)