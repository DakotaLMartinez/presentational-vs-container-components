import React from 'react'
import Post from './Post'

const PostList = ({posts, addLike}) => {
  return (
    <section>
      {posts.map((postData, index) => <Post {...postData} position={index} addLike={addLike} />)}
    </section>
  )
}

export default PostList