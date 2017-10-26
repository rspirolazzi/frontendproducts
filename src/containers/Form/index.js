import React, {Component} from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import Button from 'react-validation/build/button'
import {Link} from "react-router-dom"
import * as customRules from '../../lib/validators'


class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            list_price: '',
            brand: '',
            category_id: '',
            virtual: false,
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleOnChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit(e) {
        e.preventDefault()
        if (true) {
            const {name,price,list_price,brand,category_id, virtual} = this.state
            this.props.sendSubmit(e, {name,price,list_price,brand,category_id, virtual})
        }
    }
    componentWillMount(){
        if(this.props.values !== null){
            this.setState({...this.props.values})
        }
    }

    render() {
        return <Form ref={c => { this.form = c }} onSubmit={this.handleSubmit}>
            <div className="form-group">
                <div className="control-label">
                    <label htmlFor="name">Nombre</label>
                    <Input placeholder="Nombre" type="text" value={this.state.name} onChange={this.handleOnChange}
                           className="form-control" name="name" validations={[customRules.required]}/>
                </div>
            </div>
            <div className="form-group">
                <div className="control-label">
                    <label htmlFor="brand">Marca</label>
                    <Input placeholder="Marca" type="text" value={this.state.brand} onChange={this.handleOnChange}
                           className="form-control" name="brand" validations={[]}/>
                </div>
            </div>
            <div className="form-group">
                <div className="control-label">
                    <label htmlFor="category_id">Categoria (ID)</label>
                    <Input placeholder="Categoria" type="text" value={this.state.category_id}
                           onChange={this.handleOnChange} className="form-control" name="category_id" validations={[]}/>
                </div>
            </div>
            <div className="form-group">
                <div className="control-label">
                    <label htmlFor="price">Precio</label>
                    <Input placeholder="Precio" type="text" value={this.state.price} onChange={this.handleOnChange}
                           className="form-control" name="price" validations={[customRules.number]}/>
                </div>
            </div>
            <div className="form-group">
                <div className="control-label">
                    <label htmlFor="list_price">Precio de lista</label>
                    <Input placeholder="Precio de lista" type="text" value={this.state.list_price}
                           onChange={this.handleOnChange} className="form-control" name="list_price" validations={[customRules.number]}/>
                </div>
            </div>
            <div className="form-group">
                <div className="control-label">
                    <label htmlFor="virtual">Es virtual?</label>
                    <Input type="checkbox" checked={this.state.virtual} value="1" onChange={this.handleOnChange} name="virtual" validations={[]}/>
                </div>
            </div>
            <Button className="btn btn-success">Guardar</Button>
            <Link to={`/`} className="btn btn-primary">Volver</Link>
        </Form>
    }
}
export default ProductForm