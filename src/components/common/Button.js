import React from "react";

function Button( { text, onClick, className, width, height } ) {

    const style = {
        width: width,
        height: height
    }; 

    return(
        <button className= { className } onClick= { onClick } style={ style }  >           
            { text }
        </button>
    );
}

export default Button;
