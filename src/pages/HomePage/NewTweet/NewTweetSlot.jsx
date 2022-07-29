import React, { useEffect, useState } from 'react'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SendTweet } from '../../../api/tweet-api'

function NewTweetSlot() {

    const [tweetField, setTweetField] = useState()

    const PostText = () => {
        const data = {
            text: tweetField
        }

        SendTweet(data, (isOk, data) => {
            if (!isOk) {
                return alert(data)
            }
            window.location.reload()
        })
    }

    return (
        <div className='newTweet'>
            <div className="tweetContainer">
                <span>
                    {
                        localStorage.getItem("image") ?
                            <img src={localStorage.getItem("image")} alt="" className='tweetUserImg' />
                            :
                            <FontAwesomeIcon icon={faImage} />
                    }
                </span>
                <textarea
                    name="tweet"
                    id="tweetSlot"
                    placeholder='توییت کن...'
                    className='tweetUserTextArea'
                    onChange={(e) => {
                        setTweetField(e.target.value)
                    }} />
            </div>
            <div className="tweetButtonsContainer">
                <button 
                className='TweetButton'
                onClick={() => {
                    PostText()
                }}
                >
                    توییت
                </button>
                <button className="imgTweetButton">
                    <FontAwesomeIcon icon={faImage} className='imgTweetIcon' />
                </button>
            </div>
        </div>
    )
}

export default NewTweetSlot