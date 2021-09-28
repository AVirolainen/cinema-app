import React, { useEffect, useState } from "react"
import chair_image from "./assets/chair.svg"
import chair_picked from "./assets/chair_picked.svg"

const ChairHandler = (props)=>{
    const row = props.row
    const column = props.column

    const [tempQ, setTempQ] = useState(props.chairValue)

    const showPlace = ()=>{
        for(let k=0; k<props.chairsList.length; k++){
            if(JSON.stringify([row, column]) === JSON.stringify(props.chairsList[k])){
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
        let place = [row, column]
        setTempQ("banned")
        props.setChairsList(props.chairsList.concat([place]))      
             
    }
    return(
        <img src={tempQ == "free" ? chair_image : chair_picked} className="chairImage" onClick={showPlace}/>
    )
}

    

export default ChairHandler