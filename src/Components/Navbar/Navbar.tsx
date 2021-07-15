import React from "react";
import {navbarData} from "./Navbar.dt";

function Navbar() {


    return (
        <section className="navbar">
            <ul>
                {navbarData.map(({id, title}) => {
                    return <li key={`nav-${id}`}>{title}</li>
                })}
            </ul>
        </section>
    );
}

export default Navbar