import React, { Component } from 'react'
import CommentListItem from '../CommentsListItem'


class CommentList extends Component {

  render(){
    return(
      <div className='container'>
        <h4>კონტაქტები</h4>
        <hr />
        <br />
        <div>
          {this.props.component &&
            this.props.component.map((x) => (
              <CommentListItem
                key={x.id}
                component={x}
              />
          ))}
        </div>
      </div>
    )
  } 
}
export default CommentList