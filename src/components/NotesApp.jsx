import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AddPage from '../pages/AddPage'
import DetailPage from '../pages/DetailPage'
import ArchivePage from '../pages/ArchivePage'
import Navigation from './Navigation'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import { getUserLogged, putAccessToken } from '../utils/network-data';
import ThemeContext from '../contexts/ThemeContext'
import LocaleContext from '../contexts/LocaleContext'

const NotesApp = () => {
    const initTheme = localStorage.getItem('theme') || 'light'
    const initLocale = localStorage.getItem('locale') || 'id'

    const [initialize, setInitialize] = useState(true)
    const [authedUser, setAuthedUser] = useState(null)
    const [theme, setTheme] = useState(initTheme);
    const [locale, setLocale] = useState(initLocale)

    const toggleLocale = () => {
        setLocale((prevLocale) => {
            const newLocale = prevLocale === 'id' ? 'eng' : 'id';
            localStorage.setItem('theme', newLocale);
            return newLocale
        });
    }

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme
        });
    };

    const localeContextValue = React.useMemo(() => {
        return {
            locale,
            toggleLocale
        };
    }, [locale]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        return () => {
            document.documentElement.removeAttribute('data-theme');
        };
    }, [theme]);

    const themeContextValue = React.useMemo(() => {
        return {
            theme,
            toggleTheme
        };
    }, [theme]);

    const fetchData = async () => {
        try {
            const { data } = await getUserLogged();
            setAuthedUser(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setInitialize(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const onLogout = () => {
        setAuthedUser(null);
        putAccessToken('');
    };

    const onLoginSucces = async ({ accessToken }) => {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        setAuthedUser(data)
    }

    if (initialize) {
        return null;
    }

    return (
        <ThemeContext.Provider value={themeContextValue}>
            <LocaleContext.Provider value={localeContextValue}>
                <div className="app-container">
                    <header>
                        <h1>{localeContextValue.locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</h1>
                        {authedUser && <Navigation logout={onLogout} name={authedUser.name} />}
                    </header>
                    <main>
                        {authedUser === null ? (
                            <Routes>
                                <Route path="/*" element={<LoginPage onLoginSucces={onLoginSucces} />} />
                                <Route path="/register" element={<RegisterPage />} />
                            </Routes>
                        ) : (

                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/notes/new" element={<AddPage />} />
                                <Route path="/archive" element={<ArchivePage />} />
                                <Route path="/notes/:id" element={<DetailPage />} />
                            </Routes>

                        )}
                    </main>
                </div>
            </LocaleContext.Provider>
        </ThemeContext.Provider>
    )
}

export default NotesApp;