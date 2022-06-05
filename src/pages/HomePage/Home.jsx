import React from 'react';
import Header from '../../component/Header/Header';
import NewTweetSlot from './NewTweet/NewTweetSlot';
import PostsList from '../../component/Posts/PostsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';


function Home() {

  return (
    <div className='mainSide'> 
      <Header tittle={'خانه'} icon={<FontAwesomeIcon icon={faHome}/>}/>
      <NewTweetSlot />
      <PostsList />
    </div>
  )
}

export default Home;