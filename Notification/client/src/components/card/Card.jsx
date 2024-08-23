import React, { useState } from "react";
import "./card.css";
import Heart from "../../assets/heart.svg";
import HeartFilled from "../../assets/heart-solid.svg";
import Comment from "../../assets/comment.svg";
import Share from "../../assets/share.svg";

function Card({ post, socket, user }) {
    const [like, setLike] = useState(false);

    const handleNotification = (type) => {
        setLike(true);
        socket.emit("sendNotification", {
            senderName: user,
            receiverName: post.username,
            type,
        });
    };

    const handleDislike = () => {
        setLike(false);
    };

    return (
        <div className="card">
            <div className="info">
                <img src={post.userImg} className="userImg" alt="avatar" />
                <span>{post.fullname}</span>
            </div>
            <img src={post.postImg} className="postImg" alt="post" />
            <div className="interaction">
                {like ? (
                    <img
                        src={HeartFilled}
                        className="icon"
                        onClick={handleDislike}
                    />
                ) : (
                    <img
                        src={Heart}
                        className="icon"
                        onClick={() => handleNotification(1)}
                    />
                )}

                <img
                    src={Comment}
                    className="icon"
                    onClick={() => handleNotification(2)}
                    alt=""
                />
                <img
                    src={Share}
                    className="icon"
                    onClick={() => handleNotification(3)}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Card;
