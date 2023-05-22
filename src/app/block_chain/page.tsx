'use client'

import React, { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactNode, ReactPortal, useEffect, useState } from 'react';
import Navi from "../navi"
import { Avatar, Typography, Space, Link } from '@arco-design/web-react';
import { IconUser } from '@arco-design/web-react/icon';
const { Text } = Typography;
import { Table, TableColumnProps } from '@arco-design/web-react';
import { Col, Row } from "antd";
import {useRequest} from '../../../hooks/useRequest'
// import { Modal } from 'antd';
import { Modal } from '@arco-design/web-react';
import { Image } from '@arco-design/web-react';
import { Form, Input, Button, Checkbox } from '@arco-design/web-react';
const FormItem = Form.Item;
import { Tabs } from '@arco-design/web-react';
const TabPane = Tabs.TabPane;
import { Menu } from '@arco-design/web-react';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function success() {
    Modal.success({
      title: '登录成功',
    });
  }
  function success2() {
    Modal.success({
      title: '注册成功',
    });
  }

export default function Block_chain() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // 处理登录逻辑
    // 可以在这里调用区块链钱包相关的功能
  };
    //基于区块链的电子收费积分系统
    return(
        <>
        <div>
        <div className='menu-demo'>
        <Menu mode='horizontal' theme='dark' defaultSelectedKeys={['1']}>
            <MenuItem key='0' style={{ padding: 0, marginRight: 38 }} disabled>
            <Typography>
                <Typography.Title heading={3} style={{color:"white"}}>基于区块链的电子收费积分系统</Typography.Title>
            </Typography>
            </MenuItem>
            <MenuItem key='1'><Link href={"/block_chain/"}>Home</Link></MenuItem>
            <MenuItem key='2'><Link href={"/block_chain/userinfo"}>User Info</Link></MenuItem>
            <MenuItem key='3'><Link href={"/block_chain/dealsearch"}>Deal Search</Link></MenuItem>
            <MenuItem key='4'><Link href={"/block_chain/usersearch"}>User Search</Link></MenuItem>
        </Menu>
        </div>
        <Row justify='center' gutter={[24, 10]}>
            <Col span={10}></Col>
            <Col span={13}>
            <Typography>
                <Typography.Title style={{color:"color(srgb 0.35 0.4425 0.875)"}}>登录/注册系统</Typography.Title>
            </Typography>
            </Col>
            <Col span={1}></Col>
        </Row>

        <Row justify='center' gutter={[24, 60]}>
            {/* <Col span={7}></Col>
            <Col span={16}>
            <Typography>
                <Typography.Title>基于区块链的电子收费积分系统</Typography.Title>
            </Typography>
            </Col>
            <Col span={1}></Col> */}
        {/* </Row>

            <Row justify='center' gutter={[24, 80]}> */}
            <Col span={7}></Col>
            <Col span={16}>
            <Tabs defaultActiveTab='1'>
                <TabPane key='1' title='登陆'>
                    {/* <Typography.Paragraph >Content of Tab Panel 1</Typography.Paragraph> */}
                    <Form style={{ width: 600 }} autoComplete='off'>
                        <FormItem label='Username'>
                            <Input placeholder='please enter your username...' />
                        </FormItem>
                        <FormItem label='Password'>
                            <Input placeholder='please enter your Password...' />
                        </FormItem>
                        {/* <FormItem wrapperCol={{ offset: 5 }}>
                            <Checkbox>I have read the manual</Checkbox>
                        </FormItem> */}
                        <FormItem wrapperCol={{ offset: 5 }}>
                            <Button type='primary'  onClick={success}>
                                login
                            </Button>
                        </FormItem>
                    </Form>
                </TabPane>

                <TabPane key='2' title='注册'>
                    {/* <Typography.Paragraph >Content of Tab Panel 2</Typography.Paragraph> */}
                    <Form style={{ width: 600 }} autoComplete='off'>
                        <FormItem label='Username'>
                            <Input placeholder='please enter your username...' />
                        </FormItem>
                        <FormItem label='Password'>
                            <Input placeholder='please enter your Password...' />
                        </FormItem>
                        <FormItem label='Password'>
                            <Input placeholder='please confirm your Password again...' />
                        </FormItem>
                        <FormItem wrapperCol={{ offset: 5 }}>
                            <Checkbox>I have read the manual</Checkbox>
                        </FormItem>
                        <FormItem wrapperCol={{ offset: 5 }}>
                            {/* <Button type='primary'>Submit</Button> */}
                            <Button type='primary'  onClick={success2}>
                                sign up
                            </Button>
                        </FormItem>
                    </Form>
                </TabPane>
            </Tabs>
            </Col>
            <Col span={1}></Col>
            </Row>
            </div>
        </>
    )
}