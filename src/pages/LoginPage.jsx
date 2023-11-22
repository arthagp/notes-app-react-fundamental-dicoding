import React from 'react'
import InputLogin from '../components/InputLogin'
import { Link } from 'react-router-dom'

const LoginPage = ({ onLoginSucces }) => {

    return (
        <section className='login-page'>
            <h2>Yuk, login untuk menggunakan aplikasi.</h2>
            <InputLogin loginSucces={onLoginSucces} />
            <p>Belum punya akun? <Link to="/register">Daftar di sini</Link></p>
        </section>
    )
}

export default LoginPage