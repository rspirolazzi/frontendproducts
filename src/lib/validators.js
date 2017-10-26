import React from 'react'
import validator from 'validator'
export const required = (value, props) => {
    if (!value.toString().trim().length) {
        // We can return string or jsx as the 'error' prop for the validated Component
        return <span className="error text-danger">Este campo es requerido</span>
    }
}

export const number = (value, props) => {
    if (value.toString().trim().length > 0 && !validator.isNumeric(value.toString())) {
        return <span className="error text-danger">Este campo debe ser numerico</span>
    }
}
