import React from "react";
import '/home/user/my-app/src/styles/style.css';
import Test from "./Test";

class PageReact extends React.Component{
    render() {
        return(
            <div className='area'>
                <h2>React</h2>
                <Test />
            </div>
        )
    }
}
export default PageReact;