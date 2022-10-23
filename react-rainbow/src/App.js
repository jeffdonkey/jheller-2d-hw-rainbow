import './App.css';
// 'useState' is a function in React.
// 'useState' is similar to a cookie. It is used
// to retain data.
import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App() {
  // list(array) of colors
  // below "colors" array was refactored to be a State value
  // in the [] after let "colors" is name of the state variable
  // "setColors" is the paired function used for manipulating the variable
  // "useState" is the inital value
  let [colors, setColors] = useState([
    'violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red'
  ])

  // colors.map iterates over the "colors" array above
  // in the return statement ths individual colors of the
  // array are sent to ColorBlock.js.  Now that ColorBlock has
  // data ColorBlock sends back it's <div> elements into
  // colorMap.
  // "key={i}" creates a key value for each entry of color from the array
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    )
  })

  //function below thakes a new color as an argument,
  //it also sets the value of "colors", our State array, to a new array
  //that contains all previous elements of the old array
  //with the new color concatenated at the end
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    // below the colorMap is sent to browser for display
    // the ColorForm is also sent
    //ColorForm also has addColor.  This should add user
    //selected colors from the form to render.
    <div className="App">
      {colorMap}
      < ColorForm addColor={addColor}/>
    </div>
  )
}

export default App;
