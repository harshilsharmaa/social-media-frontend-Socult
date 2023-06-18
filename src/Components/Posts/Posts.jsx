import React from 'react'
import './Posts.css'
import PostCard from './PostCard'
import { postInfo } from './PostInfo'

const Posts = () => {
  return (
    <div className='posts-container'>
        {
            postInfo.length>0 && postInfo.map((item)=>{
                return (
                    <PostCard key={item.id} item={item}/>
                )
            })
        }
    </div>
  )
}

export default Posts