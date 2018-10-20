import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" onClick={props.images}>
        <div className="img-container" onClick={() => props.imageClick(props.id)}>
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>Name: {props.name}
                </li>
            </ul>
        </div>
 </div>
);

export default Card;