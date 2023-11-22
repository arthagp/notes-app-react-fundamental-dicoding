import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import { register } from '../utils/network-data';
import { useNavigate } from 'react-router-dom'

const InputRegister = () => {
    const [name, handleNameChange] = useInput('');
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');
    const [confirmPassword, handleConfirmPasswordChange] = useInput('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const navigate = useNavigate()

    const isPasswordSame = () => {
        setIsPasswordMatch(password === confirmPassword);
    };

    const handleRegister = async (event) => {
        event.preventDefault()
        try {
            const {error} =  await register({ name, email, password });
            if (!error) {
                navigate('/')
            }
        } catch (error) {
            console.log('Eror during register..', error)
        }
    };

    return (
        <div className="input-register">
            <form onSubmit={handleRegister}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    onBlur={isPasswordSame}
                />
                {!isPasswordMatch && <p className='warning-password'>Password harus sama</p>}
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};



export default InputRegister;
