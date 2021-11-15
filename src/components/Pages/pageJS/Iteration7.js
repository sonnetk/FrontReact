import React from "react";
import '/home/user/my-app/src/styles/style.css';


class Iteration7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitrepo:'',
            textSpan:''
        };

        this.clickPromise = this.clickPromise.bind(this)
        this.clickAsync = this.clickAsync.bind(this)
    }

    clickPromise() {

        let linkGit = `https://api.github.com/users/${this.state.gitrepo}`

        fetch(linkGit+'/repos')
            .then(response => response.json())
            .then(commits => {
                let str = 'Репозитории - '
                commits.map((commit)=> str+= `${commit.name} `);
                this.setState({ ...this.state, textSpan: str});
            })
            .catch(error =>  this.setState({ ...this.state, textSpan: error.message}));
        setTimeout(() => console.log(this.state), 0)
    }

    clickAsync() {
        (async () => {
            let linkGit = `https://api.github.com/users/${this.state.gitrepo}`
            let url = linkGit + '/repos';

            let response = await fetch(url);
            try {
                let commits = await response.json();
                let str = 'Репозитории = '
                commits.map((commit) => str += `${commit.name} `);
                this.setState({...this.state, textSpan: str});
            } catch (err) {
                this.setState({...this.state, textSpan: `Ошибка HTTP: ${err.status}`});
            }
            setTimeout(() => console.log(this.state), 0)
        })()
    }


    render() {
        return (
            <div className='areaJS'>
                <input onChange={(e => {
                    this.setState({ gitrepo: e.target.value })
                })} id="inputLink" placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ" />
                <button onClick={this.clickPromise} id="clickPromise">Promise</button>
                <button onClick={this.clickAsync} id="clickAsync">async/await</button>
                <span id="resultClick">{this.state.textSpan}</span>
            </div>
        );
    }
}

export default Iteration7;