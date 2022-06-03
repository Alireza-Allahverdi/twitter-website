import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faImage, faRetweet } from '@fortawesome/free-solid-svg-icons'

function Posts() {

    const text = [
        "آموزش دانشجويان خلباني نظامي در سه مرحله مقدماتي، پايه و پيشرفته انجام مي شود و پس از آن وارد مراحل بعدي يعني ورود به جنگنده، جنگنده پيشرفته و اسکادران آموزشي مي گردند. در کشورمان به دليل عدم وجود هواپيماي جت آموزشي پيشرفته، دانشجو پس از طي دوره #پايه بلافاصله وارد #مرحله_چهارم (ورود به جنگنده) مي شود."
    ]

    /* TODO the href will be replaced by $& */ 
    // will find the hashtags and make the to a link and tweeter colored
    const CheckForHashTag = (text) => {
        return text[0].replace(/#\S+/g, // for more information about regex js visit w3school
            `<a 
        href='../../pages/TweetsByHashTag/TweetByHashTag'>
        $&
        </a>`)
        // the $& will return innerhtml of whatever was found by the regex => for .exp if #hello is found, it will return #hello
    }

    return (
        <div className='post'>        {/* container of all posts  */}
            <div className="posterProfile"> {/* post tweeters name, id,img */}
                {/* <img className='posterImg' src="" alt="" /> */}
                <span className='temporarily'> {/* a temporairly used icon instead of img */}
                    <FontAwesomeIcon icon={faImage} />
                </span>
                <span className="posterPersianName">
                    علیرضا الهوردی
                </span>
                <span className="posterID">
                    AlirezaAllahverdi20
                </span>
            </div>
            <div className="postText"> {/* post text container */}
                {/* post text that will be checked of all the hashtags init */}
                <span dangerouslySetInnerHTML={{ __html: CheckForHashTag(text) }}>
                </span>
            </div>
            <div className="postStuffContainer"> {/* post retweet and like btn container */}
                <button className='reTweetButton'> {/* tweet retweet btn */}
                    <FontAwesomeIcon icon={faRetweet} className='reTweetIcon' />
                </button>
                <button className="likeButton"> {/* tweet like btn */}
                    <FontAwesomeIcon icon={faHeart} className='likeIcon' />
                </button>
                <span className="likeNumber">1560</span> {/* tweet like counter */}
            </div>
        </div>
    )
}

export default Posts