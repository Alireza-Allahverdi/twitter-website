import React, { useState } from 'react'
import { validateRegexPassword } from './Regex'

function Register() {

    const REGEX_PASSWORD = "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,20}$";

    const [state, setState] = useState({
        name: '',
        userName: '',
        password: '',
        rePassword: ''
    })
    const err = 'این فیلد نباید خالی باشد'
    const [check, setCheck] = useState(false)

    const ValidateAndAccept = () => {
        if (!state.name || !state.userName || !state.password) {
            return 
        }
        if (!validateRegexPassword.test(state.password)) {
            return 
        }
        SubmitReq()
    }

    const OnChangeHandler = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const SubmitReq = () => {

    }

    return (
        <div className='form'>
            {/* TODO complete state management for this file */}
            <label htmlFor="fullname">
                نام کامل
            </label>
            <input
                type="text"
                name="name"
                value={state.name}
                onChange={(e) => {
                    setCheck(false)
                    OnChangeHandler(e)
                }}
            />
            <p className='emptinessErr'>
                {
                    check &&
                        !state.name
                        ? err
                        : ''
                }
            </p>
            <label htmlFor="username">
                نام کاربری
            </label>
            <input
                type="text"
                name="userName"
                onChange={(e) => {
                    setCheck(false)
                    OnChangeHandler(e)
                }}
            />
            <p className='emptinessErr'>
                {
                    check &&
                        !state.userName
                        ? err
                        : ''
                }
            </p>
            <label htmlFor="password">
                کلمه عبور
            </label>
            <p>
                (کلمه عبور باید شامل حداقل 8 حرف و حداکثر 20، یک عدد و شامل یکی از نماد های !@#$%^&* باشد)
            </p>
            <input
                className='password'
                type="password"
                name="password"
                value={state.password}
                pattern={REGEX_PASSWORD}
                onChange={(e) => {
                    setCheck(false)
                    OnChangeHandler(e)
                }}
            />
            <p className='emptinessErr'>
                {
                    check &&
                        !state.password
                        ? err
                        : ''
                }
            </p>
            <label htmlFor="repeat-password">
                تکرار کلمه عبور
            </label>
            <input
                className='password'
                type="password"
                name="rePassword"
                onChange={(e) => {
                    setCheck(false)
                    OnChangeHandler(e)
                }}
            />
            {
                check &&
                    state.password !== state.rePassword
                    ?
                    <span className='errHint'>
                        تکرار رمز باید یکی باشد
                    </span>
                    : ''
            }
            <button className="registerBtn" onClick={() => {
                setCheck(true)
                ValidateAndAccept()
            }}>
                ثبت نام
            </button>
        </div>
    )
}

export default Register