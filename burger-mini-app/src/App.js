import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import BurgerContext from './Context/BurgerContext'

import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import BurgerMaker from './Pages/BurgerMaker'

function App() {
  
  const [Ingredients,setIngredients] = useState([])

  //Handler untuk menambah Ingredients
  const addIngredientsHandler = (ingredient) => {
    setIngredients(prevState => {
      const newState = [ingredient, ...prevState]
      return newState
    })
  }

  //Handler untuk mengurangi Ingredient
  const removeIngredientsHandler = (index) => {
    setIngredients(prevState => {
      const newState = [...prevState]
      newState.splice( index, 1 )
      return newState
    })
  }

  //Handler untuk menggeser Ingredient ke atas 1 tingkat
  const moveUpIngredientsHandler = (index) => {
    setIngredients(prevState => {
      const newState = [...prevState]
      const temp = newState[index-1]
      newState[index-1] = newState[index]
      newState[index] = temp
      return newState
    })
  }

  //Handler untuk menggeser Ingredients ke bawah satu tingkat
  const moveDownIngredientsHandler = (index) => {
    setIngredients(prevState => {
      const newState = [...prevState]
      const temp = newState[index+1]
      newState[index+1] = newState[index]
      newState[index] = temp
      return newState
    })
  }

  return (
    <BurgerContext.Provider value= { {Ingredients, setIngredients, addIngredientsHandler, removeIngredientsHandler, moveDownIngredientsHandler, moveUpIngredientsHandler} }>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/burger-maker" element={<BurgerMaker />} />
        </Routes>
      </Layout>
    </BurgerContext.Provider>
  );
}

export default App;
