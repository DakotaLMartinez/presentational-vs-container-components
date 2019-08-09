import React from 'react'

const Post = ({title, author, content, likes, position, addLike}) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>by {author}</p>
      <p>{content}</p>
      <button onClick={(e) => addLike(position)}>{likes} Like</button>
    </article>
  )
}

export default Post