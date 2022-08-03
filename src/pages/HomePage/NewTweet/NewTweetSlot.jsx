import React, { Fragment, useRef, useState } from 'react'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SendTweet } from '../../../api/tweet-api'
import { setTweetText, updateHashtagList, useTweetDispatch, useTweetState } from '../../../context/TweetContext'

function NewTweetSlot() {

    // const [tweetField, setTweetField] = useState()
    const { tweetText } = useTweetState()
    const dispatchTweet = useTweetDispatch()
    const [imageFile, setImageFile] = useState()
    const [imagePath, setImagePath] = useState()
    const [loader, setLoader] = useState()

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
                return alert(data)
            }
            if (tweetText.includes("#")) {
                updateHashtagList(dispatchTweet)
            }
            setLoader(false)
            window.location.reload()
        })
    }

    return (
        <div className='newTweet'>
            {
                loader ?
                    <div className="spinner-container">
                        <div className="spinner"></div>
                    </div>
                    :
                    <Fragment>
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
                                    setLoader(true)
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
            }
        </div>
    )
}

export default NewTweetSlot