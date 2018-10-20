import React from "react";
import "./Navbar.css";

const Navbar = props => {
    console.log('props ', props)
    return (
<nav className="navbar fixed-top navbar-light bg-light">
<ul>
    <li className="top">Game</li>
   <li className="top">Score: {props.score}</li>
</ul>
</nav>
    )
}
export default Navbar;