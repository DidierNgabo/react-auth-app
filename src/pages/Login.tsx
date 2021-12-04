import React, { useContext } from 'react';
import { Input, Form, Button } from 'antd';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/authContext';
import { ILogin } from '../context/types';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { token, login } = useContext(AuthContext);
    console.log(token);
    const onFinish = (values:ILogin) => {
      console.log('Success:', values);
      login(values);
      navigate('/');
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className="page-container">
        <div className="logo-container">
          <div className="tagline">
            <h2>Zatec Dashboard </h2>
            <p>Welcome please login first</p>
          </div>
        </div>
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
              label="Username"
              name="identifier"
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
          <Link to="/signup">create account</Link>
        </div>
      </div>
    );
  };

export default Login
