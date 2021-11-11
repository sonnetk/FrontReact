import React from "react";
import '/home/user/my-app/src/styles/style.css'


function List({items}) {
    console.log(items)
    return (
        <div>
            <span>Для того, чтобы стать нашим пользователем, выполните 3 простых шага:</span>
            <ol>
                {items.map(item => (
                    <li>{item}</li>
                ))}
            </ol>
        </div>
    );
}
export default List;

