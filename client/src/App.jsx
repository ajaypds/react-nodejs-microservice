import { useState } from 'react'
import PostCreate from './PostCreate'
import PostList from './PostList'

function App() {

  return (
    <>
      <div className='container'>
        <h3>Create Post</h3>
        <PostCreate />
      </div>
      <hr />
      <div className='container'>
        <PostList />
      </div>
    </>
  )
}

export default App
