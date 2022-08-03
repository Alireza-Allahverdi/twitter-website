import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PostsList from '../../component/Posts/PostsList';
import { useParams } from 'react-router';
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext';
import { GetTweetByUserReq } from '../../api/user-api';

function TweetByUser() {

    const param = useParams(); // will give access to params of the route path ( mu know and include the params name in this example it is user )
    // const param = useParams() // if this one is used most include the params name aswell for example in this project it is param.user

    const { tweetList } = useTweetState();
    const userDispatch = useTweetDispatch();

    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        GetTweetByUserReq(param.id, (isOk, data) => {
            if (!isOk) {
                return
            }
            setTweetList(userDispatch, data)
            console.log(tweetList);
            setLoader(false)
        })
    }, [])

    return (
        <div className='mainSide'> {/* this class must be given to the page so that it will have the same styles */}
            {
                loader ?
                    <div className="spinner-container">
                        <div className="spinner"></div>
                    </div>
                    :
                    <Fragment>
                        <Header tittle={param.username} icon={<FontAwesomeIcon icon={faUser} />} /> {/* header that will get the icon and tittle as the props and displays them */}
                        {
                            tweetList.length === 0 ?
                                <p style={{ textAlign: 'center' }}>
                                    the user {param.username} has no tweets
                                </p>
                                :
                                <PostsList data={tweetList} />
                        }
                    </Fragment>
            }
        </div>
    )
}

export default TweetByUser