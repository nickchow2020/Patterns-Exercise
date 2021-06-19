import React from "react"
import { useParams,Redirect} from "react-router-dom"
import Color from "./Color"

const ColorDetail = ({colors})=>{

    const {name} = useParams()

    const targetColor = colors.filter(color => (color.name === name))
    const color = targetColor[0]

    const isFound = targetColor.length !== 0

    return (isFound ? <Color color={color} /> : <Redirect to="/colors"/>)
}

export default ColorDetail