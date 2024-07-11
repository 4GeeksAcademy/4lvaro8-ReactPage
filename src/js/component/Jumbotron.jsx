import React from "react";
import PropType from "prop-types"




//create your first component
const Jumbotron = (props) => {
    Jumbotron.PropType = {
        h1: PropType.string,
        description: PropType.string,
        button: PropType.string,
    }



    return (
        <>
            <div className="p-4 shadow-4 rounded-1 bg-secondary bg-opacity-25">
                <h1 className="display-3"><strong>{props.h1}</strong></h1>
                <p>{props.description}</p>
                <button type="button" className="btn btn-primary mb-4">
                    {props.button}
                </button>
            </div>
        </>
    )
};

export default Jumbotron;