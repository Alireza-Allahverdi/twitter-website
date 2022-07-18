import React, { useState } from 'react'
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faWindowRestore } from '@fortawesome/free-regular-svg-icons';


function LeftSide() {

    const [dropdownState, setDropdownState] = useState(false)

    return (
        <div className='leftSide'>
            <div
                className="userInfo"
                onClick={() => {
                    setDropdownState(!dropdownState)
                }}
            >
                {/* <img className='userImg' src="" alt="" /> */}
                <span>
                    <FontAwesomeIcon icon={faHashtag} />
                </span>
                <div className="profileText">
                    <div className='persianUserName'>
                        علیرضا الهوردی
                    </div>
                    <div className='userID'>
                        AlirezaAllahverdi20
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