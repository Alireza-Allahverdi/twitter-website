import React, { Fragment, useRef, useState } from 'react'
import { faImage, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SendTweet } from '../../../api/tweet-api'
import { setLoaderState, setTweetText, updateHashtagList, useTweetDispatch, useTweetState } from '../../../context/TweetContext'

function NewTweetSlot() {

    // const [tweetField, setTweetField] = useState()
    const { tweetText } = useTweetState()
    const dispatchTweet = useTweetDispatch()
    const [imageFile, setImageFile] = useState()
    const [imagePath, setImagePath] = useState()

    const uploadImg = useRef()

    const handleImg = (e) => {
        if (e.target.files) {
            setImageFile(e.target.files[0])
            let fileReader = new FileReader()
            fileReader.onload = (e) => {
                setImagePath(e.target.result)
            }
            fileReader.readAsDataURL(e.target.files[0])
        }
    }

    const PostText = () => {
        if (tweetText === "") {
            return
        }
        const formData = new FormData()
        formData.append("text", tweetText)
        if (imageFile) {
            formData.append("image", imageFile)
        }
        SendTweet(formData, (isOk, data) => {
            if (!isOk) {
                return
            }
            if (tweetText.includes("#")) {
                updateHashtagList(dispatchTweet)
            }
            window.location.reload()
            setLoaderState(dispatchTweet, false)
        })
    }

    return (
        <div className='newTweet'>
                    <Fragment>
                        <div className="tweetContainer">
                            <span>
                                {
                                    localStorage.getItem("image") &&
                                    localStorage.getItem("image")!== "undefined" ?
                                        <img src={localStorage.getItem("image")} alt="" className='tweetUserImg' />
                                        :
                                        <FontAwesomeIcon icon={faUser} className={"userIcon"}/>
                                }
                            </span>
                            <textarea
                                name="tweet"
                                id="tweetSlot"
                                placeholder='توییت کن...'
                                className='tweetUserTextArea'
                                value={tweetText}
                                onChange={(e) => {
                                    setTweetText(dispatchTweet, e.target.value)
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
                                    if (!tweetText) {
                                        return
                                    }
                                    setLoaderState(dispatchTweet,true)
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
                    </Fragment>
        </div>
    )
}

export default NewTweetSlot