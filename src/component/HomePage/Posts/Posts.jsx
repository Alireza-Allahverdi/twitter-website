import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faImage, faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

function Posts() {
    return (
        <div className='post'>
                {/* <img className='posterImg' src="" alt="" /> */}
                <div className="posterProfile">
                    <span  className='temporarily'>
                        <FontAwesomeIcon icon={faImage} />
                    </span>
                    <span className="posterPersianName">
                        علیرضا الهوردی
                    </span>
                    <span className="posterID">
                        AlirezaAllahverdi20
                    </span>
                </div>
                <div className="postText">
                    <span>
                    آموزش دانشجويان خلباني نظامي در سه مرحله مقدماتي، پايه و پيشرفته انجام مي شود و پس از آن وارد مراحل بعدي يعني ورود به جنگنده، جنگنده پيشرفته و اسکادران آموزشي مي گردند. در کشورمان به دليل عدم وجود هواپيماي جت آموزشي پيشرفته، دانشجو پس از طي دوره پايه بلافاصله وارد مرحله چهارم (ورود به جنگنده) مي شود.
                    </span>
                </div>
            <div className="postStuffContainer">
                <button className='reTweetButton'>
                    <FontAwesomeIcon icon={faRetweet} className='reTweetIcon' />
                </button>
                <button className="likeButton">
                    <FontAwesomeIcon icon={faHeart} className='likeIcon' />
                </button>
                <span className="likeNumber">1560</span>
            </div>
        </div>
    )
}

export default Posts