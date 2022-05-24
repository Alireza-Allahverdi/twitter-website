import React from 'react';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import PostsList from '../Posts/PostsList';

function TweetByHashTag() {
    return (
        <div>
            <Header tittle={'ویروسی به نام ترنم'} icon={<FontAwesomeIcon icon={faHashtag}/>} />
            <PostsList />
        </div>
    )
}

export default TweetByHashTag