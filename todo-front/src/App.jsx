import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowseRouter as Router, Route, Routes} from "react-router-dom"
import ListTodoComponent from './components/ListTodoComponent'

function App() {

  return (
    <Router>

    <HeaderComponent />
    <div className='container'>
      <Routes>
        <Route path='/' element = {<ListTodoComponent />} />
      </Routes>
    </div>
    <FooterComponent />

    </Router>
  )
}

export default App
