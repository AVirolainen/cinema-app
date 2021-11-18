import React, {useCallback, useContext, useEffect, useState} from "react"
import "./Home.css"
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {FilmData} from "./FilmData"
import {Link} from "react-router-dom"
import { DatePicker, Space } from 'antd';
import {useHttp} from "../../hooks/http.hook"

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Home = ()=>{
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const {request} = useHttp()

    const getPlaces = useCallback(async () => {
        try {
          const fetched = await request('http://localhost:8000/api/screenings/', 'GET')
          console.log(fetched);
        } catch (e) {}
      }, [request])

      useEffect(() => {
        getPlaces()
      }, [getPlaces])


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
                                                    <div className="ticketText">Виберіть дату та час сеансу</div>
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
    return (
        <div className="homePage">
            <Carousel>
                <div className="carouselBlock carousel">
                    <div className="insideCarousel">
                    {FilmData[0].map((item)=>{
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
                                            <div className="ticketText">Виберіть дату та час сеансу</div>
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
                    {FilmData[1].map((item)=>{
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
                                            <div className="ticketText">Виберіть дату та час сеансу</div>
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
                    {FilmData[2].map((item)=>{
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
                                            <div className="ticketText">Виберіть дату та час сеансу</div>
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
      </div>)
}

export default Home