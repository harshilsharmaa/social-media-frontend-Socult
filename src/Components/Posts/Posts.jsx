import React, {useEffect, useState} from 'react'
import './Posts.css'
import PostCard from './PostCard'
import { postInfo } from './PostInfo'

const Posts = ({posts}) => {

  return (
    <div className='posts-container'>
        {
            posts && posts.length>0 && posts.map((item)=>{
                return (
                    <PostCard key={item.id} post={item}/>
                )
            })
        }
    </div>
  )
}

export default Posts