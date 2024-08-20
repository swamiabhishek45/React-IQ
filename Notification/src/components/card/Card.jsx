import React from 'react'
import './card.css'
import Heart from '../../assets/heart.svg'
import Comment from "../../assets/comment.svg";
import Share from '../../assets/share.svg'

function Card({post}) {
  return (
      <div className="card">
          <div className="info">
              <img src={post.userImg} className='userImg' alt="avatar"  />
              <span>{post.fullname}</span>
          </div>
          <img src={post.postImg} className='postImg' alt="post" />
          <div className="interaction">
              <img src={Heart} className='icon' alt="" />
              <img src={Comment} className='icon' alt="" />
              <img src={Share} className='icon' alt="" />
          </div>
      </div>
  );
}

export default Card
