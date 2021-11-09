import React from "react";
import '/home/user/my-app/src/styles/style.css';

const textSpan = document.querySelector('#resultClick')

const clickPromise = async () => {
    let linkGit = `https://api.github.com/users/${document.querySelector('#inputLink').value}`
    // Пример промиса
    let promise = new Promise(function(resolve, reject) {

        setTimeout(() => resolve("done"), 1000);
    });
    promise.finally(() => console.log('Промис завершен'))
    promise.catch(err => console.log(err))
    promise.then(result => console.log(result))


    await fetch(linkGit+'/repos')
        .then(response => response.json())
        .then(commits => {
            let str = 'Репозитории - '
            commits.map((commit)=> str+= `${commit.name} `);
            textSpan.innerHTML = str;
        })
        .catch(error => textSpan.innerHTML = error.message)


    await fetch(linkGit)
        .then(response => response.json())
        // Показываем аватар (githubUser.avatar_url) в течение 2 секунд (возможно, с анимацией)
        .then(githubUser => {
            let img = document.createElement('img');
            img.src = githubUser.avatar_url;
            img.className = "promise-avatar-example";
            document.querySelector('#resultClick').append(img);
            setTimeout(() => img.remove(), 2000); // (*)
        })
}

const clickAsync = () => {
    (async () => {
        let linkGit = `https://api.github.com/users/${document.querySelector('#inputLink').value}`
        let url = linkGit +'/repos';

        let response = await fetch(url);// завершается с заголовками ответа
        try {
            let commits = await response.json(); // читать тело ответа в формате JSON
            textSpan.innerHTML = commits[0].owner.login;
        } catch (err) {
            textSpan.innerHTML = `Ошибка HTTP: ${err.status}`
        }
    })()

    async function showAvatar() {
        let linkGit = `https://api.github.com/users/${document.querySelector('#inputLink').value}`
        let githubResponse = await fetch(linkGit);

        let githubUser = await githubResponse.json();
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.querySelector('#resultClick').append(img);
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));
        img.remove();

        return githubUser;
    }
    showAvatar();
}

function Iteration7 () {
    return (
        <div className='areaJS'>
            <input id="inputLink" placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ" />
            <button onClick={clickPromise} id="clickPromise">Promise</button>
            <button onClick={clickAsync} id="clickAsync">async/await</button>
            <span id="resultClick"> </span>
        </div>
    );
}

export default Iteration7;