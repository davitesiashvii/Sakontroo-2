import React , { useEffect, useState } from 'react'

function GetComments() {
  const [comments, setComments] = useState([])
    
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((json) => setComments(json))
  },[])


 return comments;
      
}

  
export default GetComments
