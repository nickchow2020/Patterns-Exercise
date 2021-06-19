import React from "react"
import {Link} from "react-router-dom"
const ColorList = ({colors})=>{
    return (
        <ul>
            {colors.map((color,index) => <Link key={index} to={`/colors/${color.name}`}><li>{color.name}</li></Link>)}
        </ul>
    )
}

export default ColorList