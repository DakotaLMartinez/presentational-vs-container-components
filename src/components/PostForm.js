import React, { Component } from 'react'

export default class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      author: '', 
      content: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addPost(this.state)
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h4>Add Post</h4>
        <p>
          <label htmlFor="title" style={{width: '65px', display: 'inline-block'}}>Title</label>
          <input 
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="author" style={{width: '65px', display: 'inline-block'}}>Author</label>
          <input 
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="content" style={{width: '65px', display: 'inline-block'}}>Content</label>
          <textarea 
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          ></textarea>
        </p>
        <p><input type="submit" value="Add Post" /></p>


      </form>
    )
  }
}