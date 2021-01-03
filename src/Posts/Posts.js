import React, { Component } from 'react'

class PostList extends Component {

  render(){
    return(
      <div className='container'>
        <h4>კონტაქტები</h4>
        <hr />
        <br />
        <div>
          {this.props.posts &&
            this.props.posts.map((post) => (
              <PostListItem
                key={post.id}
                post={post}
                getCommentByPost={this.props.getCommentByPost}
              />
          ))}
        </div>
      </div>
    )
  } 
}
export default PostList