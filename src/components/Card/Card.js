import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" onClick={props.images}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>Name: {props.name}
                </li>
            </ul>
        </div>
        <span onClick={()=> props.imageClick(props.id)} className="imageClick"></span>
    </div>
);

export default Card;