import React, {useRef, useState} from "react"
import "./TicketPage.css"
import moment from 'moment';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd'
import {Link} from "react-router-dom";
import { useLocation } from "react-router"
import chair from "./assets/chair.svg"
import chair_image from "./assets/chair.svg"
import chair_picked from "./assets/chair_picked.svg"
import ChairHandler from "./ChairHandler";
import CollectionCreateForm from "../ModalTicket/ModalTicket"
import { Button, Modal } from 'antd';

const TicketPage = ()=>{
    const location = useLocation()
    const {filmName, poster, tickets, screeningId, prices, forceUpdate} = location.state

    console.log(prices)

    const [chairsList, setChairsList] = useState([])
    const [update, setUpdate] = useState(false)

    const [visible, setVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };

    const changeList = (list) => {
        setChairsList(list)
        setUpdate(!update)
    }

    const toBuyList = () => {
        if(chairsList.length == 0){
            //show modal with mistake 
            setIsModalVisible(true);
        }
        else{
            //show modal
            setVisible(true)
        }
    }

    let places = []

    for(let i=1; i<10; i++){
        let row = []
        for(let j=1; j<14; j++){
            row.push([i, j, "free"])
        }
        places.push(row)
    }

    return(
        <div className="ticketPage">

            <div className="filmWrapper">
                <div className="imageBox">
                    <img src={poster} className="filmPoster"/>
                </div>
            </div>

            <Modal title="Помилка" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Виберіть хоча б один квиток</p>
            </Modal>

            <div className="placesBox">
                <div className="placesWrapper">
                {
                    places.map((row)=>{
                        return(
                            <div className="chairsWrapper">
                                {
                                    row.map((item)=>{
                                        for(let j=0; j<tickets.length; j++){
                                            if(tickets[j].row == item[0] &&
                                               tickets[j].seat == item[1]){
                                                return <img src={chair_image} className="chairImage bought" />
                                            }
                                        }

                                        for(let k=0; k<chairsList.length; k++){
                                            if(JSON.stringify([item[1], item[0]]) === JSON.stringify(chairsList[k])){
                                                item[2]="banned"
                                            }
                                        }

                                        const chairPrice = (1<=item[0] && item[0]<=3) ? prices.defaultPrice :
                                                           (4<=item[0] && item[0]<=6) ? prices.mediumPrice : prices.expensivePrice

                                        return <ChairHandler 
                                                            chairPrice={chairPrice}
                                                            row={item[1]} 
                                                            column={item[0]}
                                                            chairsList={chairsList}
                                                            setChairsList={changeList}
                                                            chairValue={item[2]}
                                                            />
                                    })
                                }
                            </div>
                        )
                    })
                }
                </div>
                <div className="chairsSpec">
                    <div className="specSimple">
                        <img src={chair} />
                        Вільне місце
                    </div>
                    <div className="specSimple">
                        <img src={chair_picked} />
                        Обране
                    </div>
                    <div className="specSimple">
                        <img src={chair} className="bannedChair"/>
                        Зайняте місце
                    </div>
                </div>

                <div className="bottomWrapper">
                <div className="placesList">
                    <div className="placesHeader">
                        <div className="rowText">
                            Ряд
                        </div>
                        <div className="placeText">
                            Місце
                        </div>
                        <div className="priceText">
                            Ціна
                        </div>
                    </div>
                    {
                        chairsList.map((item, index)=>{
                            return (<div className="placeItem" key={index}>
                                        <div className="rowValue">
                                        {item[1]}
                                        </div>
                                        <div className="placeValue">
                                        {item[0]}
                                        </div>
                                        <div className="priceValue">
                                        {item[2]}
                                        </div>
                                    </div>
                                )
                        })
                    }
                    <div className="placesHeader">
                        <div className="rowText">
                            Всього:
                        </div>
                    </div>
                    <div className="fullPrice">{
                        
                        chairsList.reduce(((previousValue, currentValue) => previousValue + currentValue[2]), 0)
                        
                    }</div>
                    <div className="ticketButton" onClick={toBuyList}>
                        Купити квиток
                    </div>
                    <CollectionCreateForm
                        chairsList={chairsList}
                        visible={visible}
                        onCreate={onCreate}
                        screeningId={screeningId}
                        price={chairsList.length*150}
                        onCancel={() => {
                          setVisible(false);
                        }}
                      />
                </div>
                </div>
            </div>
        </div>
    )
}


export default TicketPage
