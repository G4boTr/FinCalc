

function ButtonMain( { text, onClick, className, width, height } ) {

    const style = {
        width: width,
        height: height
    }; 

    return(
        <button className= "">           
            { text }
        </button>
    );
}

export default ButtonMain;
