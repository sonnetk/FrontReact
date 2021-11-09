import React from "react";
import '/home/user/my-app/src/styles/style.css';
import cat1 from '/home/user/my-app/src/styles/images/cat1.jpg';
import cat3 from '/home/user/my-app/src/styles/images/cat3.jpg';
import cat5 from '/home/user/my-app/src/styles/images/cat5.jpg';
import cat6 from '/home/user/my-app/src/styles/images/cat6.jpg';
import cat7 from '/home/user/my-app/src/styles/images/cat7.jpg';
import cat8 from '/home/user/my-app/src/styles/images/cat8.jpg';


const table = [
    [
        { title: 'Фантастика' },
        { title: 'Мистика' },
        { title: 'Драмма' },
        { title: 'Науч-поп' },
        { title: 'Детективы' },
        { title: 'Учебная литература' },
    ],
    [
        {alt: 'Фантастика', img: cat3, width: 160, height: 160},
        {alt: 'Мистика', img: cat6, width: 160, height: 160},
        {alt: 'Драмма', img: cat5, width: 160, height: 160},
        {alt: 'Науч-поп', img: cat7, width: 160, height: 160},
        {alt: 'Детективы', img: cat1, width: 160, height: 160},
        {alt: 'Учебная литература', img: cat8, width: 160, height: 160},
    ],
    [
        { count: 157 },
        { count: 124 },
        { count: 98 },
        { count: 145 },
        { count: 72 },
        { count: 105 },
    ]
]

class Table extends React.Component{
    render() {
        return(
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
                </table>
            </div>
        )
    }
}

export default Table;