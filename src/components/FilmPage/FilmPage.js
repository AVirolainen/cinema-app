import React from "react"
import "./FilmPage.css"

import holywood from "../Home/assets/holywood.jpg"

const FilmPage = ()=>{
    return(
    <div className="filmPage">
        <div className="filmWrapper">
            <div className="imageBox">
                <img src={holywood} className="filmPoster"/>
            
            </div>
            <div className="ticketButton">
                    Вибрати квиток
            </div>
        </div>
        
        <div className="infoBox">   
            <div className="filmName">
                Once Upon a Time in… Hollywood 
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Вік:
                </div>
                <div className="filmValue">
                    18+
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Рік:
                </div>
                <div className="filmValue">
                    2021
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Режисер: 
                </div>
                <div className="filmValue">
                    Квентін Тарантіно
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Дата виходу:
                </div>
                <div className="filmValue">
                    01.01.2021
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Мова:
                </div>
                <div className="filmValue">
                    Українська
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Жанр:
                </div>
                <div className="filmValue">
                    Бойовик, Триллер
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Тривалість:
                </div>
                <div className="filmValue">
                    1:49
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Виробництво:
                </div>
                <div className="filmValue">
                    Великобританія
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Студія:
                </div>
                <div className="filmValue">
                    Focus Features
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Сценарій:
                </div>
                <div className="filmValue">
                    Пол Шредер
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    В головних ролях:
                </div>
                <div className="filmValue">
                    Оскар Айзек, Уиллем Дефо, Тай Шеридан, Тиффани Хэддиш, Екатерина Бэйкер, Джоэль Майкли, Билли Слотер
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Сценарій:
                </div>
                <div className="filmValue">
                    Пол Шредер
                </div>
            </div>
            <div className="filmDescription">
                Главное в покере — сохранять хладнокровие и считать на несколько ходов вперёд. 
                Именно этими навыками Уильям овладел в совершенстве, когда решил начать новую жизнь. 
                Теперь он уверенно идет к участию в Мировой серии и большим деньгам, понимая, 
                что это его возможность оставить позади тайны своего прошлого. Но когда судьба 
                подкидывает ему шанс на возмездие, Уильям оказывается втянут в игру, где на кону 
                стоит нечто большее, чем деньги.
            </div>
        </div>
    </div>)
}

export default FilmPage