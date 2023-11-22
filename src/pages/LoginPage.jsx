import React from 'react'
import InputLogin from '../components/InputLogin'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const LoginPage = ({ onLoginSucces }) => {

    return (
        <section className='login-page'>
            <h2>Yuk, login untuk menggunakan aplikasi.</h2>
            <InputLogin loginSucces={onLoginSucces} />
            <p>Belum punya akun? <Link to="/register">Daftar di sini</Link></p>
        </section>
    )
}

LoginPage.propTypes = {
    onLoginSucces: PropTypes.func.isRequired
}

export default LoginPage