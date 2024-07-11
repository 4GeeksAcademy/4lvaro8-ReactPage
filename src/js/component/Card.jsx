import React from "react";
import PropType from "prop-types";




//create your first component
export const Card = (props) => {
    Card.PropType = {
        img: PropType.string,
        cardTitle: PropType.string,
        cardDescription: PropType.string,
        textButton: PropType.string,
    }

	return (
        <>
            <div className="card my-5 rounded-1">
                <img src={props.img} alt="" />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-tet">{props.cardDescription}</p>
                </div>
                <div className="card-body text-center bg-secondary bg-opacity-25">
                    <a className="btn btn-primary" href="#">{props.textButton}</a>
                </div>
            </div>
        </>
	);
};

export default Card;