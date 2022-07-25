import React, { useState } from 'react'
import { faHashtag, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LeftSide() {

    const [dropdownState, setDropdownState] = useState(false)
    const [userInfo] = useState({
        name: !!localStorage.getItem('name') ? localStorage.getItem('name') : "no name",
        userName: !!localStorage.getItem('username') ? localStorage.getItem('username') : "no username",
        image: localStorage.getItem('image')
    })

    return (
        <div className='leftSide'>
            <div
                className="userInfo"
                onClick={() => {
                    setDropdownState(!dropdownState)
                }}
            >
                {
                    userInfo.image !== "undefined" ?
                        <img src={userInfo.image} alt="" />
                        : <FontAwesomeIcon icon={faUser} />
                }
                <div className="profileText">
                    <div className='persianUserName'>
                        {userInfo.name}
                    </div>
                    <div className='userID'>
                        {userInfo.userName}
                    </div>
                </div>
            </div>
            {
                dropdownState &&
                <div
                    className="dropdownMenu"
                    onMouseLeave={() => { setDropdownState(false) }}
                >
                    {/* TODO complete progfile page */}
                    <div className="dropdownItem">
                        <p>
                            پروفایل
                        </p>
                    </div>
                    <div
                        className="dropdownItem"
                        onClick={() => {
                            localStorage.clear()
                            window.location.reload()
                        }}
                    >
                        <p>
                            خروج
                        </p>
                    </div>
                </div>

            }

            <div className="bestTwittersContainer">
                <h3 className='bestTwitterTittle'>
                    بهترین توییت کنندگان
                </h3>
                <div className="divider"></div>

                <a href="/users/khodee">
                    <button className='bestTwittersButton'>
                        <div className="twitters">
                            {/* <img className='bestTwittersImg' src="" alt="" /> */}
                            <span className='bestTwittersImg'>
                                <FontAwesomeIcon icon={faHashtag} />
                            </span>
                            <div className="twitterProfileText">
                                <div className='twitterPersianName'>
                                    علیرضا الهوردی
                                </div>
                                <div className='twitterID'>
                                    AlirezaAllahverdi20
                                </div>
                            </div>
                        </div>
                    </button>
                </a>
                <div className="twittersDivider"></div>

            </div>
        </div>
    )
}

export default LeftSide