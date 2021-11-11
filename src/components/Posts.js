import React from "react";
import '/home/user/my-app/src/styles/style.css'

function Posts({posts}) {
    return (
        <div>
            <h3>iteration 10.
                Вывод постов (useState, useEffect, renderProps) </h3>
            {posts.slice(-10).map(post => (
                <div className='post' key={post.id}>
                    <h4>{post.title}</h4>
                    <div>{post.body}</div>
                </div>
            ))}
        </div>
    );
}
export default Posts;