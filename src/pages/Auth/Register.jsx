import React, { useEffect, useState } from 'react'
import { validateRegexPassword } from './Regex'

function Register() {

    const REGEX_PASSWORD = "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$";

    const [state, setState] = useState({
        name: '',
        userName: '',
        password:'',
        rePassword:''
    })

    const ValidateAndAccept = () => {
        if (!state.name || !state.userName || !state.password) {
            return alert("یکی از فیلد ها خالی است")
        }
        if (!validateRegexPassword.test(state.password)) {
            return alert("الگوی رمز عبور اشتباه است")
        }
        return Logger()
    }

    const Logger = () => {
        alert('logged')
    }

    useEffect(() => {
        console.log(state);
    }, [state])

    return (
        <div className='form'>
            {/* TODO complete state management for this file */}
            <label htmlFor="fullname">
                نام کامل
            </label>
            <input
                type="text"
                onChange={e => setState({
                    ...state,
                    name: e.target.value
                })}
            />
            <label htmlFor="username">
                نام کاربری
            </label>
            <input
                type="text"
                onChange={e => setState({
                    ...state,
                    userName: e.target.value
                })}
            />
            <label htmlFor="password">
                کلمه عبور
            </label>
            <p>
                (کلمه عبور باید شامل حداقل 8 حرف، یک عدد و شامل یکی از حروف !@#$%^&* باشد)
            </p>
            <input
                type="password"
                pattern={REGEX_PASSWORD}
                onChange={e => setState({
                    ...state,
                    password: e.target.value
                })}
            />
            <label htmlFor="repeat-password">
                تکرار کلمه عبور
            </label>
            <input
                type="password"
                onChange={e => setState({
                    ...state,
                    rePassword: e.target.value
                })}
            />
            {
                state.password !== state.rePassword
                    ?
                    <span className='errHint'>
                        تکرار رمز باید یکی باشد
                    </span>
                    : ''
            }
            <button className="registerBtn" onClick={ValidateAndAccept}>
                ثبت نام
            </button>
        </div>
    )
}

export default Register