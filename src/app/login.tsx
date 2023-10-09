'use client'
import React, { useState } from 'react';
import { Client  as app_client ,Account,ID} from 'appwrite';
import { Modal } from '@arco-design/web-react';
import { Image } from '@arco-design/web-react';
import { Form, Input, Button, Checkbox } from '@arco-design/web-react';
const FormItem = Form.Item;
import { Tabs } from '@arco-design/web-react';
const TabPane = Tabs.TabPane;
import { Menu } from '@arco-design/web-react';
import { Grid } from '@arco-design/web-react';
const Row = Grid.Row;
const Col = Grid.Col;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Login = () => {
  const [formData, setFormData] = useState({ userId: '', email:'', password: '' });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // setFormData({username:name,password:value});
  };

  const handleSubmit = () => {
    console.log('登录数据：', formData); 
    // 在这里执行登录逻辑
    const client = new app_client();
    client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('651eb121b08c1e77f024');
    const account = new Account(client);
    // const promise = account.create(formData.userId, formData.email, formData.password);
    const promise = account.createEmailSession(formData.email, formData.password);




    promise.then(function (response) {
        console.log(response); // Success
        const user = account.get();

        user.then(function (response) {
            console.log(response); // Success
            Modal.success({
                title: `${response.name}登录成功`,
                // content:
              });
        }, function (error) {
            console.log(error); // Failure
            Modal.error({
                title: '登录失败',
              });
        });
        
    }, function (error) {
        console.log(error); // Failure
        Modal.error({
            title: '登录失败',
          });
    });
  };

  return (
    <div>
    {/* <Row justify='center'>
        <Col span={24}><h2>登录</h2></Col>
        <Col span={24}>
            <Input type="text" style={{ width: 350, margin: 12 }} name="userId" placeholder="用户id" onChange={handleChange} />
            <Input type="email" style={{ width: 350, margin: 12 }} name="email" placeholder="邮箱" onChange={handleChange} />
            <Input.Password type="password" style={{ width: 350, margin: 12 }} name="password" placeholder="密码" onChange={handleChange} />
        </Col>
        <Col span={24}><Button type='primary' onClick={handleSubmit}>登录</Button></Col>
    </Row> */}

    <Row justify='center'><h2>登录</h2></Row>
    {/* <Row justify='center'><Input type="text" style={{ width: 350, margin: 12 }} name="userId" placeholder="用户id" onChange={handleChange} /></Row> */}
    <Row justify='center'><input type="email" style={{ width: 350, margin: 12 }} name="email" placeholder="邮箱" onChange={handleChange} /></Row>
    <Row justify='center'><input type="password" style={{ width: 350, margin: 12 }} name="password" placeholder="密码" onChange={handleChange} /></Row>
    <Row justify='start'><Col span={16}></Col><Button type='primary' onClick={handleSubmit}>login</Button></Row>
    </div>
  );
};
export default Login;