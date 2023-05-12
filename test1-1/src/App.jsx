import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './views/index'
import Dashboard from './Dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>child1</h1>
      <h2>router:</h2>
      <Link to="/">Go to Home</Link>
      <Link to="/dashboard">Go to Dashboard</Link>
      <Routes>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
