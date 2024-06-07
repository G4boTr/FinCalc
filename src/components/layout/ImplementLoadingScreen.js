import React, { useState, useEffect } from "react";
import "../../assets/styles/ImplementLoadingScreen.css";
import MainLayout from "./MainLayout";
import LoadingScreen from "./LoadingScreen";



const ImplementLoadingScreen = ( { onClick } ) => {

    const [loading, setLoading] = useState(true);

    useEffect( () => {
        setTimeout( () => {
            setLoading(false);            
        }, 3000);
    }, []);

    return(          
        <div className="implement-loading-screen">
            { loading ? (
                <LoadingScreen />
            ) : <MainLayout /> }     
        </div>      
    );
}

export default ImplementLoadingScreen;