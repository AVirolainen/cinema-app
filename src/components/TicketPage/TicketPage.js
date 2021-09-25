import React from "react"
import "./TicketPage.css"
import moment from 'moment';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import { useLocation } from "react-router"


import chair from "./assets/chair.svg"
import chair_picked from "./assets/chair_picked.svg"

function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

function disabledDate(current) {
// Can not select days before today and today
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

    console.log(filmName)

    let places = []

    for(let i=0; i<9; i++){
        let row = []
        for(let j=0; j<13; j++){
            row.push([i, j])
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
                {
                    places.map((row)=>{
                        return(
                            <div className="chairsWrapper">
                                {
                                    row.map((item)=>{
                                        if(item[1] === 2 || item[1] === 10 ){
                                            return <div className="missedChair"> </div>
                                        }
                                        return <img src={chair} className="chairImage"/>
                                    })
                                }
                            </div>
                        )
                    })
                }
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
