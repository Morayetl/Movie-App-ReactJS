import React from 'react';
// @ts-ignore
import { Card, Col, Row, Rate, Button, Menu, Avatar } from 'antd';
import './NavBar.css';
import { UserOutlined } from '@ant-design/icons';


class NavBar extends React.Component {
    render(){
        return (
            <div>
                {/* 
                    // @ts-ignore */}
                <Menu mode="horizontal" className="NavBar">
                    <Menu.Item key="mail">
                        App name
                    </Menu.Item>
                    <Menu.Item key="app">
                        Latest
                    </Menu.Item>
                    <Menu.Item key="app2">
                        Categories
                    </Menu.Item>
                    {/* 
                        // @ts-ignore */}
                    <Menu.Item key="app3" className="align-right-last">
                        <Avatar shape="square" size="large" icon={<UserOutlined/>}/>
                        <span> User name</span>
                    </Menu.Item>
                </Menu>                
            </div>
        );        
    }

}


export default NavBar;