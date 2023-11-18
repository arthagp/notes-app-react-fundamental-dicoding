import React from 'react'
import ReactDOM from 'react-dom/client'
import NotesApp from './components/NotesApp'
import { BrowserRouter } from 'react-router-dom'

import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NotesApp />
  </BrowserRouter>
)
