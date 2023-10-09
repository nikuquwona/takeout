'use client'

import React, { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactNode, ReactPortal, useEffect, useState } from 'react';
import Navi from "../navi"
import { Avatar, Typography,Button, Space, Card, InputNumber } from '@arco-design/web-react';
import { IconUser } from '@arco-design/web-react/icon';
const { Text } = Typography;
import { Table, TableColumnProps } from '@arco-design/web-react';
import { Col, Row } from "antd";
import {useRequest} from '../../../hooks/useRequest'
// import { Modal } from 'antd';
import { Modal } from '@arco-design/web-react';
import { Image } from '@arco-design/web-react';
import MapWithMarkers from './MapWithMarkers';
import { Form, Input, Checkbox } from '@arco-design/web-react';

import { useRef } from 'react';
import { Grid } from '@arco-design/web-react';
import { IconArrowRise, IconArrowFall, IconDelete } from '@arco-design/web-react/icon';

const FormItem = Form.Item;


// function handle_sub() {
//     Modal.success({
//       title: '登录成功',
//     });
//   }


export default function Ris() {
    // const [form] = Form.useForm();
    // const postsState = Form.useFormState('posts', form) || {};
    // const form = useRef();
    const [form] = Form.useForm();
    var param = {
        'agent_count': 2,
        'user_count': 3,
        'user_positions': [
          [1, 2],
          [3, 4],
          [5, 6]
        ]
      };
    const [ready,setReady]=useState<boolean>(false);
    const [data,setData]=useState<any>({});
    const { loading, result, error } = useRequest(`/get_agent_positions`,data,{method:'post',manual:true,ready:ready},"http://127.0.0.1:5000");

  
    // console.log("result",result)
    
    function handle_sub(){
       form.validate().then((values) => {
                // values 包含了表单的所有字段值
                console.log('Form values:', values);
          
                // 在这里可以执行提交操作，例如将数据发送到后端
                // ...
                setData(values)
                setReady(true)
                setTimeout(() => {
                    // if(fresh){
                    //   setFresh(false)
                    // }else{
                    //   setFresh(true)
                    // }
                    setReady(false)
                  }, 200);
                // setReady(false)
                

              }).catch((errorInfo) => {
                // 如果有验证错误，可以在这里处理错误信息
                console.log('Validation failed:', errorInfo);
              });
      };
    return (
        <>
        <Space direction='vertical' size={[120, 180]}>
        <Row justify='center'>
            <Typography>
                <Typography.Title>基于PPO的无人机-IRS部署策略设计与实现</Typography.Title>
            </Typography>
            <MapWithMarkers />
            {/* <Row justify='center'> 
            <Image
                width={800}
                src='/light.png'
                alt='lamp'
            />
           
            <Space size='large'>
                <Button status='danger'>Reset</Button>
                <Button status='success'>CLK</Button>
                <Button type='dashed'>mode 0</Button>
                <Button type='dashed'>mode 1</Button>
                <Button type='dashed'>mode 2</Button>
                <Button type='dashed'>mode 3</Button>
            </Space>
            </Row> */}
        

        <div>
        
        </div>
        </Row>
        {/* <MapWithMarkers /> */}
        <Row>
        {result&&result.map((agent:any, index:any) => (
            <div key={index}>
            <p>Name: {agent.name}</p>
            <p>Position: [{agent.position.join(', ')}]</p>
            </div>
        ))}
        </Row>
        <Row justify='center'>
            <Form 
                style={{ width: 600 }} 
                autoComplete='off'
                // ref={formRef}
                form={form}
                // style={{ width: 600 }}
                // autoComplete='off'
                // initialValues={{
                // users: [
                //     {
                //     username: 'aaa',
                //     address: 'bbb',
                //     },
                // ],
                // }}
                onValuesChange={(_, v) => {
                console.log(_, v);
                }}
            >
                {/* <FormItem label='Username'>
                    <Input placeholder='please enter your username...' />
                </FormItem>
                <FormItem label='Post'>
                    <Input placeholder='please enter your post...' />
                </FormItem> */}
                <FormItem label='IRS number' field='agent_num' rules={[{ type: 'number'}]}>
                    {/* //, required: true } */}
                    <InputNumber placeholder='please enter' />
                </FormItem>
                <FormItem label='Users number' field='user_num' rules={[{ type: 'number'}]}>
                    {/* //, required: true } */}
                    <InputNumber placeholder='please enter' />
                </FormItem>

                

                <Form.List field='users'>
                {(fields, { add, remove, move }) => {
                    return (
                    <div>
                        {fields.map((item, index) => {
                        return (
                            <div key={item.key}>
                            <Form.Item label={'User ' + index}>
                                <Space>
                                <Form.Item
                                    label='x'
                                    field={item.field + '.x'}
                                    rules={[{ required: true , type: 'number'}]}
                                    noStyle
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label='y'
                                    field={item.field + '.y'}
                                    rules={[{ required: true , type: 'number'}]}
                                    noStyle
                                >
                                    <Input />
                                </Form.Item>
                                <Button
                                    icon={<IconDelete />}
                                    shape='circle'
                                    status='danger'
                                    onClick={() => remove(index)}
                                ></Button>
                                </Space>
                            </Form.Item>
                            </div>
                        );
                        })}
                        <Form.Item wrapperCol={{ offset: 5 }}>
                        <Button
                            onClick={() => {
                            add();
                            }}
                        >
                            Add User
                        </Button>
                        </Form.Item>
                    </div>
                    );
                }}
                </Form.List>


                <FormItem wrapperCol={{ offset: 5 }}>
                    <Button type='primary' onClick={handle_sub}>Submit</Button>
                </FormItem>
            </Form>
        </Row>
        </Space>
        
        </>
    )
}

// 