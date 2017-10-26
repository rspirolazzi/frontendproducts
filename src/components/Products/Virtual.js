import React from 'react'
import {Glyphicon} from 'react-bootstrap'

const Virtual =(virtual)=>{
    let glyph = 'ok-circle'
    if(!virtual){
        glyph = 'remove-circle'
    }

    return <Glyphicon glyph={glyph} />
}

export default Virtual