'use client'

import React, { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactNode, ReactPortal, useEffect, useState } from 'react';
// import Navi from "../navi"
import { Avatar, Typography, Space, Link } from '@arco-design/web-react';
import { IconUser } from '@arco-design/web-react/icon';
const { Text } = Typography;
import { Table, TableColumnProps } from '@arco-design/web-react';
import { Col, Row } from "antd";
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
import { Descriptions } from '@arco-design/web-react';
const data = [
  {
    label: '用户名',
    value: 'User1',
  },
  {
    label: '积分余额',
    value: '123',
  },
  {
    label: '车牌号',
    value: 'bj-xxxxxxxxxx',
  },
  {
    label: '地址',
    value: '0xcDe6De3286009EB190c78183684f04212a0fd5AA',
  },
  {
    label: '用户私钥',
    value: 'c492ce96c73feb2bb6b2440bf9179b691895890ede357db2773cb16b73fada85',
  },
  {
    label: '用户公钥',
    value: '0x6E5F9A23B5473D7C15E2ECC801BDAEBE76DD50B646F9B8CE84DC7A69D0E23543',
  },
];

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

export default function Block_chain3() {


  var localhost = "http://127.0.0.1:7545"
  var Web3 = require("web3")
  var web3 = new Web3(new Web3.providers.HttpProvider(localhost))
  web3.eth.getAccounts(function (error: any, result: any) {
      console.log("账户列表地址：");
      console.log(result);
  });
  
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
        <Menu mode='horizontal' theme='dark' defaultSelectedKeys={['2']}>
            <MenuItem key='0' style={{ padding: 0, marginRight: 38 }} disabled>
            <Typography>
                <Typography.Title heading={3} style={{color:"white"}}>基于区块链的电子收费积分系统</Typography.Title>
            </Typography>
            </MenuItem>
            <MenuItem key='1'><Link href={"/block_chain/"}>Home</Link></MenuItem>
            <MenuItem key='2'><Link href={"/block_chain/userinfo"}>UserInfo</Link></MenuItem>
            <MenuItem key='3'><Link href={"/block_chain/dealsearch"}>Deal Search</Link></MenuItem>
            <MenuItem key='4'><Link href={"/block_chain/usersearch"}>User Search</Link></MenuItem>
            {/* <MenuItem key='3'><Link href={"./block_chain/dealsearch"}>Deal Search</Link></MenuItem>
            <MenuItem key='4'><Link href={"./block_chain/usersearch"}>User Search</Link></MenuItem> */}

        </Menu>
        </div>
        <Row justify='center' gutter={[24, 10]}>
            <Col span={10}></Col>
            <Col span={13}>
            <Typography>
                <Typography.Title style={{color:"color(srgb 0.35 0.4425 0.875)"}}>用户查询</Typography.Title>
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
            {/* <Tabs defaultActiveTab='1'>
                <TabPane key='1' title='登陆'>
                    <Form style={{ width: 600 }} autoComplete='off'>
                        <FormItem label='Username'>
                            <Input placeholder='please enter your username...' />
                        </FormItem>
                        <FormItem label='Password'>
                            <Input placeholder='please enter your Password...' />
                        </FormItem>
                        <FormItem wrapperCol={{ offset: 5 }}>
                            <Button type='primary'  onClick={success}>
                                login
                            </Button>
                        </FormItem>
                    </Form>
                </TabPane>

                <TabPane key='2' title='注册'>
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
                            <Button type='primary'  onClick={success2}>
                                sign up
                            </Button>
                        </FormItem>
                    </Form>
                </TabPane>
            </Tabs> */}
            <Descriptions column={1}
        title='个人信息'
        border
        data={data}
        labelStyle={{ textAlign: 'right', paddingRight: 36 }} />

{/* 用户名（输出）
积分余额（输出）
车牌号（输出）
用户私钥（输出）
用户公钥（输出） */}

            
            </Col>
            <Col span={1}></Col>
            <Button type='primary'>修改信息</Button>
            </Row>
            </div>
        </>
    )
}