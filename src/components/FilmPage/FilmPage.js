import React, {useEffect, useState} from "react"
import "./FilmPage.css"

import LoadingPage from "../LoadingPage/LoadingPage.js"
import { useLocation } from "react-router"
import {Link} from "react-router-dom"

const FilmPage = ()=>{
    const location = useLocation()
    const {filmId, poster, tickets, screeningId, forceUpdate, prices} = location.state
    const [isLoaded, setIsLoaded] = useState(false)
    const [info, setInfo] = useState({})

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${filmId}&apikey=c38fb01d`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setIsLoaded(true)
                setInfo(data)
            });
    }, [])

    if (!isLoaded){
        return <LoadingPage />
    }
    else{
    return(
    <div className="filmPage">

        <div className="filmWrapper">
            <div className="imageBox">
                <img src={poster} className="filmPoster"/>
            </div>
            <div className="ticketButton">
                <Link style={{color: 'white'}} to={{
                        pathname: '/ticket',
                        state: {
                            filmName: info.Title,
                            poster: poster,
                            tickets: tickets,
                            screeningId: screeningId,
                            forceUpdate: forceUpdate,
                            prices: prices
                        }}}>
                            Вибрати квиток
            
                </Link>
            </div>
        </div>

        <div className="infoBox">   
            <div className="filmName">
                {info.Title}
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Year:
                </div>
                <div className="filmValue">
                    {info.Year}
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Director: 
                </div>
                <div className="filmValue">
                    {info.Director}
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Released:
                </div>
                <div className="filmValue">
                    {info.Released}
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Country:
                </div>
                <div className="filmValue">
                    {info.Country}
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Genre:
                </div>
                <div className="filmValue">
                    {info.Genre}
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Runtime:
                </div>
                <div className="filmValue">
                    {info.Runtime}
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Production:
                </div>
                <div className="filmValue">
                    {info.Production}
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Writer:
                </div>
                <div className="filmValue">
                    {info.Writer}
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    Actors:
                </div>
                <div className="filmValue">
                    {info.Actors}
                </div>
            </div>
            <div className="filmCharacteristic">
                <div className="filmKey">
                    IMDB Rating:
                </div>
                <div className="filmValue">
                    {info.imdbRating}
                </div>
            </div>
            <div className="filmDescription">
                {info.Plot}
            </div>
        </div>
    </div>)
    }
}

export default FilmPage