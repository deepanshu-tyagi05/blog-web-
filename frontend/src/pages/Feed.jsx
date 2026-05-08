import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

  const [posts, setposts] = useState([])

  useEffect(() => {

    axios.get("http://localhost:3000/create-post")
      .then((res) => {

        console.log(res.data)

        setposts(res.data.post)

      })
      .catch((err) => {

        console.log(err)

      })

  }, [])

  return (

    <section className='feed-section'>

      {
        posts.length > 0 ? (

          posts.map((post) => (

            <div key={post._id} className='post-card'>

              <img
                src={post.image}
                alt={post.caption}
                width="300"
              />

              <p>{post.caption}</p>

            </div>

          ))

        ) : (

          <p>No post yet</p>

        )
      }

    </section>

  )
}

export default Feed