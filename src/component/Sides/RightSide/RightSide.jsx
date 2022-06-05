import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons';


function RightSide() {

    return (
        <div className='rightSide'>

            <div className="twitterTitle">
                <span className='icon'>
                    <FontAwesomeIcon icon={faTwitter} />
                </span>
                <span className='twitterFarsi'>
                    توییتر فارسی
                </span>
            </div>

            <h2 className='hashtagTittle'>
                داغ ترین هشتگ ها
            </h2>

            {/*thsi is where the mapping begin :)))*/}
            <a href="#">
                <button className='hashtagButton'>
                    <div className="hashtagContainer">
                        <span className='hashtagIcon'>
                            <FontAwesomeIcon className='hashtagSelf' icon={faHashtag} />
                        </span>
                        <span className='hashtagSubject'>
                            پرچم_دار_جدید
                        </span>
                    </div>
                </button>

            </a>
        </div>
    )
}

export default RightSide