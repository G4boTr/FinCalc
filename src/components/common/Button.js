import React from "react";

function Button( { text, onClick, className } ) {
    return(
        <button className= { className } onClick= { onClick } style= { { width: 125, height: 50 } } >           
            { text }
        </button>
    );
}

export default Button;
