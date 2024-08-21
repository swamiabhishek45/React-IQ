import React, { useState } from "react";
import "./card.css";
import Heart from "../../assets/heart.svg";
import HeartFilled from "../../assets/heart-solid.svg";
import Comment from "../../assets/comment.svg";
import Share from "../../assets/share.svg";

function Card({ post }) {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(true);
    }
    
    const handleUnlike = () => {
        setLike(false)
    }

    return (
        <div className="card">
            <div className="info">
                <img src={post.userImg} className="userImg" alt="avatar" />
                <span>{post.fullname}</span>
            </div>
            <img src={post.postImg} className="postImg" alt="post" />
            <div className="interaction">
                {like ? (
                    <img src={HeartFilled} className="icon" onClick={handleUnlike} />
                ) : (
                    <img src={Heart} className="icon" onClick={handleLike} />
                )}

                <img src={Comment} className="icon" alt="" />
                <img src={Share} className="icon" alt="" />
            </div>
        </div>
    );
}

export default Card;
