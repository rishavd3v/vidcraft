import { useState } from 'react'
import './App.css'
import LandingPage from './pages/landing/landing'
import Main from './pages/main/main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/main" element={<Main/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
