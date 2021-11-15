import React, {useEffect, useState} from "react";
import '/home/user/my-app/src/styles/style.css'

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            <h3>iteration 10.
                Форма, Счетчик (useState, useCallback) </h3>

            <div className='post'>
                Счёт: {count}
                <button onClick={() => setCount(initialCount)}>Сбросить</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            </div>
        </div>

    );
}
export default Counter;