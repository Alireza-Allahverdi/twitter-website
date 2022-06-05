import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons';


function RightSide() {

    const eeeeee = [
        'پرچم_دار_جدید',
        'پرچم_دار_قدیم',
        'پرچم_دار_آینده',

    ]

    return (
        <div className='rightSide'>
            <a href="/">
                <div className="twitterTitle">
                    <span className='icon'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </span>
                    <span className='twitterFarsi'>
                        توییتر فارسی
                    </span>
                </div>
            </a>

            <h2 className='hashtagTittle'>
                داغ ترین هشتگ ها
            </h2>

            {/*this is where the mapping begin :)))*/}
            {
                eeeeee.map((item, index) => {
                    return <Fragment key={index}>
                        <a href={`/hashtags/${item}`}>
                            <button className='hashtagButton'>
                                <div className="hashtagContainer">
                                    <span className='hashtagIcon'>
                                        <FontAwesomeIcon className='hashtagSelf' icon={faHashtag} />
                                    </span>
                                    <span className='hashtagSubject'>
                                        {item}
                                    </span>
                                </div>
                            </button>
                        </a>
                    </Fragment>
                })
            }
        </div>
    )
}

export default RightSide