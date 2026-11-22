import React from 'react'
import Home from './page/Home'
import {Routes,Route} from 'react-router-dom'
import Contact from './page/Contact'
import UseReducerTopic from './UseReducerTopic'
import Usememo from './Usememo'

const App = () => {
  return (
  <>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/useReducer" element={<UseReducerTopic/>}/>
      <Route path="/usememo" element={<Usememo/>}/>
    </Routes>
  </>
  )
}

export default App