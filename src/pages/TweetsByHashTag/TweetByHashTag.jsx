import React from 'react';
import Header from '../../component/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import PostsList from '../../component/Posts/PostsList';
import { useParams } from 'react-router';

function TweetByHashTag() {

    const { hashtag } = useParams(); // will give access to params of the route path ( mu know and include the params name in this example it is hashtag )
    // const param = useParams() // if this one is used most include the params name aswell for example in this project it is param.hashtag

    return (
        <div className='mainSide'> {/* this class must be given to the page so that it will have the same styles */}
            <Header tittle={hashtag} icon={<FontAwesomeIcon icon={faHashtag} />} /> {/* header that will get the icon and tittle as the props and displays them */}
            <PostsList />
        </div>
    )
}

export default TweetByHashTag