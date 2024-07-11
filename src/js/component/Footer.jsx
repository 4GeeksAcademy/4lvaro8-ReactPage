import React from "react";
import PropType from "prop-types";




//create your first component
export const Footer = (props) => {
    Footer.PropType = {
        text: PropType.string,
    }

    return (
        <>
            <footer class=" text-center text-lg-start bg-dark">

                <div class="text-center p-5 text-light">{props.text}

                </div>

            </footer>
        </>
    )
};

export default Footer;