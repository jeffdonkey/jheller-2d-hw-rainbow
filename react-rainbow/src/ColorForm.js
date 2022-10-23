//below is a form that will be used to collet user imput

import React, { useState } from 'react'

//below is a React Componet that declares a state (let [...]),
//retruns a <div> that is a form element,
//also "props" is passed-in
function ColorForm(props) {
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // removes default behavior of from submittal
        e.preventDefault()
        // addColor (from APP.js) will now be available within props
        props.addColor(input)
    }

    //form for user to add color
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm