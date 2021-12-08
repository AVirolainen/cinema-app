import React, { useEffect, useState } from "react"
import chair_image from "./assets/chair.svg"
import chair_picked from "./assets/chair_picked.svg"
import { Popover, Button } from 'antd';

const ChairHandler = (props)=>{
    const row = props.row
    const column = props.column
    const chairPrice = props.chairPrice

    const content = (
        <div style={{fontSize: "24px"}}>
          <p>Ряд: {column}</p>
          <p>Місце: {row}</p>
          <p>Ціна: {chairPrice}</p>
        </div>
      );
    

    console.log(chairPrice)
    const [tempQ, setTempQ] = useState(props.chairValue)

    const showPlace = ()=>{
        for(let k=0; k<props.chairsList.length; k++){
            if(JSON.stringify([row, column, chairPrice]) === JSON.stringify(props.chairsList[k])){
                const index = props.chairsList.indexOf(props.chairsList[k]);
                if (index > -1) {
                    let temp = props.chairsList
                    temp.splice(index, 1)
                    props.setChairsList(temp)    
                    setTempQ("free")
                    return 1   
                  }
            }
        }
        let place = [row, column, chairPrice]
        setTempQ("banned")
        props.setChairsList(props.chairsList.concat([place]))      
             
    }
    return(
        <Popover content={content} title="Інформація">
            <img src={tempQ == "free" ? chair_image : chair_picked} className="chairImage" onClick={showPlace}/>
        </Popover>
    )
}

    

export default ChairHandler