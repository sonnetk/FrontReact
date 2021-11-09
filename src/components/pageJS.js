import React from "react";
import '/home/user/my-app/src/styles/style.css';
import Iteration5 from "./Iteration5";
import Iteration6 from "./Iteration6";
import Iteration7 from "./Iteration7";

class PageJS extends React.Component{
    render() {
        return(
            <div className='area'>
                <h2>JavaScript</h2>
                <h3> iteration 4</h3>
                <Iteration5 />
                <h3> iteration 6</h3>
                <Iteration6 />
                <h3> iteration 7</h3>
                <Iteration7 />
            </div>
        )
    }
}

export default PageJS;