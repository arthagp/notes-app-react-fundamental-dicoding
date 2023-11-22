import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { FaArchive, FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';
import PropTypes from 'prop-types'

const Navigation = ({ logout, name }) => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    const { locale, toggleLocale } = React.useContext(LocaleContext)

    return (
        <nav className='navigation'>
            <ul>
                <li><button onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</button></li>
                <li>
                    <button onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button>
                </li>
                <li><Link to={"/"}><FiHome /></Link></li>
                <li><Link to={"/notes/new"}><FiPlusCircle /></Link></li>
                <li><Link to={"/archive"}><FaArchive /></Link></li>
                <li><button onClick={logout}>{name} <FiLogOut /></button></li>
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default Navigation