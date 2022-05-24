import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NewTweetSlot() {
    return (
        <div className='newTweet'>
            <div className="tweetContainer">
                {/* <img src="" alt="" className='tweetUserImg' /> */}
                <span>
                    <FontAwesomeIcon icon={faImage} />
                </span>
                <textarea name="tweetPlease" id="" placeholder='توییت کن...' className='tweetUserTextArea' />
            </div>
            <div className="tweetButtonsContainer">
                <button className='TweetButton'>
                    توییت
                </button>
                <button className="imgTweetButton">
                    <FontAwesomeIcon icon={faImage} className='imgTweetIcon'/>
                </button>
            </div>
        </div>
    )
}

export default NewTweetSlot