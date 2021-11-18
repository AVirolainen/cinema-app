import React, {useRef, useState} from "react"
import "./TicketPage.css"
import moment from 'moment';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd'
import {Link} from "react-router-dom";
import { useLocation } from "react-router"
import { Button } from 'antd';
import chair from "./assets/chair.svg"
import chair_picked from "./assets/chair_picked.svg"
import ChairHandler from "./ChairHandler";

function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

function disabledDate(current) {
    return current && current < moment().endOf('day');
}
  
function disabledDateTime() {
    return {
        disabledHours: () => range(0, 23).splice(0, 10),
        disabledMinutes: () => range(1, 60),
        disabledSeconds: () => range(1, 60),
    };
}

const TicketPage = ()=>{
    const location = useLocation()
    const {filmName, poster} = location.state

    const [chairsList, setChairsList] = useState([])
    const [update, setUpdate] = useState(false)

    console.log(chairsList)

    const changeList =(list)=>{
        setChairsList(list)
        setUpdate(!update)
    }

    let places = []

    for(let i=0; i<9; i++){
        let row = []
        for(let j=0; j<13; j++){
            row.push([i, j, "free"])
        }
        places.push(row)
    }

    return(
        <div className="ticketPage">

            <div className="filmWrapper">
                <div className="imageBox">
                    <img src={poster} className="filmPoster"/>
                </div>
            </div>

            

            <div className="placesBox">
                <div className="placesWrapper">
                {
                    places.map((row)=>{
                        return(
                            <div className="chairsWrapper">
                                {
                                    row.map((item)=>{
            
                                        if(item[1] === 2 || item[1] === 10 ){
                                            return <div className="missedChair"> </div>
                                        }
                                        
                                        for(let k=0; k<chairsList.length; k++){
                                            if(JSON.stringify([item[1], item[0]]) === JSON.stringify(chairsList[k])){
                                                item[2]="banned"
                                            }
                                        }
                                        
                                        return <ChairHandler 
                                                            row={item[1]} 
                                                            column={item[0]}
                                                            chairsList={chairsList}
                                                            setChairsList={changeList}
                                                            chairValue={item[2]}/>
                                    })
                                }
                            </div>
                        )
                    })
                }
                </div>
                <div className="chairsSpec">
                    <div className="specSimple">
                        <img src={chair} />
                        Вільне місце
                    </div>
                    <div className="specSimple">
                        <img src={chair_picked} />
                        Обране
                    </div>
                    <div className="specSimple">
                        <img src={chair} className="bannedChair"/>
                        Зайняте місце
                    </div>
                </div>

                <div className="bottomWrapper">


                <div className="placesList">
                    <div className="placesHeader">
                        <div className="rowText">
                            Ряд
                        </div>
                        <div className="placeText">
                            Місце
                        </div>
                        <div className="priceText">
                            Ціна
                        </div>
                    </div>
                    {
                        chairsList.map((item, index)=>{
                            return (<div className="placeItem" key={index}>
                                        <div className="rowValue">
                                        {item[1]+1}
                                        </div>
                                        <div className="placeValue">
                                        {item[0]+1}
                                        </div>
                                        <div className="priceValue">
                                            150
                                        </div>
                                    </div>
                                )
                        })
                    }
                    <div className="placesHeader">
                        <div className="rowText">
                            Всього:
                        </div>
                    </div>
                    <div className="fullPrice">{chairsList.length*150}</div>
                        <div className="ticketButton">
                            <Link style={{color: 'white'}} to={{
                                    pathname: '/buy',
                                    state: {
                                        filmName: filmName,
                                        poster: poster
                                    }}}>
                                        Купити квиток
                            </Link>
                        </div>
                </div>

                </div>
                    
            </div>
        </div>
    )
}

export default TicketPage
