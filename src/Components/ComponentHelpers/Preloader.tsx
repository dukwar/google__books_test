import React from "react";
import {preloaderType} from "./types";

function Preloader({className}: preloaderType) {

    return (
        <>
            <div className="lds-ring">
                <div className={className}/>
                <div className={className}/>
                <div className={className}/>
                <div className={className}/>
            </div>
        </>
    );
}

export default Preloader