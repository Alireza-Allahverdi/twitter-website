import React, { Fragment } from 'react'
import Posts from './Posts'

function PostsList(props) {
    return (
        <div>
            {
                props.data.map((item, index) => {
                    return <Fragment key={index}>
                        <Posts tweetInfo={item} />
                    </Fragment>
                })
            }
        </div>
    )
}

export default PostsList