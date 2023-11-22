import React from 'react'
import InputRegister from '../components/InputRegister'

const RegisterPage = () => {
    return (
        <section className="regsiter-page">
            <h2>Isi form untuk mendaftar akun.</h2>
            <InputRegister />
            <p>Sudah punya akun? <a href="/">Login di sini</a></p>
        </section>
    )
}

export default RegisterPage