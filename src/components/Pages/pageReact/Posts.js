import React from "react";
import '/home/user/my-app/src/styles/style.css'


function Posts({posts}) {
    return (
        <div>
            {posts.slice(-5).map(post => (
                <div className='post' key={post.id}>
                    <span onClick={() => alert('Тут должен быть попап')}>&#10060;</span>
                    <h4>{post.title}</h4>
                    <div>{post.body}</div>
                </div>
            ))}
        </div>
    );
}
export default Posts;