import React from "react"
import {Link} from "react-router-dom"

const Image = ()=>{
    return (
        <Link to="dogs/{name}">
            <img key={index} src={dog.src} alt={dog.name} className="dog" />
        </Link>
    )
}