import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"

const Home = ({dogs})=>{
    return(
        <div className="homePage">
            {dogs.map((dog,index) => <img key={index} src={dog.src} alt={dog.name} className="dog" />)}
        </div>
    )
}

export default Home