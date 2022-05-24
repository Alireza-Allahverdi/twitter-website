import React from 'react';
import Header from '../Header/Header';
import NewTweetSlot from './NewTweet/NewTweetSlot';
import PostsList from '../Posts/PostsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';


function Home() {

  return (
    <div> 
      <Header tittle={'خانه'} icon={<FontAwesomeIcon icon={faHome}/>}/>
      <NewTweetSlot />
      <PostsList />
    </div>
  )
}

export default Home;