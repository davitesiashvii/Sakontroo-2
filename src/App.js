import React from 'react'
import Header from './Header'
import './App.css';
//import Posts from './Posts/Posts'
import * as db from './PostsData'
import * as db1 from './CommentsData'
import PostList from './Posts/Posts'
import CommentList from './Comments/Comments'


class App extends React.Component{
  state={
    posts: null,
    comments: null,
    contactForm: false,
    searchValue:'',
  }

  componentDidMount(){
    
    const data = db.GetPosts()
    const data1 =db1.GetComments()
    this.setState({comments: data1})
    this.setState({posts: data})
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      const data = db
        .GetPosts()
        .filter((x) =>
          x.title
            .toUpperCase()
            .includes(this.state.searchValue.toUpperCase()) 
        )
      this.setState({ posts : data })
    }
  }
  getCommentByPost(id){
    const data = db1.GetComments().filter((x)=> x.postId == id )
    this.setState({comments : data})
    this.setState({ contactForm: true })
  }

  onSearch = (e) => {
    this.setState({ searchValue: e.target.value })
  }


  render(){
    return(
      <>
        <Header />
        <Search
          searchValue={this.state.searchValue}
          handleSearch={this.onSearch}
        />
        {this.state.contactForm ? (
          <CommentList
            comments={this.state.comments}
          />
        ) : (
          <PostList
            posts={this.state.posts}
            getCommentByPost={this.getCommentByPost}
          />
        )}
       
      </>
    )

  }
}

export default App;
