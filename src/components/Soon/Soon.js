import React, {useState} from "react"
import "./Soon.css"
import {FilmData} from "./FilmData"
import { Carousel } from 'antd';
import {Link} from "react-router-dom"
import 'antd/dist/antd.css';
import MetaTags from 'react-meta-tags';

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
            <MetaTags>
                <title>Скоро в кинотеатрах</title>
                <meta id="meta-description" name="description" content="Скоро в кинотеатрах Kinolove" />
                <meta name="keywords" content="скоро в кинотеатре Kinolove, скоро в кино, анонс" />
                <meta id="og-title" property="og:title" content="Скоро" />
                <meta name="author" content="Stanislav Rudenko" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>

            <h1 style={{color: "white", paddingTop: "30px"}}>Скоро в кинотеатре Kinolove</h1>
            <Carousel autoplay>
                <div className="carouselBlock carousel">
                    <div className="insideCarousel">
                    {FilmData[0].map((item)=>{
                        return (
                            <div className="filmbox">
                                <img src={item.logo} style={{width: "100%"}}/>
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