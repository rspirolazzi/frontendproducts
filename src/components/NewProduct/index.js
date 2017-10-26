import React from 'react'
import {Link} from "react-router-dom";
import Form from '../../containers/Form'
const NewProduct = ({title, handleSubmit, values = null})=><div>
    <h1>{title}</h1>
    <Form sendSubmit={handleSubmit} values={values}/>
</div>
export default NewProduct