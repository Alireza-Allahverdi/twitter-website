import React, { useEffect, useRef, useState } from 'react'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SendTweet } from '../../../api/tweet-api'

function NewTweetSlot() {

    const [tweetField, setTweetField] = useState()
    const [imageFile, setImageFile] = useState()
    const [imagePath, setImagePath] = useState()

    const uploadImg = useRef()

    const handleImg = (e) => {
        if (e.target.files) {
            setImageFile(e.target.files[0])
            let fileReader = new FileReader()
            fileReader.onload= (e) => {
                setImagePath(e.target.result)
            }
            fileReader.readAsDataURL(e.target.files[0])
        }
    }

    const PostText = () => {
        const formData = new FormData()
        formData.append("text", tweetField)
        if (imageFile) {
            formData.append("image", imageFile)
        }

        SendTweet(formData, (isOk, data) => {
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
                    }}
                />
                <div className='imageUpload'>
                    {
                        imagePath && <img src={imagePath} alt="" />
                    }
                </div>
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
                <button
                    className="imgTweetButton"
                    onClick={() => {
                        uploadImg.current.click()
                    }}
                >
                    <FontAwesomeIcon icon={faImage} className='imgTweetIcon' />
                </button>
                <input
                    type="file"
                    ref={uploadImg}
                    onChange={handleImg}
                    style={{ display: "none" }}
                />
            </div>
        </div>
    )
}

export default NewTweetSlot