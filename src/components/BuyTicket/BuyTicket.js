import React, {useEffect, useState} from "react"
import "./BuyTicket.css"

import LoadingPage from "../LoadingPage/LoadingPage.js"
import { useLocation } from "react-router"
import {Link} from "react-router-dom"

const BuyTicket = ()=>{
    const location = useLocation()
    const {filmName, poster} = location.state


    return(
    <div className="buyTicket">

        <div className="filmWrapper">
            <div className="imageBox">
                <img src={poster} className="filmPoster"/>
            </div>
        </div>

        <div className="buyTicketBox">   
            sdfsdfsff
        </div>
    </div>)
}

export default BuyTicket