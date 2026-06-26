import React from 'react'
import Home from './page/Home'
import {Routes,Route} from 'react-router-dom'
import Contact from './page/Contact'

const App = () => {
  return (
  <>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </>
  )
}

export default App