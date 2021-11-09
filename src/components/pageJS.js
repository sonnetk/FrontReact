import React from "react";
import '/home/user/my-app/src/styles/style.css';

class PageJS extends React.Component{
    render() {
        return(
            <div className='area'>
                <h2>JavaScript</h2>
                <div className='areaJS'>
                    <span> Iter 5</span>
                    <button id="clickHere">НАЖМИ НА МЕНЯ</button>
                    <button id="hHere">НАВЕДИ НА МЕНЯ</button>
                    <input id="inputOne" placeholder="ВВЕДИ ТЕКСТ" />
                    <span id="spanInp"> </span>
                </div>
                <div className='areaJS'>
                    <button id="clickURL">Получить URL</button>
                    <button id="clickBOM">BOM</button>
                    <span> НАВИГАЦИЯ: </span>
                    <button className="next">Вперед</button>
                    <button className="index1">Страница1</button>
                    <button className="index2">Страница2</button>
                    <button className="back">Назад</button>
                    <button className="go">Назад Х2</button>
                </div>
                <div className='areaJS'>
                    <span> Iter 6</span>
                    <button id="clickCookie">Cookie!</button>
                    <button id="clickSS">Session Storage</button>
                    <button id="clickLS">Local Storage</button>
                </div>
                <div className='areaJS'>
                    <span> Iter 7</span>
                    <input id="inputLink" placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ" />
                    <button id="clickPromise">Promise</button>
                    <button id="clickAsync">async/await</button>
                    <span id="resultClick"> </span>
                </div>
            </div>
        )
    }
}

export default PageJS;