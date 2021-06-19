import React from "react"

const DogDetail = ({dog})=>{
    return (
        <div className="DogDetail">
        <h1>{dog[0].name}</h1>
        <h3>Age:{dog[0].age}</h3>
        <img src={dog[0].src} alt={dog[0].name} className="singleImage"/>
        <h3>Facts:</h3>
        <ul>
            {
                dog[0].facts.map((fact,index) => <li key={index}>{fact}</li>)
            }
        </ul>
    </div>
    )
}

export default DogDetail;