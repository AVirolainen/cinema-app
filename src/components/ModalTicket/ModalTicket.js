import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Modal,
  Radio
} from 'antd';
import {useHttp} from '../../hooks/http.hook'
import "./ModalTicket.css"
import { useHistory } from "react-router-dom";
import rerenderTree from "../../index.js"

const CollectionCreateForm = ({ visible, onCreate, onCancel, chairsList, price, screeningId }) => {
  let history = useHistory();
  const [form] = Form.useForm();
  const { Option } = Select;
  const {request} = useHttp()

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+38">+38</Option>
      </Select>
    </Form.Item>
  );

  const pressHandler = async (values) => {
    console.log(values)
    let requestBody = {
    'tickets': chairsList.map(item=>{
      return {
        "screening": screeningId,
        "row": item[1],
        "seat": item[0]
      }
    }),
    "customer_mail": values.email,
    "price": price+".00"
    }

    history.push("/inal")


    try {
        const data = await request('https://kinolove.herokuapp.com/api/orders/', 'POST', requestBody)
        console.log(data);
    }catch (e) {}
  }

  return (
    <Modal
      visible={visible}
      title="Замовити квиток"
      okText="Замовити"
      cancelText="Закрити"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            pressHandler(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please input the email',
            },
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
          },
          ]}
        >
          <Input />
        </Form.Item>

      {/* <Form.Item */}
      {/*   name="phone" */}
      {/*   label="Phone Number" */}
      {/*   rules={[ */}
      {/*     { */}
      {/*       required: true, */}
      {/*       message: 'Please input your phone number!', */}
      {/*     }, */}
      {/*   ]} */}
      {/* > */}
      {/*   <Input */}
      {/*     addonBefore={prefixSelector} */}
      {/*     style={{ */}
      {/*       width: '100%', */}
      {/*     }} */}
      {/*   /> */}
      {/* </Form.Item> */}
      {/*  */}
      <div className="modalTickets">
      Квитки
        {chairsList.map(item => {
          return(
            <div className="modalItem">
              <div>Ряд: {item[1]}</div>
              <div>Місце: {item[0]}</div>
            </div>
            )
        })}
      </div>
      </Form>
    </Modal>
  );
};

export default CollectionCreateForm
