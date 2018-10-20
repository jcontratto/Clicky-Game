import React from "react";
import "./Navbar.css";

const Navbar = props => {
    console.log('props ', props)
    return (
        <div>
            <nav className="navbar fixed-top navbar-light bg-light">
                <ul>
                    <li className="top-left">Score: {props.score}</li>
                    <li className="top-right">Counter: {props.score}</li>
                </ul>
            </nav>
            <h1 className="title">{props.children}</h1>
        </div>
    )
}
export default Navbar;