import React, { useEffect, useState } from 'react'
import { validateRegexPassword } from './Regex'

function Login() {

    const [field, setField] = useState({
        username: '',
        password: ''
    })

    const ValidateAndAccept = () => {
        if (!field.username && !field.password) return alert('fileds empty')
        return Loginer()
    }

    const Loginer = () => {
        alert('all set')
    }

    return (
        <div className="form">
            {/* TODO complete state management for this file */}
            <label htmlFor="username">
                نام کاربری
            </label>
            <input
                type="text"
                onChange={(e) => {
                    setField({
                        ...field,
                        username: e.target.value
                    })
                }}
            />
            <label htmlFor="password">
                کلمه عبور
            </label>
            <input
                type="password"
                onChange={(e) => {
                    setField({
                        ...field,
                        password: e.target.value
                    })
                }}
            />
            <button className="loginBtn" onClick={ValidateAndAccept}>
                ورود
            </button>
        </div>
    )
}

export default Login