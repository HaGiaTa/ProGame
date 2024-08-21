import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { HomeFilled, GiftFilled, LoginOutlined, CustomerServiceFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;


const HeaderApp = () => {
    const navigate = useNavigate();
    const isLogin = localStorage.getItem('isLogin')
    const avtUser = localStorage.getItem('avtUser')





    const items = [
        {
            key: '',
            label: 'Home',
            icon: <HomeFilled />
        },
        avtUser &&
        {
            disabled: true,
            icon: <img style={{ width: 32, height: 32 }} src={avtUser} />
        },
        !isLogin ?
            {
                key: 'login',
                label: 'Login',
                icon: <LoginOutlined />
            } : {
                key: 'logout',
                label: 'Logout',
                icon: <LoginOutlined style={{
                    fontSize: '18px',
                    fontWeight: '900',
                }} />
            }


    ]

    const onclick = (e) => {
        if (e?.key === 'logout') {
            localStorage.removeItem('isLogin')
            localStorage.removeItem('avtUser')
            return window.location.reload()
        }
        navigate(`/${e?.key}`)

    }

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    onClick={onclick}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>


        </Layout>
    );
};
export default HeaderApp;