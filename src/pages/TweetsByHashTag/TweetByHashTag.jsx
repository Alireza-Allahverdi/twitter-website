import React from 'react';
import Header from '../../component/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import PostsList from '../../component/Posts/PostsList';
import { useParams } from 'react-router';

function TweetByHashTag() {

    const {hashtag} = useParams()


    return (
        <div className='mainSide'>
            <Header tittle={hashtag} icon={<FontAwesomeIcon icon={faHashtag} />} />
            <PostsList />
        </div>
    )
}

export default TweetByHashTag