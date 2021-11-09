import React from "react";
import '/home/user/my-app/src/styles/style.css';
import Footer from "./components/Footer";
import Table from "./components/Table";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

//
//
// export default function App() {
//   return (
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/users">Users</Link>
//               </li>
//             </ul>
//           </nav>
//
//           <Switch>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/users">
//               <Users />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//   );
// }
//
// function Home() {
//   return <h2>Home</h2>;
// }
//
// function About() {
//   return <h2>About</h2>;
// }
//
// function Users() {
//   return <h2>Users</h2>;
// }

//
function App() {
  return (
        <main>
          <div className="content">
            <div>
              <h2>JavaScript</h2>
              <span> Iter 5</span>
              <button id="clickHere">НАЖМИ НА МЕНЯ</button>
              <button id="hHere">НАВЕДИ НА МЕНЯ</button>
              <input id="inputOne" placeholder="ВВЕДИ ТЕКСТ" />
                <span id="spanInp"> </span>
            </div>
            <div>
              <button id="clickURL">Получить URL</button>
              <button id="clickBOM">BOM</button>
              <span> НАВИГАЦИЯ: </span>
              <button className="next">Вперед</button>
              <button className="index1">Страница1</button>
              <button className="index2">Страница2</button>
              <button className="back">Назад</button>
              <button className="go">Назад Х2</button>
            </div>
            <div>
              <span> Iter 6</span>
              <button id="clickCookie">Cookie!</button>
              <button id="clickSS">Session Storage</button>
              <button id="clickLS">Local Storage</button>
            </div>
            <div>
              <span> Iter 7</span>
              <input id="inputLink" placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ" />
              <button id="clickPromise">Promise</button>
              <button id="clickAsync">async/await</button>
              <span id="resultClick"> </span>
            </div>
            <div className="about">
              <h2>HTML+CSS</h2>
              <h2 id="about">О нас</h2>
              <div>
                <p> Приветствуем Вас, уважаемый посетитель!<br />
                  <b> КNИГИVАМ </b> – городской буккроссинг.
                  Процесс буккроссинга состоит из простейшего действия, основанного на принципе <i> «прочитал —
                    отдай другому» </i>.
                  Мы готовы принять у Вас пришедшую в ненадобность книгу,
                  чтобы любой желающий мог забрать ее у нас и прочитать. Книги,
                  непригодные для передачи, мы самостоятельно сдадим на переработку!<br />
                  Для участия в нашем проекте Вам необходимо только заполнить
                  форму пользователя.</p>
              </div>
            </div>
            <div className="genres">
              <h2 id="genres">Жанры</h2>
              <Table />
            </div>
            <div className="form">
              <h2 id="form">Анкета</h2>
              <span>Для того, чтобы стать нашим пользователем, выполните 3 простых шага:</span>
              <ol>
                <li>Заполните контактную информацию о себе</li>
                <li>Расскажите о себе, отметив подходящие вам пункты</li>
                <li>Отправьте нам свой ответ</li>
              </ol>
              <form>
                <div>
                  <fieldset>
                    <legend>Контактные данные</legend>
                    <label htmlFor="fname">Имя<sup>*</sup></label>
                    <input type="text" id="fname" name="fname" title="Обязательное поле" required /><br />
                      <label htmlFor="lname">Фамилия<sup>*</sup></label>
                      <input type="text" id="lname" name="lname" title="Обязательное поле" required /><br />
                        <label htmlFor="birthday">Дата рождения<sup>*</sup></label>
                        <input type="date" id="birthday" name="birthday" min="1900-01-01" value="1990-01-01"
                               title="Обязательное поле" required /><br />
                          <label htmlFor="email">Ваш email</label>
                          <input type="email" id="email" name="email" /><br />
                            <label htmlFor="phone">Ваш номер телефона<sup>*</sup></label>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" placeholder="88001234567"
                                   title="В формате: 88001234567" required /><br />
                              <small>* - обязательные для заполнения поля</small>
                  </fieldset>
                  <br />
                    <fieldset>
                      <legend>Расскажите о себе</legend>
                      <label>Вы предпочитаете жанры:</label><br />
                      <input type="checkbox" id="option1" name="option1" value="Fiction" />
                        <label htmlFor="option1">Фантастика</label>
                        <input type="checkbox" id="option2" name="option2" value="Mysticism" />
                          <label htmlFor="option2">Мистика</label>
                          <input type="checkbox" id="option3" name="option3" value="Drama" />
                            <label htmlFor="option3">Драма</label><br />
                            <input type="checkbox" id="option4" name="option4" value="Scientific" />
                              <label htmlFor="option4">Научные</label>
                              <input type="checkbox" id="option5" name="option5" value="Detectives" />
                                <label htmlFor="option5">Детективы</label>
                                <input type="checkbox" id="option6" name="option6" value="Educational literature" />
                                  <label htmlFor="option6">Учебная литература</label><br />
                                  <br />
                                    <input type="radio" id="yes" name="ask" value="yes" />
                                      <label htmlFor="yes">У меня есть книги, которыми я хотел(а) бы
                                        поделиться</label><br />
                                      <input type="radio" id="no" name="ask" value="no" />
                                        <label htmlFor="no">У меня нет книг, которыми я хотел(а) бы
                                          поделиться</label><br />
                    </fieldset>
                </div>
                <input id="submit" name="submit" type="submit" />
              </form>
              <Footer />
            </div>
          </div>
        </main>
  );
}

export default App;
