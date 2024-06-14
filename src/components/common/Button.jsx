function ButtonMain( { text, onClick, className, width, height } ) {

 

    return(
        <button className= {className} onClick={onClick} width={width} height={height}>           
            { text }
        </button>
    );
}

export default ButtonMain;
