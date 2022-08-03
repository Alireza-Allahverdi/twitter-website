import React, { useEffect } from 'react';
import Header from '../../component/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import PostsList from '../../component/Posts/PostsList';
import { useParams } from 'react-router';
import { GetTweetsByHashtagReq } from '../../api/hashtag-api';
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext';

function TweetByHashTag() {

    const { hashTags } = useParams(); // will give access to params of the route path ( mu know and include the params name in this example it is hashtag )
    // const param = useParams() // if this one is used most include the params name aswell for example in this project it is param.hashtag

    const { tweetList } = useTweetState()
    const dispatchTweet = useTweetDispatch()

    useEffect(() => {
        GetTweetsByHashtagReq(hashTags, (isOk, data) => {
            if (!isOk) {
                return
            }
            setTweetList(dispatchTweet, data)
        })
    }, [])


    return (
        <div className='mainSide'> {/* this class must be given to the page so that it will have the same styles */}
            <Header tittle={hashTags} icon={<FontAwesomeIcon icon={faHashtag} />} /> {/* header that will get the icon and tittle as the props and displays them */}
            <PostsList data={tweetList} />
        </div>
    )
}

export default TweetByHashTag