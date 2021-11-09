import React from "react";
import '/home/user/my-app/src/styles/style.css'

function Header() {
    return (
        React.createElement('header', null,
            React.createElement ('div', null,
                React.createElement ('h1', null, `ИТЕРАЦИИ`)))
        // <header>
        //     <div>
        //         <h1>ИТЕРАЦИИ</h1>
        //     </div>
        // </header>
    );
}
export default Header;