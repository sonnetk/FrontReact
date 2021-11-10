import React from "react";
import '/home/user/my-app/src/styles/style.css';


class Iteration5 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false,
            str: '',
            color: 'none',
            colorBut: 'none'
        };
        this.clickHere = this.clickHere.bind(this)
        this.inputOneInput = this.inputOneInput.bind(this)
        this.inputOneFocus = this.inputOneFocus.bind(this)
        this.inputOneBlur = this.inputOneBlur.bind(this)
        this.hHereMouseout = this.hHereMouseout.bind(this)
        this.hHereMouseover = this.hHereMouseover.bind(this)
        this.hHereClick = this.hHereClick.bind(this)
    };

    hHereMouseout(){
        this.setState({
            colorBut: 'white'
        });
    }

    hHereMouseover(){
        this.setState({
            colorBut: 'red'
        });
    }

    hHereClick(){
        this.setState({
            colorBut: 'blue'
        });
    }


    clickHere() {
        this.setState(state => ({
            visibility:!state.visibility
        }));
    }

    inputOneInput() {
        this.setState({
            str: document.getElementById('inputOne').value
        });
    }

    inputOneFocus(){
        this.setState({
            color: '#d3d3d3'
        });
    }

    inputOneBlur(){
        this.setState({
            color: 'white'
        });
    }

    render() {
        if (this.state.visibility){
            return (
                <div>
                    <div className='areaJS'>
                        <button onClick={this.clickHere}
                                style={{ background: this.state.colorBut}}
                                id="clickHere">НАЖМИ НА МЕНЯ</button>
                        <button id="hHere"
                                onMouseOut={this.hHereMouseout}
                                onMouseOver={this.hHereMouseover}
                                onClick={this.hHereClick}>Наведи на меня</button>

                        <input onInput={this.inputOneInput}
                               style={{ background: this.state.color}}
                               onBlur={this.inputOneBlur}
                               onFocus={this.inputOneFocus}
                               id="inputOne" placeholder="ВВЕДИ ТЕКСТ"/>
                        <p id="spanInp">{this.state.str}</p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className='areaJS'>
                        <button onClick={this.clickHere}
                                style={{ background: this.state.colorBut}}
                                id="clickHere">Кнопка нажата</button>
                        <button id="hHere"
                                onMouseOut={this.hHereMouseout}
                                onMouseOver={this.hHereMouseover}
                                onClick={this.hHereClick}>Наведи на меня</button>

                        <input onInput={this.inputOneInput}
                               style={{ background: this.state.color}}
                               onBlur={this.inputOneBlur}
                               onFocus={this.inputOneFocus}
                               id="inputOne" placeholder="ВВЕДИ ТЕКСТ"/>
                        <p id="spanInp">{this.state.str}</p>
                    </div>
                </div>
            )
        }
    }
}

export default Iteration5;
