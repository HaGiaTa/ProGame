import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../styles/register.css';
export const Register = () => {

    const onFinish = async (value) => {
        console.log("🚀 ~ onFinish ~ value:", value)
        if (value?.password.length < 6) {
            return alert('Password must be at least 6 characters')
        }
        else if (value?.confirmPassword !== value?.password) {
            return alert('Pasword does not match')
        }
        else {
            try {
                const result = await firebase.auth().createUserWithEmailAndPassword(value?.email, value?.password);
                await result.user.updateProfile({
                    displayName: value?.username,
                });

            } catch (error) {
                console.error('error', error.message)
                // console.log(error.message);
            }
        }
    }
    return (
        <div className='content'>
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
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
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
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
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
                    label="Confirm Password"
                    name="confirmPassword"
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
                ><Button type="primary" style={{ marginRight: 10 }} >
                        Google
                    </Button>


                    <Button type="primary" htmlType="submit"><a href='login'>Login</a>

                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}
