import React from "react"
import {Link} from "react-router-dom"

const Color = ({color})=>{
    return (
        <div style={{backgroundColor:color.value}}>
        <h3>Color Name:{color.name}</h3>
        <h3>Color Value:{color.value}</h3>
        <Link to="/colors">Back to colors</Link>
    </div>
    )
}

export default Color