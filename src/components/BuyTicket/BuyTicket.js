import React, {useEffect, useState} from "react"
import "./BuyTicket.css"
import { Form, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';
import LoadingPage from "../LoadingPage/LoadingPage.js"
import { useLocation } from "react-router"
import {Link} from "react-router-dom"

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const BuyTicket = ()=>{
    const location = useLocation()
    const {filmName, poster} = location.state

    const onFinish = (values) => {
        console.log(values);
    };


    return(
    <div className="buyTicket">

        <div className="filmWrapper">
            <div className="imageBox">
                <img src={poster} className="filmPoster"/>
            </div>
        </div>

        <div className="buyTicketBox">   
            <Form {...layout} className="ticketForm" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
              <Form.Item
                name={['user', 'name']}
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item 
                name={['user', 'email']}
                label="Email"
                rules={[
                  {
                    type: 'email',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'age']}
                label="Age"
                rules={[
                  {
                    type: 'number',
                    min: 0,
                    max: 99,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item name={['user', 'website']} label="Website">
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'introduction']} label="Introduction">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
        </div>
    </div>)
}

export default BuyTicket