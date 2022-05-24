import React from 'react';
import Header from './Header/Header';
import NewTweetSlot from './NewTweet/NewTweetSlot';
import PostsList from './Posts/PostsList';

function Home() {

  return (
    <div>
      <Header />
      <div className="headerDivider"></div>
      <NewTweetSlot />
      <PostsList />
    </div>
  )
}

export default Home;