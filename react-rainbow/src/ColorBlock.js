import React from 'react'

//building React Componet
// props is short for "properties"
// props is passed as an arugment into function ColorBlock
// in the lines that have "props.color" the Componet wants to 
// receive a "props" with a "color" variable
function ColorBlock(props) {
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}


//export used to make this React Componet usable in other places.
export default ColorBlock