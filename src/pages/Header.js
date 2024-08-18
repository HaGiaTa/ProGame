import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { HomeFilled, GiftFilled, LoginOutlined, CustomerServiceFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;


const HeaderApp = () => {
    const navigate = useNavigate();





    const items = [
        {
            key: '',
            label: 'Home',
            icon: <HomeFilled />
        },

        {
            key: 'login',
            label: 'Login',
            icon: <LoginOutlined />
        }

    ]

    const onclick = (e) => {
        navigate(`/${e.key}`)

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