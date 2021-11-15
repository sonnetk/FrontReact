import React, {useState, useMemo, useCallback, useEffect} from "react";
import '/home/user/my-app/src/styles/style.css'
import frog from '../styles/images/frog.gif';
import Counter from "./Counter";

function createUser(name, surname){
    const user = {name, surname}
    console.log(user)
    return user
}

function FormName() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [count, setCount] = useState(0);
    const [message, setMassage] = useState('')

    const user = useMemo( () => createUser(name, surname), [name, surname]);
    // const user = createUser(name, surname )

    const test = useCallback((text) => {
        console.log(text)
    }, [])

    useEffect(() => {
        test(message)
    }, [test, message])

    return (
        <>
            <h3>iteration 10.
                Форма, Счетчик (useMemo, useState, useCallback) </h3>
            <div className='post'>
                <div>
                    <input
                        type='text'
                        placeholder='Введите имя'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Введите фамилию'
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <br />
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                </div>

                <input
                    type='text'
                    placeholder='Введите сообщение'
                    value={message}
                    onChange={(e) => setMassage(e.target.value)}
                />

                <div className='count'>
                    Счёт: {count}
                    <button className='btn'
                        onClick={() => setCount(0)}
                        // onMouseEnter={(e) => {
                        //     e.currentTarget.style.top = `${Math.floor(Math.random() * ((window.innerHeight-e.currentTarget.getBoundingClientRect().top) - 0) + 0)}px`;
                        //     e.currentTarget.style.left = `${Math.floor(Math.random() * ((window.innerWidth-e.currentTarget.getBoundingClientRect().left) - 0) + 0)}px`;
                        // }}
                    >
                        Сбросить
                    </button>
                    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                    <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                </div>
            </div>
            {/*<div className='dancedFrog'>*/}
            {/*    <img src={frog} />*/}
            {/*</div>*/}
        </>

    )
}
export default FormName;