import React from 'react'

function Blog({item}) {
  return (
    <div>
      <h1>{item.id}</h1>
      <br></br>
      <h1>{item.title}</h1>
      <br></br>
      <h1>{item.body}</h1>
    </div>
  )
}

export default Blog
