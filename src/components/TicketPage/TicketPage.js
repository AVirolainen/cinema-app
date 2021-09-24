import React from "react"
import "./TicketPage.css"

import chair from "./assets/chair.svg"
import chair_picked from "./assets/chair_picked.svg"

const TicketPage = ()=>{
    let places = []

    for(let i=0; i<9; i++){
        let row = []
        for(let j=0; j<13; j++){
            row.push([i, j])
        }
        places.push(row)
    }

    console.log(places)

    return(
        <div className="ticketPage">
            <div className="placesBox">
                {
                    places.map((row)=>{
                        return(
                            <div className="chairsWrapper">
                                {
                                    row.map((item)=>{
                                        if(item[1] == 2 || item[1] == 10 ){
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
            </div>

            <div className="placesInfo">

            </div>
        </div>
    )
}

export default TicketPage
