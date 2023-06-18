import React from 'react'
import './PostCard.css'

const PostCard = ({item}) => {
  return (
    <div className='postCard'>
      <div className="authorInfo">
        <div className="authorImage">
          <img src={item.authorImage} alt="" />
        </div>
        <div className="authorName">
          <p>{item.authorName}</p>
        </div>
      </div>
      <div className="media">
        <img src={item.media} alt="" />
      </div>
      <div className="likes">
        Likes: {item.likes}
      </div>
      <div className="description">{item.description}</div>
      <div className="comments-box">
        <h4>Comments</h4>
        <div className="comments">
          {
            item.comments.length>0 && item.comments.map((comment, index)=>{
              return (
                <div key={index} className="comment">
                  <div className="authorInfo">
                    <img src={comment.authorImage} alt="" />
                    <p>{comment.authorName}</p>
                  </div>
                  <div className="comment-content">
                    <p>{comment.comment}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PostCard