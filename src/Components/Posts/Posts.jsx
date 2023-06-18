import React, {useEffect, useState} from 'react'
import './Posts.css'
import PostCard from './PostCard'
import { postInfo } from './PostInfo'

const Posts = () => {

  return (
    <div className='posts-container'>
        {
            postInfo && postInfo.length>0 && postInfo.map((item)=>{
                return (
                    <PostCard key={item.id} post={item}/>
                )
            })
        }
    </div>
  )
}

export default Posts