import React from 'react';
import Header from '../../component/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PostsList from '../../component/Posts/PostsList';
import { useParams } from 'react-router';

function TweetByUser() {

    const {user} = useParams();

    return (
        <div className='mainSide'>
            <Header tittle={user} icon={<FontAwesomeIcon icon={faUser} />} />
            <PostsList />
        </div>
    )
}

export default TweetByUser