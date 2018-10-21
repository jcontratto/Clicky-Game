import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container" onClick={() => props.charactersClicked(props.id)}>
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li> {props.name} </li>
                </ul>
        </div>
        </div>
        );
        
export default Card;