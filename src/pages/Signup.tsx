import { useContext } from 'react';
import { Input, Form, Button } from 'antd';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/authContext';
import { IUser } from '../context/types';

const Signup = () => {
    const navigate= useNavigate();
    const {register} = useContext(AuthContext);
    const onFinish = (values:IUser) => {
        console.log('Success:', values);
        const user = {...values,confirmed:true}
        console.log(user);
         register(user);
        navigate('/login');
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>
        <h2>Signup</h2>
        <div className="form-wrapper">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
         <Form.Item
            label="name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your  name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your  email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your  username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
      </>
    )
}

export default Signup
