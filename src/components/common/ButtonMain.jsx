function ButtonMain( { onClick, className, text } ) {

 

    return(
        <button text={text} onClick={onClick} className={className}>{text}</button>
    );
}

export default ButtonMain;
