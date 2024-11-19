
import React from "react";
import './Header.css';

export default function Header() {
    return (
        <div className="outterDiv">
            <div className="logoDiv">
                <p className="logo">T&#9675;D&#9675;</p>
            </div>
            <div className="menuDiv">
                <ul className="menu">
                    <div className="mLDiv"><li className="menuList">Home</li></div>
                    <div className="mLDiv"><li className="menuList">TODO</li></div>
                    <div className="mLDiv"><li className="menuList">Create</li></div>
                    <div className="mLDiv"><li className="menuList">Logout</li></div>
                </ul>
            </div>
        </div>
    );
};