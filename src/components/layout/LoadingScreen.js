import React from "react";
import "../../assets/styles/LoadingScreen.css";


const LoadingScreen = () => {

    const appName = "FinCalc"; 

    return(
        <div className="loading-screen-main" >
            <h1>
                { appName }
            </h1>   
                    
        </div>
    );
}

export default LoadingScreen;