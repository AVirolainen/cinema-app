import React, {useState} from "react"
import "./Soon.css"
import {FilmData} from "./FilmData"
import { Carousel } from 'antd';
import {Link} from "react-router-dom"
import 'antd/dist/antd.css';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Soon = ()=>{
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    console.log(windowDimensions)

    if(windowDimensions.width < 1000){
        const temp = []
        FilmData.map((item)=>{
            item.map((innerItem)=>{
                temp.push(innerItem)
        })
    })
    }

    return (
        <div className="soonPage">
            <Carousel autoplay>
                <div className="carouselBlock carousel">
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
                
            </Carousel>
        </div>
        )
    }


export default Soon