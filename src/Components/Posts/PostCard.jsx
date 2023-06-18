import React, {useState, useEffect} from 'react'
import './PostCard.css'
import { Link } from 'react-router-dom/dist';
import { likeIt } from './PostInfo';

const PostCard = ({item}) => {

  const [likes, setLikes] = useState(item.likes);
  const [isLiked , setIsLiked] = useState(false);

  const likeHandler = (e)=>{
    e.preventDefault();
    if(!isLiked){
      setLikes(likes+1);
      setIsLiked(true);
      likeIt(item.id);
    }
  }



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
        Likes: {likes}
        <button onClick={(e)=>likeHandler(e)}>like</button>
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
                    <Link style={{textDecoration:'none',color:'blue', marginLeft:'5px'}}>{comment.authorName}</Link>
                  </div>
                  <div className="comment-content">
                    <p>{comment.comment}</p>
                  </div>
                </div>
              )
            })
          }
          <div className="input">
            <input type="text" placeholder='Post a comment'/>
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard