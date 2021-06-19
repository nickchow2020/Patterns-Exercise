import React from "react"
import {NavLink} from "react-router-dom"

const Nav = ()=>{
    return (
        <nav>
            <NavLink to="/dogs">Home</NavLink>
            <NavLink to="/dogs/Whiskey">Whiskey</NavLink>
            <NavLink to="/dogs/Duke">Duke</NavLink>
            <NavLink to="/dogs/Perry">Perry</NavLink>
            <NavLink to="/dogs/Tubby">Tubby</NavLink>
        </nav>
    )
}

export default Nav