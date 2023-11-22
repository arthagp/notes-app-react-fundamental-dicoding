import React from 'react'
import useInput from '../hooks/useInput'
import { login } from '../utils/network-data'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'


const InputLogin = ({ loginSucces }) => {
    const [email, handleEmailChange] = useInput('')
    const [password, handlePasswordChange] = useInput('')
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const { error, data } = await login({ email, password })
            if (!error) {
                loginSucces(data)
                navigate('/')
            }
        } catch (error) {
            console.log('Error during login', error)
        }
    }

    return (
        <div className='input-login'>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                <button type="submit">Login</button>
            </form>
        </div>

    )
}

InputLogin.propTypes = {
    loginSucces: PropTypes.func.isRequired,
}


export default InputLogin