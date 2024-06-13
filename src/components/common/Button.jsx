

function ButtonMain( { text, onClick, className, width, height } ) {

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

export default ButtonMain;
