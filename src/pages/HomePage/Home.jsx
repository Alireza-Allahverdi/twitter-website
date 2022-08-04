import React, { useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import NewTweetSlot from './NewTweet/NewTweetSlot';
import PostsList from '../../component/Posts/PostsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { GetTweets } from '../../api/tweet-api';
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext';


function Home() {

    const dispatchTweet = useTweetDispatch()
    // you can say like this or defind another variable and then say it like for example tweet.tweetList
    const { tweetList } = useTweetState() /// this is called destructing

    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        GetTweets((isOk, data) => {
            if (!isOk) {
                return alert(data)
            }
            setLoader(false)
            setTweetList(dispatchTweet, data)
        })
    }, [])

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
                    <PostsList data={tweetList} />
            }
        </div>
    )
}

export default Home;