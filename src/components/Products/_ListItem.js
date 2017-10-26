import React from 'react'
import { Link } from "react-router-dom"
import {Glyphicon} from 'react-bootstrap'
import Virtual from './Virtual'
import {formatNumber, formatDate} from '../../lib/utils'
const ListItem = ({_id, name,brand,virtual,list_price,price,updatedAt,createdAt})=><tr>
    <td>{name}</td>
    <td>{brand}</td>
    <td>{formatNumber(price)}</td>
    <td>{formatNumber(list_price)}</td>
    <td><Virtual virtual={virtual}/></td>
    <td>{formatDate(updatedAt)}</td>
    <td>{formatDate(createdAt)}</td>
    <td>
        <Link to={`/edit/${_id}`} className=""><Glyphicon glyph="pencil"/></Link>
        <Link to={`/remove/${_id}`} className=" text-danger"><Glyphicon glyph="remove-circle"/></Link>
    </td>
</tr>
export default ListItem