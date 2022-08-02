import React, { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { GetHashtags } from '../../../api/hashtag-api';
import { setHahstagList, useTweetDispatch, useTweetState } from '../../../context/TweetContext';


function RightSide() {

    const { hashtagList } = useTweetState()
    const dispatchHashtag = useTweetDispatch()

    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        GetHashtags((isOk, data) => {
            if (!isOk) {
                return
            }
            setHahstagList(dispatchHashtag, data)
            setLoader(false)
        })
    }, [])

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
            <div className="hashtagsContainer">
                {
                    loader ?
                        <div className="spinner-container">
                            <div className="spinner"></div>
                        </div>
                        :
                        hashtagList.map((item, index) => {
                            return <Fragment key={index}>
                                <a href={`/hashtags/${item.text}`}>
                                    <button className='hashtagButton'>
                                        <div className="hashtagContainer">
                                            <span className='hashtagIcon'>
                                                <FontAwesomeIcon className='hashtagSelf' icon={faHashtag} />
                                            </span>
                                            <span className='hashtagSubject'>
                                                {item.text}
                                            </span>
                                        </div>
                                    </button>
                                </a>
                            </Fragment>
                        })
                }
            </div>
        </div>
    )
}

export default RightSide