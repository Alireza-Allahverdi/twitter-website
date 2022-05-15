import React from 'react'
import Header from './Header/Header'
import NewTweetSlot from './NewTweet/NewTweetSlot'

function MainSide() {

  return (
    <div>
      <Header />
      <div className="headerDivider"></div>
      <NewTweetSlot />
    </div>
  )
}

export default MainSide