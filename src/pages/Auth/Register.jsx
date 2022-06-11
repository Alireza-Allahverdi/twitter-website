import React from 'react'

function Register() {
    return (
        <div className='form'>
            {/* TODO complete state management for this file */}
            <label htmlFor="fullname">
                نام کامل
            </label>
            <input
                type="text"
            />
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
            <label htmlFor="repeat-password">
                تکرار کلمه عبور
            </label>
            <input
                type="password"
            />
            <button className="registerBtn">
                ثبت نام
            </button>
        </div>
    )
}

export default Register