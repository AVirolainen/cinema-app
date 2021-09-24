import React from "react"
import "./Home.css"
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {FilmData} from "./FilmData"
import {Link} from "react-router-dom"

const Home = ()=>{
    console.log(FilmData)
    return (
        <div className="homePage">
            <Carousel autoplay>
                <div className="carouselBlock">
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
                            </div>
                        )
                    })}
                    </div>
                </div >
        </Carousel>
      </div>)
}

export default Home