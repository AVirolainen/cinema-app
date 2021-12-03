import React, {useCallback, useContext, useEffect, useState} from "react"
import "./Home.css"
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {FilmData} from "./FilmData"
import {Link} from "react-router-dom"
import { DatePicker, Space } from 'antd';
import {useHttp} from "../../hooks/http.hook"
import LoadingPage from "../LoadingPage/LoadingPage"

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

function useForceUpdate(){
    const [value, setValue] = useState(0); 
    return () => setValue(value => value + 1);
}

const Home = ()=>{
    document.title = "Kinolove - Сейчас в кино"
    const forceUpdate = useForceUpdate();

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const {request} = useHttp()
    const [filmsInfo, setFilmsInfo] = useState()

    const getPlaces = useCallback(async () => {
        try {
          const fetched = await request('https://kinolove.herokuapp.com/api/movies/', 'GET')
          console.log(fetched)
          setFilmsInfo(fetched);
        } catch (e) {}
      }, [request])

      useEffect(() => {
        getPlaces()
      }, [getPlaces, windowDimensions])


    if(windowDimensions.width < 1000){
        const temp = []
        FilmData.map((item)=>{
            item.map((innerItem)=>{
                temp.push(innerItem)
            })
        })
        return(
            <div className="homePage">
                <Carousel>
                    {temp.map((item)=>{
                        return (
                            <div className="carouselBlock">
                                <div className="insideCarousel">
                                    <div className="filmbox">
                                        <Link to={{
                                                pathname: '/film',
                                                state: {
                                                    filmId: item.id,
                                                    poster: item.logo
                                                }}}>
                                            <img src={item.logo} className="filmposter"/>
                                        </Link>
                                        <div className="filmname">{item.name}</div>
                                        <div className="filmSchedule" style={{backgroundImage: "url(" + item.logo + ")"}}>
                                            <div className="filmWrapperSchedule">
                                                <div>
                                                    <div className="ticketText">Виберіть сеанс</div>

                                                </div>
                                                <div className="price">Ціна: 150грн</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        )
    }



    if(filmsInfo){
    return (
        <div className="homePage">
            <Carousel>
                <div className="carouselBlock carousel">
                    <div className="insideCarousel">
                    {FilmData[0].map((item, index)=>{
                        return (
                            <div className="filmbox">
                                <img src={item.logo} className="filmposter"/>
                                
                                <div className="filmname">{item.name}</div>
                                <div className="filmSchedule" style={{backgroundImage: "url(" + item.logo + ")"}}>
                                    <div className="filmWrapperSchedule">
                                        <div>
                                            <div className="ticketText">Виберіть час сеансу</div>
                                            <div className="screeningsWrapper">
                                            {
                                                filmsInfo[index].screenings.map((innerItem)=>{
                                                    let hours = new Date(innerItem.date_time).getHours()
                                                    let minutes = new Date(innerItem.date_time).getMinutes()
                                                    let day = new Date(innerItem.date_time).getDate()
                                                    let month = new Date(innerItem.date_time).getMonth()
                                                    return(
                                                        <Link 
                                                        to={{
                                                            pathname: '/film',
                                                            state: {
                                                                filmId: item.id,
                                                                poster: item.logo,
                                                                tickets: innerItem.tickets,
                                                                screeningId: innerItem.id,
                                                                prices: {
                                                                    defaultPrice: innerItem.default_price,
                                                                    mediumPrice: innerItem.medium_price,
                                                                    expensivePrice: innerItem.expensive_price
                                                                }
                                                            }}}>
                                                        <div className="hoursBlock">
                                                        <div>
                                                            Дата: {day}.{month}
                                                        </div>
                                                        <div>
                                                            Время: {hours}:{minutes}
                                                        </div>
                                                        <div>
                                                            Цена: {innerItem.default_price}-{innerItem.expensive_price}
                                                        </div>

                                                        </div>
                                                    </Link>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className="carouselBlock">
                <div className="insideCarousel">
                    {FilmData[1].map((item, index)=>{
                        return (
                            <div className="filmbox">
                                <Link to={{
                                        pathname: '/film',
                                        state: {
                                            filmId: item.id,
                                            poster: item.logo
                                        }}}>
                                    <img src={item.logo} className="filmposter"/>
                                </Link>
                                <div className="filmname">{item.name}</div>
                                    <div className="filmSchedule" style={{backgroundImage: "url(" + item.logo + ")"}}>
                                    <div className="filmWrapperSchedule">
                                        <div>
                                            <div className="ticketText">Виберіть час сеансу</div>
                                            <div className="screeningsWrapper">
                                            {
                                                filmsInfo[index+3].screenings.map((innerItem)=>{
                                                    let hours = new Date(innerItem.date_time).getHours()
                                                    let minutes = new Date(innerItem.date_time).getMinutes()
                                                    let day = new Date(innerItem.date_time).getDate()
                                                    let month = new Date(innerItem.date_time).getMonth()
                                                    return(
                                                    <Link 
                                                        to={{
                                                            pathname: '/film',
                                                            state: {
                                                                filmId: item.id,
                                                                poster: item.logo,
                                                                tickets: innerItem.tickets,
                                                                screeningId: innerItem.id
                                                            }}}>
                                                        <div className="hoursBlock">
                                                        <div>
                                                            Дата: {day}.{month}
                                                        </div>
                                                        <div>
                                                            Время: {hours}:{minutes}
                                                        </div>
                                                        <div>
                                                            Цена: {innerItem.default_price}-{innerItem.expensive_price}
                                                        </div>
                                                        </div>
                                                    </Link>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                        <div className="price">Ціна: 150грн</div>
                                    </div>
                                </div>

                                
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className="carouselBlock">
                <div className="insideCarousel">
                    {FilmData[2].map((item, index)=>{
                        return (
                            <div className="filmbox">
                                <Link to={{
                                        pathname: '/film',
                                        state: {
                                            filmId: item.id,
                                            poster: item.logo
                                        }}}>
                                    <img src={item.logo} className="filmposter"/>
                                </Link>
                                <div className="filmname">{item.name}</div>
                                <div className="filmSchedule" style={{backgroundImage: "url(" + item.logo + ")"}}>
                                    <div className="filmWrapperSchedule">
                                        <div>
                                            <div className="ticketText">Виберіть час сеансу</div>
                                            <div className="screeningsWrapper">
                                            {
                                                filmsInfo[index+6].screenings.map((innerItem)=>{
                                                    let hours = new Date(innerItem.date_time).getHours()
                                                    let minutes = new Date(innerItem.date_time).getMinutes()
                                                    let day = new Date(innerItem.date_time).getDate()
                                                    let month = new Date(innerItem.date_time).getMonth()
                                                    return(
                                                    <Link 
                                                        to={{
                                                            pathname: '/film',
                                                            state: {
                                                                filmId: item.id,
                                                                poster: item.logo,
                                                                tickets: innerItem.tickets,
                                                                screeningId: innerItem.id,
                                                                prices: {
                                                                    defaultPrice: innerItem.default_price,
                                                                    mediumPrice: innerItem.medium_price,
                                                                    expensivePrice: innerItem.expensive_price
                                                                }
                                                            }}}>
                                                        <div className="hoursBlock">
                                                        <div>
                                                            Дата: {day}.{month}
                                                        </div>
                                                        <div>
                                                            Время: {hours}:{minutes}
                                                        </div>
                                                        <div>
                                                            Цена: {innerItem.default_price}-{innerItem.expensive_price}
                                                        </div>
                                                        </div>
                                                    </Link>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                        <div className="price">Ціна: 150грн</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div >
        </Carousel>
      </div>)}
    return <LoadingPage></LoadingPage>
}

export default Home