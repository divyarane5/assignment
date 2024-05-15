import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Userlist from './Component/Userlist';
import Add from './Component/Add';

function App() {
 
  return (
    <div className="container">
      <h1 className="mt-5 mb-5 text-center"><b>PHP React ( Vite.js ) Application</b></h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
