import React from 'react'

function Login() {
    return (
        <div className="login">
            {/* TODO complete state management for this file */}
            <div className="userNameInp">
                <label htmlFor="username">
                    نام کاربری
                </label>
                <input
                    type="text"
                />
            </div>
            <div className="passwordInp">
                <label htmlFor="password">
                    کلمه عبور
                </label>
                <input
                    type="password"
                />
            </div>
        </div>
    )
}

export default Login