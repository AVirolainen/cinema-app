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
import "./ModalTicket.css"

const CollectionCreateForm = ({ visible, onCreate, onCancel, chairsList }) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  console.log(chairsList)

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

  return (
    <Modal
      visible={visible}
      title="Замовити квиток"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
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

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
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
