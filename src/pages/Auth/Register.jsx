import React, { useState } from 'react'
import { RegisterApi } from '../../api/auth-api';
import { validateRegexPassword } from './Regex'

function Register(props) {

    const REGEX_PASSWORD = "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,20}$";

    const [state, setState] = useState({
        name: '',
        userName: '',
        password: '',
        rePassword: ''
    })
    const err = 'این فیلد نباید خالی باشد'
    const [check, setCheck] = useState(false)
    const [reqErrState, setReqErrState] = useState(false)
    const [reqErrContent, setErrContent] = useState()

    const ValidateAndAccept = (e) => {
        e.preventDefault();
        if (!state.name || !state.userName || !state.password || !state.rePassword) {
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
            [e.target.name]: e.target.value
        })
    }

    const SubmitReq = () => {
        props.loader(true)
        let userInfo = {
            name: state.name,
            username: state.userName,
            password: state.password
        }
        RegisterApi(userInfo, (isOk, data) => {
            if (!isOk) {
                props.loader(false)
                setReqErrState(true)
                setErrContent(data)
                alert(data)
                return
            }
            setReqErrState(false)
            props.loader(false)
            localStorage.setItem("name", data.name)
            localStorage.setItem("username", data.username)
            localStorage.setItem("image", data.image)
            localStorage.setItem("x-auth-token", data["x-auth-token"])
            localStorage.removeItem('tab')
            window.location.reload()
        })
    }

    return (
        <form className='form' onSubmit={(e) => {
            setCheck(true)
            ValidateAndAccept(e)
        }}>
            <p className="emptinessErr">
                {
                    reqErrState &&
                    reqErrContent
                }
            </p>
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
            <button className="registerBtn">
                ثبت نام
            </button>
        </form>
    )
}

export default Register