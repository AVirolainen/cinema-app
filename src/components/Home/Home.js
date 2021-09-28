import React, {useState} from "react"
import "./Home.css"
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {FilmData} from "./FilmData"
import {Link} from "react-router-dom"

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Home = ()=>{
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    console.log(windowDimensions)
    if(windowDimensions.width < 900){
        const temp = []
        FilmData.map((item)=>{
            item.map((innerItem)=>{
                temp.push(innerItem)
            })
        })
        return(
            <div className="homePage">
                <Carousel autoplay>
                    {temp.map((item)=>{
                        return (
                            <div className="carouselBlock carousel">
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
            <Carousel autoplay>
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