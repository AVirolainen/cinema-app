import React, {useRef, useState} from "react"
import "./TicketPage.css"
import moment from 'moment';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import { useLocation } from "react-router"


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

    console.log(chairsList)

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
                {/* <div className="filmName">
                    {filmName}
                </div> */}
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
                                                            setChairsList={setChairsList}
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

                <div className="ticketText">Виберіть дату та час сеансу</div>
                <div className="datePicker">
                    <DatePicker
                        format="YYYY-MM-DD HH:mm:ss"
                        disabledDate={disabledDate}
                        disabledTime={disabledDateTime}
                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                        onChange={(date, dateString) => console.log(dateString)}
                        />
                </div>
                    
            </div>
        </div>
    )
}

export default TicketPage
