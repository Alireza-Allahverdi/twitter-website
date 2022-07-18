import React, { useState } from 'react'

function Login() {

    const [field, setField] = useState({
        username: '',
        password: ''
    })
    const [check, setCheck] = useState(false)
    const err = "این فیلد نباید خالی باشد"

    const OnChangeHandler = (e) => {
        setField({
            ...field,
            [e.target.name]: e.target.value
        })
    }

    const ValidateAndAccept = () => {
        if (!field.username || !field.password) {
            return
        } 
        SubmitReq()
    }

    const SubmitReq = () => {
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
                name="username"
                value={field.username}
                onChange={(e) => {
                    setCheck(false)
                    OnChangeHandler(e)
                }}
            />
            <p className='emptinessErr'>
                {
                    check &&
                        !field.username
                        ? err
                        : ''
                }
            </p>
            <label htmlFor="password">
                کلمه عبور
            </label>
            <input
                className='password'
                type="password"
                name="password"
                value={field.password}
                onChange={(e) => {
                    setCheck(false)
                    OnChangeHandler(e)
                }}
            />
            <p className='emptinessErr'>
                {
                    check &&
                        !field.password
                        ? err
                        : ''
                }
            </p>
            <button className="loginBtn" onClick={() => {
                setCheck(true)
                ValidateAndAccept()
            }}>
                ورود
            </button>
        </div>
    )
}

export default Login