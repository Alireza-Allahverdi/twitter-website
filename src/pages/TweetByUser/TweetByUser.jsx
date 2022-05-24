import React from 'react';
import Header from '../../component/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PostsList from '../../component/Posts/PostsList';

function TweetByUser() {
    return (
        <div>
            <Header tittle={'علیرضا بی'} icon={<FontAwesomeIcon icon={faUser} />} />
            <PostsList />
        </div>
    )
}

export default TweetByUser