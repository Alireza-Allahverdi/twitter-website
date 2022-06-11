import React from 'react'

function Login() {
    return (
        <div className="form">
            {/* TODO complete state management for this file */}
                <label htmlFor="username">
                    نام کاربری
                </label>
                <input
                    type="text"
                />
                <label htmlFor="password">
                    کلمه عبور
                </label>
                <input
                    type="password"
                />
            <button className="loginBtn">
                ورود
            </button>
        </div>
    )
}

export default Login