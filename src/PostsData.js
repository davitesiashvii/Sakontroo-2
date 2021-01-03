import React , { useEffect, useState } from 'react'

function GetPosts() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
  }, [])
    
  return posts;
}

export default GetPosts




