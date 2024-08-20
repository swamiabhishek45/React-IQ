import React from "react";
import "./navbar.css";
import Notification from "../../assets/notification.svg";
import Message from "../../assets/message.svg";
import Settings from "../../assets/gear.svg";

function Navbar() {
    return (
        <div className="navbar">
            <span className="logo">Lama App</span>
            <div className="icons">
                <div className="icon">
                    <img src={Notification} className="iconImg" alt="" />
                    <div className="counter">2</div>
                </div>
                <div className="icon">
                    <img src={Message} className="iconImg" alt="" />
                    <div className="counter">2</div>
                </div>
                <div className="icon">
                    <img src={Settings} className="iconImg" alt="" />
                    <div className="counter">2</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
