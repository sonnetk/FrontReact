import React from "react";
import '/home/user/my-app/src/styles/style.css'
import {Link} from "react-router-dom";

function Menu() {
    return (
        <aside>
            <div className="nav">
                <ul className="menu">
                    <li><Link to='/react' activeClassLink="active">React</Link></li>
                    <li><Link to='/javascript'>JavaScript</Link></li>
                    <li><Link to='/css'>HTML+CSS</Link></li>
                </ul>
            </div>
        </aside>
    );
}

export default Menu;