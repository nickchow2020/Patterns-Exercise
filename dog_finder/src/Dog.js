import React from "react"
import {useParams,Redirect} from "react-router-dom"
import DogDetail from "./DogDetail"
import "./Dog.css"

const Dog = ({dogs})=>{
    
    const {name} = useParams()
    const dog = dogs.filter(d => (d.name === name))

    const findDog = dog.length === 0

    return (findDog ? <Redirect to="/dogs" /> : <DogDetail dog={dog}/>  )
}

export default Dog