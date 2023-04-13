import React from 'react'
import Blog from '@/componenet/Blog'
export async function getStaticProps(context) {
    // Fetch data from an external API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const blogs = await res.json()
  
    // Return the data as props
    return {
      props: {
        blogs
      }
    }
  }

function blog({blogs}) {
  return (
    <div>
        {
            blogs.map((blog)=><Blog item={blog} key={blog.id}></Blog>)
        }
    </div>
  )
}

export default blog
