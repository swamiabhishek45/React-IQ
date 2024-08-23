import React, { useEffect, useState } from "react";
import "./navbar.css";
import Notification from "../../assets/notification.svg";
import Message from "../../assets/message.svg";
import Settings from "../../assets/gear.svg";

function Navbar({ socket, username }) {
    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        socket.on("getNotification", (data) => {
            setNotifications((prev) => [...prev, data]);
        });
    }, [socket]);

    const displayNotification = ({ senderName, type }) => {
        let action;

        if (type === 1) {
            action = "liked";
        } else if (type === 2) {
            action = "commented";
        } else {
            action = "shared";
        }

        return (
            <span className="notification">
                <span className="user">{`${senderName}`}</span>
                {` ${action} your post`}
            </span>
        );
    };

    const handleRead = () => {
        setNotifications([]);
        setOpen(false);
    };

    return (
        <div className="navbar">
            <span className="logo">{username}</span>
            <div className="icons">
                <div className="icon" onClick={() => setOpen(!open)}>
                    <img src={Notification} className="iconImg" alt="" />
                    {notifications.length > 0 && (
                        <div className="counter">{notifications.length}</div>
                    )}
                </div>
                <div className="icon" onClick={() => setOpen(!open)}>
                    <img src={Message} className="iconImg" alt="" />
                    {/* <div className="counter">2</div> */}
                </div>
                <div className="icon" onClick={() => setOpen(!open)}>
                    <img src={Settings} className="iconImg" alt="" />
                    {/* <div className="counter">2</div> */}
                </div>
            </div>

            {open && (
                <div className="notifications ">
                    <div className="header">Notifications</div>
                    {notifications.map((noti) => displayNotification(noti))}
                    <button className="nBtn" onClick={handleRead}>
                        Mark as Read
                    </button>
                </div>
            )}
        </div>
    );
}

export default Navbar;
