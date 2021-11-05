import React, {useState} from "react"
import "./Home.css"
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {FilmData} from "./FilmData"
import {Link} from "react-router-dom"
import { DatePicker, Space } from 'antd';

import moment from 'moment';

function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

function disabledDate(current) {
    return current && current < moment().endOf('day');
}
  
function disabledDateTime() {
    return {
        disabledHours: () => range(0, 23).splice(0, 10),
        disabledMinutes: () => range(1, 60),
        disabledSeconds: () => range(1, 60),
    };
}


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
    if(windowDimensions.width < 1000){
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
                                        <div>
                                            <div className="ticketText">Виберіть дату та час сеансу</div>
                                            <div className="datePicker">
                                                <DatePicker
                                                    format="YYYY-MM-DD HH:mm:ss"
                                                    disabledDate={disabledDate}
                                                    disabledTime={disabledDateTime}
                                                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                                                    onChange={(date, dateString) => console.log(dateString)}
                                                    />
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
                                <div className="filmSchedule">
                                <div>
                                    <div className="ticketText">Виберіть дату та час сеансу</div>
                                    <div className="datePicker">
                                        <DatePicker
                                            format="YYYY-MM-DD HH:mm:ss"
                                            disabledDate={disabledDate}
                                            disabledTime={disabledDateTime}
                                            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                                            onChange={(date, dateString) => console.log(dateString)}
                                            />
                                    </div>
                                    </div>
                                    <div className="price">Ціна: 150грн</div>
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
                                    <div className="filmSchedule">
                                    <div>
                                    <div className="ticketText">Виберіть дату та час сеансу</div>
                                    <div className="datePicker">
                                        <DatePicker
                                            format="YYYY-MM-DD HH:mm:ss"
                                            disabledDate={disabledDate}
                                            disabledTime={disabledDateTime}
                                            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                                            onChange={(date, dateString) => console.log(dateString)}
                                            />
                                    </div>
                                    </div>
                                    <div className="price">Ціна: 150грн</div>
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
                                <div className="filmSchedule">
                                    <div>
                                    <div className="ticketText">Виберіть дату та час сеансу</div>
                                    <div className="datePicker">
                                        <DatePicker
                                            format="YYYY-MM-DD HH:mm:ss"
                                            disabledDate={disabledDate}
                                            disabledTime={disabledDateTime}
                                            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                                            onChange={(date, dateString) => console.log(dateString)}
                                            />
                                    </div>
                                    </div>
                                    <div className="price">Ціна: 150грн</div>
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