import React from 'react'
import './PostListItem.css'

function PostListItem({ Post: { id, title, body, }, index,getCommentByPost}) {
  return (
    <div className=''>
      <div className='card-body'>
        <table class="table">
          <thead>
            <tr>
                <th scope="col">{title}</th>
                <th scope="col">{body}</th>
                <button
                  className='btn btn-danger float-right'
                  onClick={() => getCommentByPost(id)}
                >
                  see comments
                </button>
            </tr>
          </thead>
        </table>  
        
      </div>
    </div>
  )
}

export default PostListItem
