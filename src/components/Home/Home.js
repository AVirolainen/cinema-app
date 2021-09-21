import React from "react"
import "./Home.css"
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {FilmData} from "./FilmData"

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
                                <img src={item.logo} className="filmposter"/>
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
                                <img src={item.logo} className="filmposter"/>
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
                                <img src={item.logo} className="filmposter"/>
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