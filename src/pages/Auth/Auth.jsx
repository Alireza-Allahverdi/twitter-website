import React from 'react'

function Auth() {
    return (
        <div className='authPageContainer'>
            <div className="tabs">
                <h2>خوش آمدید</h2>
                <ul className="tabNav">
                    <li className="loginTab">
                        ورود
                    </li>
                    <li className="registerTab">
                        ثبت نام
                    </li>
                </ul>
            </div>
            <div className="outlet"></div>
        </div>
    )
}

export default Auth