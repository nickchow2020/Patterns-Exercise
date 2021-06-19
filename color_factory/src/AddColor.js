import React,{useState}from "react"
import {useHistory} from "react-router-dom"
import "./AddColor.css"
const AddColor = ({AddFormColor})=>{

    const INITIAL_VALUE = {
        name:"",
        value:""
    }

    const [color,setColor] = useState(INITIAL_VALUE)


    const handleChange = (e)=>{
        setColor(color =>({
            ...color,
            [e.target.name]:e.target.value
        }))
    }

    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        AddFormColor(color)
        history.push('/colors')
    }

    

    return (
        <form className="colorForm" onSubmit={handleSubmit}>
            <label>
                Color Name:
                <input placeholder="add color name" value={color.name} name="name" onChange={handleChange}/>
            </label>

            <label>
                Color Value:
                <input type="color" value={color.value} name="value" onChange={handleChange}/>
            </label>

            <button>Add Color</button>
        </form>
    )
}

export default AddColor;