import React from "react";
import '/home/user/my-app/src/styles/style.css'

function Menu() {
    return (
        <aside>
            <div className="nav">
                <ul className="menu">
                    <li><a href='#about'>React</a></li>
                    <li><a href='#genres'>JavaScript</a></li>
                    <li><a href='#form'>HTML+CSS</a></li>
                </ul>
            </div>
        </aside>
    );
}

export default Menu;