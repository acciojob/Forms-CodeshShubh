import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Form from './Form'
import FormRef from './FormRef'
import FormState from './FormState'

const App = () => {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to={'/form'}>Static Form</Link></li>
            <li><Link to={'/ref'}>Form with useRef</Link></li>
            <li><Link to={'/state'}>Form with useState</Link></li>
        </ul>
    </nav>
    <Routes>
        <Route path='/form'  element={<Form/>} />
        <Route path='/ref'  element={<FormRef/>} />
        <Route path='/state'  element={<FormState/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App