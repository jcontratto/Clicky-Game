import React, { Component } from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-light bg-light">
        <ul>
            <li>Score: {props.score}</li>
        </ul>
    </nav>

);



// class Navbar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <ul>
//                     <li>Score: {props.score}</li>
//                 </ul>
//             </nav>

//         );
//     }
// }

export default Navbar;