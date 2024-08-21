import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { checkEmail } from './checkEmail';

function Login({ user }) {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = () => {
        if (email !== '' || password !== '') {
            if (checkEmail(email, password, 'login')) {
                messageApi.open({
                    type: 'success',
                    content: 'Login Success',
                });
                localStorage.setItem('isLogin', true)
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            } else {
                messageApi.open({
                    type: 'error',
                    content: 'Login Failure',
                });
            }
        } else {
            messageApi.open({
                type: 'warning',
                content: 'Please enter a values!',
            });
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    const handleGoogleLogin = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user;
            if (user && user.multiFactor) {
                localStorage.setItem('avtUser', user.multiFactor?.user?.photoURL ?? '')
                localStorage.setItem('isLogin', true)
            }
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleEmailLogin = async (values) => {
        try {

            await firebase.auth().signInWithEmailAndPassword(values.email, values.password);
        } catch (error) {
            console.log(error.message);
        }
    }



    return (
        <div style={{ height: '60vh', display: 'flex', justifyContent: 'center' }} className='form'>
            {contextHolder}
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    width: '50%',
                }}
                initialValues={{
                    remember: true,
                }}
                // onFinish={handleEmailLogin}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input type='email' onChange={(e) => setEmail(e.target.value)} />
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
                    <Input.Password onChange={(e) => setPassword(e.target.value)} />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,

                    }}
                >
                    <Button type="primary" style={{ marginRight: 10 }} onClick={() => handleLogin()}>
                        Login
                    </Button>
                    <Button type="primary" style={{ marginRight: 10 }} onClick={handleGoogleLogin}>
                        Google
                    </Button>



                    <Button type="link" htmlType="submit"><a href='register'>Register</a>
                    </Button>
                </Form.Item>

            </Form>

        </div>
    );


}

export default Login


