import React from "react";
import '/home/user/my-app/src/styles/style.css'
import Posts from "./Posts";
import DataProvider from "./DataProvider";

const  getPost = 'http://jsonplaceholder.typicode.com/posts'


function Test() {
    return (
        <div>
            <div>
                <DataProvider
                    url={getPost}
                    renderContent={(data) => <Posts posts={data}/>}/>
            </div>
        </div>
    );
}
export default Test;