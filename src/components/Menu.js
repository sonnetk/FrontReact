import React from "react";
import '/home/user/my-app/src/styles/style.css'
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <aside>
            <div className="nav">
                <ul className="menu">
                    <li><NavLink to='/react' activeClassLink="active">React</NavLink></li>
                    <li><NavLink to='/javascript'>JavaScript</NavLink></li>
                    <li><NavLink to='/css'>HTML+CSS</NavLink></li>
                </ul>
            </div>
        </aside>
    );
}

export default Menu;