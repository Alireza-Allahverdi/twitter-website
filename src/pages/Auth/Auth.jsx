import React, { useEffect, useState } from 'react'
import Login from './Login'
import Register from './Register'

function Auth() {

    const [tabState, setTabState] = useState({
        log: true,
    })

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("tab"))) {
            setTabState({
                log: false,
                reg: true
            })
        }
    }, [])

    return (
        <div className='authPageContainer'>
            <div className="tabs"> {/* container of tabs and the welcome message */}
                <h2>خوش آمدید</h2>
                <h4>
                    {
                        `برای ${tabState.log ? "ورود" : "ثبت نام"} اطلاعات خود را تکمیل کنید`
                    }
                </h4>
                <ul className="tabNav">
                    <li
                        className="loginTab"
                        style={
                            {
                                backgroundColor: tabState.log ? "#3a99dd" : ""
                            }
                        }
                        onClick={() => {
                            if (tabState.log) {
                                return
                            }
                            setTabState({
                                log: true,
                                reg: false
                            })
                            localStorage.setItem('tab', JSON.stringify(false))
                        }}
                    >
                        ورود
                    </li>
                    <li className="registerTab"
                        style={
                            {
                                backgroundColor: tabState.reg ? "#3a99dd" : ""
                            }
                        }
                        onClick={() => {
                            if (tabState.reg) {
                                return
                            }
                            setTabState({
                                log: false,
                                reg: true
                            })
                            localStorage.setItem('tab', JSON.stringify(true))
                        }}
                    >
                        ثبت نام
                    </li>
                </ul>
            </div>
            <div className="outlet"> {/*each tab content */}
                {
                    tabState.log ?
                        <Login />
                        : <Register />
                }
            </div>
        </div>
    )
}

export default Auth