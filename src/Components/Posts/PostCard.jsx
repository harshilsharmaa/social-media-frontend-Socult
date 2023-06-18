import React, { useState, useEffect } from 'react'
import './PostCard.css'
import { Link,  } from 'react-router-dom/dist';
// import {  } from './PostInfo';

const PostCard = ({ post }) => {

  // const [post, setPost] = useState(null);

  const [likes, setLikes] = useState(post?.likes);
  const [isLiked, setIsLiked] = useState(post?.isLiked);
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState(null);

  const likeHandler = (e)=>{
    e.preventDefault();
    if(!isLiked){
      setLikes(likes+1);
      setIsLiked(true);
    }
  }

  const commentHandler = (e)=>{
    e.preventDefault()
    if(comment){
      const newComment = {
        authorName: post?.authorName,
        authorImage: post?.authorImage,
        comment: comment
      }
      setComment(comments.push(newComment));
    }
  }

  return (

    <div className='postCard'>
      <div className="authorInfo">
        <div className="authorImage">
          <img src={post?.authorImage} alt="" />
        </div>
        <div className="authorName">
          <p>{post?.authorName}</p>
        </div>
      </div>
      <div className="media">
        <img src={post?.media} alt="" />
      </div>
      <div className="likes">
        Likes: {likes}
        <button onClick={(e) => likeHandler(e)}>like</button>
      </div>
      <div className="description">{post?.description}</div>
      <div className="comments-box">
        <h4>Comments</h4>
        <div className="comments">
          {
            post?.comments.length > 0 && post?.comments.map((comment, index) => {
              return (
                <div key={index} className="comment">
                  <div className="authorInfo">
                    <img src={comment.authorImage} alt="" />
                    <Link style={{ textDecoration: 'none', color: 'blue', marginLeft: '5px' }}>{comment.authorName}</Link>
                  </div>
                  <div className="comment-content">
                    <p>{comment.comment}</p>
                  </div>
                </div>
              )
            })
          }
          <div className="input">
            <img src={post?.authorImage} alt="" />
            <input onChange={(e)=>setComment(e.target.value)} type="text" placeholder='Post a comment' />
            <button onClick={(e)=>commentHandler(e)}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard