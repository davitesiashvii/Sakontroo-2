import React from 'react'
import './PostListItem.css'

function CommentsListItem({ comments : { id, name, email, body, }, index,}) {
  return (
    <div className=''>
      <div className='card-body'>
        <table class="table">
          <thead>
            <tr>
                <th scope="col">{name}</th>
                <th scope="col">{email}</th>
                <th scope="col">{body}</th>
              
            </tr>
          </thead>
        </table>  
        
      </div>
    </div>
  )
}

export default CommentsListItem
