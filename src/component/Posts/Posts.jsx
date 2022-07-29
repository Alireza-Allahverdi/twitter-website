import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faImage, faRetweet } from '@fortawesome/free-solid-svg-icons'

function Posts(props) {

    /* TODO the href will be replaced by $& */
    // will find the hashtags and make the to a link and tweeter colored
    const CheckForHashTag = (text) => {
        return text.replace(/#\S+/g, // for more information about regex js visit w3school
            `<a 
        href='/hashtags/$&'>
        $&
        </a>`)
        // the $& will return innerhtml of whatever was found by the regex => for .exp if #hello is found, it will return #hello
    }

    return (
        <div className='post'>        {/* container of all posts  */}
            <div className="posterProfile"> {/* post tweeters name, id,img */}
                <span className='temporarily'> {/* a temporairly used icon instead of img */}
                    {
                        props.tweetInfo.user.image ?
                            <img className='posterImg' src={props.tweetInfo.user.image} alt="" />
                            : <FontAwesomeIcon icon={faImage} />

                    }
                </span>
                <span className="posterPersianName">
                    {props.tweetInfo.user.name}
                </span>
                <span className="posterID">
                    {props.tweetInfo.user.username}
                </span>
            </div>
            <div className="postText"> {/* post text container */}
                {/* post text that will be checked of all the hashtags init */}
                <span dangerouslySetInnerHTML={{ __html: CheckForHashTag(props.tweetInfo.text) }}>
                </span>
            </div>
            <div className="postStuffContainer"> {/* post retweet and like btn container */}
                <button className='reTweetButton'> {/* tweet retweet btn */}
                    <FontAwesomeIcon icon={faRetweet} className='reTweetIcon' />
                </button>
                <button className="likeButton"> {/* tweet like btn */}
                    <FontAwesomeIcon icon={faHeart} className='likeIcon' />
                </button>
                <span className="likeNumber">{props.tweetInfo.likes}</span> {/* tweet like counter */}
            </div>
        </div>
    )
}

export default Posts