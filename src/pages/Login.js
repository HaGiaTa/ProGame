import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../styles/login.css';
function Login({ user }) {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleGoogleLogin = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
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
        <div className='form'>


            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={handleEmailLogin}
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
                ><Button type="primary" style={{ marginRight: 10 }} onClick={handleGoogleLogin}>
                        Google
                    </Button>


                    <Button type="primary" htmlType="submit"><a href='register'>Register</a>

                    </Button>
                </Form.Item>

            </Form>

        </div>
    );


}

export default Login


