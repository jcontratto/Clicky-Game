import React from "react";
import "./Navbar.css";

const Navbar = props => {
    console.log('props ', props)
    return (
        <div>
            <nav className="navbar fixed-top navbar-light bg-light">
                <ul>
                    <li className="scoring">Score: {props.score}</li>
                </ul>
                <ul>
                    <li className="header">Futurama Clicky-Game{}</li>
                </ul>
                <ul>
                    <li className="counting">Counter: {props.counter}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;