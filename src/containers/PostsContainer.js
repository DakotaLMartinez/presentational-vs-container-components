import React, { Component } from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'

export default class PostsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [
        {
          title: 'Lord of the Rings',
          author: 'JRR Tolkien',
          content: 'One ring to rule them all!!!',
          likes: 0
        },
        {
          title: 'Wingardium Leviosa',
          author: 'Fillius Flitwick',
          content: "It's Wingardium Leviosaaaa",
          likes: 0
        },
        {
          title: "That's not Luke Skywalker",
          author: 'milking a space animal',
          content: 'A New Hope....?',
          likes: 0
        }
      ]
    }

    this.addPost = this.addPost.bind(this)
    this.addLike = this.addLike.bind(this)
  }

  addPost(post) {
    this.setState({
      posts: [...this.state.posts, {...post, likes: 0}]
    })
  }

  addLike(index) {
    let post = this.state.posts[index]
    this.setState({
      posts: [...this.state.posts.slice(0, index), {...post, likes: post.likes + 1}, ...this.state.posts.slice(index+1)]
    })
  }

  render() {
    return(
      <div style={{width: '80%', margin: '0 auto'}}>
        <h1>Posts</h1>
        <PostList posts={this.state.posts} addLike={this.addLike} />
        <PostForm addPost={this.addPost} />
      </div>
    )
  }
}