import React from "react";
import '/home/user/my-app/src/styles/style.css';

const sayHello = () => {
    console.log('Hello Tanyuha');
}

// buttonMain = document.getElementById('clickHere'),
//     buttonTwo = document.getElementById('hHere'),
//     inpOne = document.getElementById('inputOne'),
//     result = document.getElementById('spanInp'),
//
//     buttonMain.onclick = function () {
//         buttonMain.innerHTML = 'Вы нажали на кнопку'
//     }
// buttonTwo.onmouseout = function () {
//     buttonMain.style.background = "white"
// }
// buttonTwo.onmouseover = () =>  {
//     buttonMain.style.background = "red"
// }
// buttonTwo.onclick = () =>  {
//     buttonMain.style.background = "blue"
// }
// inpOne.onfocus = () => inpOne.style.background = "#d3d3d3"
//
// inpOne.onblur = () =>  inpOne.style.background = "white"
//
// inpOne.oninput = () => result.innerHTML = inpOne.value
//
// butStop.onclick = () => event.stopPropagation()


function Iteration5 () {
    return (
        <div>
            <div className='areaJS'>
                <button onClick={sayHello} id="clickHere">НАЖМИ НА МЕНЯ</button>
                <button id="hHere">НАВЕДИ НА МЕНЯ</button>
                <input id="inputOne" placeholder="ВВЕДИ ТЕКСТ" />
                <span id="spanInp"> </span>
            </div>
        </div>
    );
}

export default Iteration5;