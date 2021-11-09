import React from "react";
import '/home/user/my-app/src/styles/style.css';
import Table from "./Table";
import Footer from "./Footer";
import Form from "./Form";
import About from "./About";
import List from "./List";

class PageCSS extends React.Component{
    render() {
        return(
            <div className='area'>
                <div className="about">
                    <h2>HTML+CSS</h2>
                    <h2>О нас</h2>
                    <About />
                </div>
                <div className="genres">
                    <h2>Жанры</h2>
                    <Table />
                </div>
                <div className="form">
                    <h2>Анкета</h2>
                    <List />
                    <Form />
                    <div className="footer">
                        <h2 id="contacts">Наши контакты</h2>
                        <ul className="contacts">
                            <li> г.Тула, пр. Ленина, 100500</li>
                            <li> 88005553535</li>
                            <li>knigivam.tula</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageCSS;