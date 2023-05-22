'use client'

import React, { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactNode, ReactPortal, useEffect, useState } from 'react';
import Navi from "../navi"
import { Avatar, Typography,Button, Space, Card } from '@arco-design/web-react';
import { IconUser } from '@arco-design/web-react/icon';
const { Text } = Typography;
import { Table, TableColumnProps } from '@arco-design/web-react';
import { Col, Row } from "antd";
import {useRequest} from '../../../hooks/useRequest'
// import { Modal } from 'antd';
import { Modal } from '@arco-design/web-react';
import { Image } from '@arco-design/web-react';


export default function light() {


    return (
        <>
        <Row justify='center'>
            <Typography>
                <Typography.Title>基于VHDL的交通系统设计与实现</Typography.Title>
            </Typography>
           
            <Row justify='center'> 
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
            </Row>
            
        </Row>
        </>
    )
}