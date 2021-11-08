import React from "react";
import '/home/user/my-app/src/styles/style.css';
import Footer from "./components/Footer";
import cat1 from '/home/user/my-app/src/styles/images/cat1.jpg'
import cat3 from '/home/user/my-app/src/styles/images/cat3.jpg'
import cat5 from '/home/user/my-app/src/styles/images/cat5.jpg'
import cat6 from '/home/user/my-app/src/styles/images/cat6.jpg'
import cat7 from '/home/user/my-app/src/styles/images/cat7.jpg'
import cat8 from '/home/user/my-app/src/styles/images/cat8.jpg'


const table = [
    [
      { title: 'Фантастика' },
      { title: 'Фантастика' },
      { title: 'Фантастика' },
      { title: 'Фантастика' },
      { title: 'Фантастика' },
      { title: 'Фантастика' },
    ],
  [
      {alt: 'Фантастика', img: cat1, width: 160, height: 160},
      {alt: 'Фантастика', img: cat1, width: 160, height: 160},
      {alt: 'Фантастика', img: cat1, width: 160, height: 160},
      {alt: 'Фантастика', img: cat1, width: 160, height: 160},
      {alt: 'Фантастика', img: cat1, width: 160, height: 160},
      {alt: 'Фантастика', img: cat1, width: 160, height: 160},
    ],
  [
      { count: 234 },
      { count: 644 },
      { count: 234 },
      { count: 644 },
      { count: 234 },
      { count: 644 },
    ]
]

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
              <div>
                <table>
                  <caption>Вы можете найти у нас следующие жанры книг</caption>
                  {table.map((tr, ind) => {
                    if (ind === 0) {
                      return <tr>
                        {
                          tr.map((th) => <th>{th.title}</th>)
                        }
                      </tr>
                    }
                    if (ind === 1) {
                      return <tr>
                        {
                          tr.map((th) => <td><img src={th.img} alt={th.alt} width={th.width} height={th.height}/></td>)
                        }
                      </tr>
                    }
                    if (ind === 2) {
                      return <tr>
                        {
                          tr.map((th) => <th>В наличии книг: {th.count}</th>)
                        }
                      </tr>
                    }
                  })}

                  {/*<tr>*/}
                  {/*  <th>Фантастика</th>*/}
                  {/*  <th>Мистика</th>*/}
                  {/*  <th>Драма</th>*/}
                  {/*  <th>Научно-популярные</th>*/}
                  {/*  <th>Детективы</th>*/}
                  {/*  <th>Учебная литература</th>*/}
                  {/*</tr>*/}
                  {/*<tr>*/}
                  {/*  /!*<td><img src={cat1} alt="Фантастика" width="160" height="160" /></td>*!/*/}
                  {/*  /!*<td><img src={cat3} alt="Мистика" width="160" height="160" /></td>*!/*/}
                  {/*  /!*<td><img src={cat5} alt="Драма" width="160" height="160" /></td>*!/*/}
                  {/*  /!*<td><img src={cat6} alt="Научно-популярные" width="160" height="160" /></td>*!/*/}
                  {/*  /!*<td><img src={cat7} alt="Детективы" width="160" height="160" /></td>*!/*/}
                  {/*  /!*<td><img src={cat8} alt="Учебная литература" width="160" height="160" /></td>*!/*/}
                  {/*  */}

                  {/*</tr>*/}
                  {/*<tr>*/}
                  {/*  <td>В наличии книг: 157</td>*/}
                  {/*  <td>В наличии книг: 124</td>*/}
                  {/*  <td>В наличии книг: 98</td>*/}
                  {/*  <td>В наличии книг: 145</td>*/}
                  {/*  <td>В наличии книг: 72</td>*/}
                  {/*  <td>В наличии книг: 105</td>*/}
                  {/*</tr>*/}
                </table>
              </div>
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
