import React, { useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import NewTweetSlot from './NewTweet/NewTweetSlot';
import PostsList from '../../component/Posts/PostsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { GetTweets } from '../../api/tweet-api';


function Home() {

    const [tweets, setTweets] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        GetTweets((isOk, data) => {
            if (!isOk) {
                return alert(data)
            }
            setLoader(false)
            setTweets(data)
        })
    }, [])

    useEffect(() => {
        console.log(tweets);
    }, [tweets])

    return (
        <div className='mainSide'>
            <Header tittle={'خانه'} icon={<FontAwesomeIcon icon={faHome} />} />
            <NewTweetSlot />
            {
                loader ?
                    <div className="spinner-container">
                        <div className="spinner"></div>
                    </div>
                    :
                    <PostsList data={tweets} />
            }
        </div>
    )
}

export default Home;