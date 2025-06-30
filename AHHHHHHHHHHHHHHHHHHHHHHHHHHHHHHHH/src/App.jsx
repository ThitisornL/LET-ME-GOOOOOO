import React from 'react'
import {NavLink,Routes,Route} from "react-router"
import Notfound from './pages/Notfound'
import Home from './pages/Home'
import Api from './pages/Api'

function App  ()  {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/api" element={<Api/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App
