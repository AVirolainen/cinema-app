import React from "react"
import "./LoadingPage.css"

import 'antd/dist/antd.css';
import { Spin, Space } from 'antd';

const LoadingPage = ()=>{
    return(
        <div className="loadingPage">
            <Spin size="large"/>
        </div>
    )
}

export default LoadingPage