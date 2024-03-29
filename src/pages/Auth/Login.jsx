import React, { useState } from 'react'
import { LoginApi } from '../../api/auth-api'

function Login(props) {

    const [field, setField] = useState({
        username: '',
        password: ''
    })
    const [check, setCheck] = useState(false)
    const err = "این فیلد نباید خالی باشد"
    const [reqErrState, setReqErrState] = useState(false)
    const [reqErrContent, setErrContent] = useState()

    const OnChangeHandler = (e) => {
        setField({
            ...field,
            [e.target.name]: e.target.value
        })
    }

    const ValidateAndAccept = (e) => {
        e.preventDefault()
        if (!field.username || !field.password) {
            return
        }
        SubmitReq()
    }

    const SubmitReq = () => {
        props.loader(true)
        let user = {
            username: field.username,
            password: field.password
        }
        LoginApi(user, (isOk, data) => {
            if (!isOk) {
                props.loader(false)
                setReqErrState(true)
                setErrContent(data)
                alert(data)
                return
            } 
            props.loader(false)
            setReqErrState(false)
            localStorage.setItem("name", data.name)
            localStorage.setItem("image", data.image)
            localStorage.setItem("username", data.username)
            localStorage.setItem("x-auth-token", data["x-auth-token"])
            localStorage.removeItem('tab')
            window.location.reload()
        })
    }

    return (
        <form className="form" onSubmit={(e) => {
            setCheck(true)
            ValidateAndAccept(e)
        }}>
            <p className='emptinessErr'>
                {
                    reqErrState &&
                    reqErrContent
                }
            </p>
            <label htmlFor="username">
                نام کاربری
            </label>
            <input
                type="text"
                name="username"
                value={field.username}
                onChange={(e) => {
                    setReqErrState(false)
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
                    setReqErrState(false)
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
            <button className="loginBtn">
                ورود
            </button>
        </form>
    )
}

export default Login