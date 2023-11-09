import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
      </div>

    <div className="App">
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
      <RecipeDescription />
      <RecipeIngredients />
      </div>
   </div>
   </div>

    </>
  )
}

export default App