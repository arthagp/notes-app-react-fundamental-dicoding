import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AddPage from '../pages/AddPage'
import DetailPage from '../pages/DetailPage'
import ArchivePage from '../pages/ArchivePage'
import Navigation from './Navigation'

const NotesApp = () => {
    return (
        <div className='app-container'>
            <header>
                <h1>Notes Apps</h1>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/notes/:id' element={<DetailPage />} />
                    <Route path='/notes/new' element={<AddPage />} />
                    <Route path='/archive' element={<ArchivePage />} />
                </Routes>
            </main>
        </div>
    )
}

export default NotesApp