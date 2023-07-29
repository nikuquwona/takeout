'use client'

import { Button, Link } from "@arco-design/web-react";
import React, { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { Typography } from '@arco-design/web-react';
// import { Image } from '@arco-design/web-react';
import { Image, Space } from '@arco-design/web-react';
import { Col, Row } from "antd";
const { Title, Paragraph, Text } = Typography;
import { Card } from '@arco-design/web-react';
import Head from "next/head";
const { Meta } = Card;
// import { Icon,IconHeart } from '@arco-design/web-react';
import { IconHeart, IconHeartFill } from '@arco-design/web-react/icon';
import {useRequest} from '../../hooks/useRequest'
import Navi from "./navi";


import SockJS from 'sockjs-client';
// import { Client } from 'stompjs';
import { Client } from '@stomp/stompjs';

// import { useRequest } from 'ahooks';
// import './ChatComponent.css'; // 引入 CSS 文件
// import { Thrift } from "thrift";

// better have : 
// id, name ,grade,academy,major,img_src

// const img_url_pre="http://localhost:8080/images/"//image_0_2.jpg

export default function Home() {
  // const URL="http://localhost:8080"
  // const [message, setMessage] = useState<any>();
  
  // document.body.setAttribute('arco-theme', 'dark');
  const [theme,setTheme]=useState<boolean>(true);
  useEffect(()=>{
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    console.log("darkThemeMq",darkThemeMq);
    if (darkThemeMq.matches){
      document.body.setAttribute('arco-theme', 'dark');
      setTheme(false)
    }

    darkThemeMq.addEventListener('change',e => {
      if (e.matches) {
        document.body.setAttribute('arco-theme', 'dark');
        setTheme(false)
      } else {
          document.body.removeAttribute('arco-theme');
          setTheme(true)
        }
      });
  },[])

  const [iconStateLeft,setIconStateLeft]=useState<boolean>(false);
  const [iconStateRight,setIconStateRight]=useState<boolean>(false);
  // #232324  
  const [fresh,setFresh]=useState<boolean>(false);

  const { loading, result, error } = useRequest(`/message`,{},{method:'post'});
  
  const { loading:loading_get_girl, result:result_get_girl, error:error_get_girl } = useRequest(`/api/get_girl`,{},{method:'post',refresh:fresh});//,manual:true,ready});
  // /compare_girl
  const [ready,setReady]=useState<boolean>(false);
  const [data,setData]=useState<any>();
  const { result:result_compare_girl} = useRequest(`/api/compare_girl`,data,{method:'post',manual:true,ready:ready});
  
  const srcList_default = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
    ];
  const [srcList,setSrcList]=useState<any>(srcList_default)
  
  useEffect(() => {
    console.log("result_get_girl",result_get_girl)
    
    if (result_get_girl!=null){
      var src = [];
      src.push(result_get_girl[0]?.imageUrl)
      src.push(result_get_girl[1]?.imageUrl)
      setSrcList(src)
      console.log("src",srcList)
      setIconStateLeft(false)
      setIconStateRight(false)
    }
  },[result_get_girl])
  
  const handleOnClick = (index: number) => { 
    // do something here
    if (index==0){
      setIconStateLeft(iconStateLeft=>!iconStateLeft)
      // setData(result_get_girl[0]?.id)
      var a=[]
      a.push(result_get_girl[0]?.id)
      a.push(result_get_girl[1]?.id)
      // var b={}
      var b={"id1":a[0],"id2":a[1]}
      // b={'peoples':a}
      setData(b)
    
    }else{
      setIconStateRight(iconStateRight=>!iconStateRight)
      var a=[]
      a.push(result_get_girl[1]?.id)
      a.push(result_get_girl[0]?.id)
      // var b={}
      var b={"id1":a[0],"id2":a[1]}
      // b={'peoples':a}
      setData(b)
    }

    // setData(result_get_girl)
    setReady(true)
    console.log("ready",ready,"data",data)
    // window.location.reload()
    // const { result:result_get_repeat} = useRequest(`/api/get_girl`,{},{method:'post'});
    // setTimeout(() => {
    //   setCount(prev => prev + 1);
    // }, 1000);
    setTimeout(() => {
      if(fresh){
        setFresh(false)
      }else{
        setFresh(true)
      }
      setReady(false)
    }, 200);
    
    // setIconStateLeft(false)
    // setIconStateRight(false)
  };
  // useEffect(()=>{},[srcList,iconStateLeft,iconStateRight])
   






  return (<>
  {/* {image_group(fresh)} */}
  {/* <div>
      <p>loading: {loading}</p>
      <p>{JSON.stringify(result)}</p>
      <p>{result?.msg}</p>
      <p>{JSON.stringify(result_get_girl)}</p>
     
  </div> */}

  <div>
    <Navi/>
      {/* <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
    <Row justify='center'>
    {/* <Typography.Title>Face Mash</Typography.Title> */}
    
    <h1>
      Face Mash
    </h1>
    </Row>
    {/* <Title>{message}</Title> */}
    {/* <Button type="primary">Hello Arco</Button> */}
    {/* <Row justify='center'>
    <Col span={12}>
    <Image
      width={200}
      src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
      alt='lamp'
    />
    </Col>
    <Col span={12}>
    <Image
      width={200}
      src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
      alt='lamp'
    />
    </Col>
    </Row> */}
    <Row justify='center'>
      
    <Space direction='vertical'>
        <Image.PreviewGroup infinite>
          <Space size='large'>
            {srcList.map((src: any, index: any) => {
              // eslint-disable-next-line react/jsx-key
            
              return (
              <>
                <Card
                  hoverable
                  cover={<div><Image key={index} src={src} title={'Student ID:~'} width={600} alt={`lamp${index + 1}`} /></div>}>
                  <Meta

                    description={<>
                    
                      <Row >
                        <Col>
                        <Typography.Text bold>Name:~</Typography.Text> 
                        <br />
                        <Typography.Text bold>Grade:~</Typography.Text>
                        <br />
                        <Typography.Text bold>Academy:~</Typography.Text>
                        <br />
                        <Typography.Text bold>Major:~</Typography.Text>
                        </Col>
                        <Col span={16}></Col>
                      <Col>
                      <Button style={{ fontSize: 24, marginBottom: 0 ,backgroundColor:theme?"color(srgb 1 1 1)":"#232324"}} onClick={()=>handleOnClick(index)} 
                        icon={
                          index==0?
                          (iconStateLeft?<IconHeartFill  style={{color:"color(srgb 0.94 0.12 0.12)"}}/> : <IconHeart  />)
                          :
                          (iconStateRight?<IconHeartFill  style={{color:"color(srgb 0.94 0.12 0.12)"}}/> : <IconHeart  />)
                        } 
                      />
                      </Col>
                      </Row>
                      
                      
                    </>} />
                </Card>
                {/* <Button onClick={handleOnClick(index)} 
                icon={
                  index==0?
                  (iconStateLeft?<IconHeartFill style={{ fontSize: 24, marginBottom: 0 }} /> : <IconHeart style={{ fontSize: 24, marginBottom: 0 }} />)
                  :
                  (iconStateRight?<IconHeartFill style={{ fontSize: 24, marginBottom: 0 }} /> : <IconHeart style={{ fontSize: 24, marginBottom: 0 }} />)
                } 
                /> */}
                
                {/* <IconHeart style={{ fontSize: 24, marginRight: 20 }} /> */}
                </>)
              
                    })}
          </Space>
        </Image.PreviewGroup>
      </Space>
      </Row>
    {/* <h2 className={`${inter.className}`}>
      hello react next!!! */}

    
    <Row justify='center'>
    {/* <Typography.Title>Face Mash</Typography.Title> */}
    <h1>
      Just Choose
    </h1>
    
    </Row>
    <Row justify='center'>
      <ChatComponent/>
    </Row>
    </div>
  </>)
}
function sleep(ms: number | undefined) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  //web socket

function ChatComponent() {
  // const [stompClient, setStompClient] = useState(null);
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [viewMessage,setViewMessage]=useState('')
  // const [messages, setMessages] = useState<string[]>([]);

  const [messages, setMessages] = useState<{ sender: string, content: string ,timestamp: string}[]>([]);
  const [username, setUsername] = useState<string | null>(null);
  const [tempUsername, setTempUsername] = useState(''); // 新增的状态变量


  useEffect(() => {
      // ... WebSocket setup code ...

      const socket = new SockJS('http://localhost:8080/chat');    
      const client = new Client({
          webSocketFactory: () => socket,
          onConnect: (frame) => {
              console.log('Connected:', frame);
              client.subscribe('/topic/messages', (message) => {
                console.log(message.body);
                // setMessages(prev => [...prev, message.body]);
                const msg = JSON.parse(message.body);
                setMessages(prev => [...prev, msg]);
              });
          }
      });
      client.activate();
      setStompClient(client);
      
 
      // Fetch chat history
      fetch('http://localhost:8080/history')
      .then(response => response.json())
      .then(data => {
          setMessages(data);
      });
      
      return () => {
        if (client.connected) {
            client.deactivate();
            console.log("connected")
        }else{
          console.log("unconnected")
        }
      };
    }, []);

  // const sendMessage = (message: any) => {
  //     if (stompClient && stompClient.connected) {
  //         stompClient.publish({ destination: "/app/send", body: message });
  //     }
  //     console.log(message)
  //     console.log('message send!!!')
  // };
  const sendMessage = () => {
    // if (stompClient && stompClient.connected) {
    //     stompClient.publish({ destination: "/app/send", body: viewMessage });
    //     setViewMessage('');
    // }
    if (stompClient && stompClient.connected && username) {
      const messageObj = {

          sender: username,
          content: viewMessage

      };
      // stompClient.publish({ destination: "/app/send", body: JSON.stringify(messageObj) });
      stompClient.publish({ destination: "/app/send", body: JSON.stringify(messageObj) });
      setViewMessage('');
  }
};
// if (!username) {
//   return (
//       <div className="login-container">
//           <input 
//               placeholder="Enter your name..."
//               onChange={(e) => setUsername(e.target.value)}
//           />
//           <button onClick={() => setUsername(username)}>Join Chat</button>
//       </div>
//   );
// }
if (!username) {
  return (
    <>
     <div className="chat-container">
      <div className="chat-messages">
           {messages.map((msg, index) => (
               <div key={index} className="message">
                   {/* {msg} */}
                   <strong>{msg.sender}:</strong> {msg.content}
                   <div className="message-timestamp">
                        {new Date(msg.timestamp).toLocaleString()}
                    </div>
               </div>
           ))}
       </div>
       
       <div className="chat-input-login">
       {/* <div className="login-container"> */}
        <textarea 
              placeholder="Enter your name..."
              value={tempUsername} // 使用 tempUsername 作为输入值
              onChange={(e) => setTempUsername(e.target.value)} // 更新 tempUsername 而不是 username
          ></textarea>
          <button onClick={() => setUsername(tempUsername)}>Join Chat</button> 
          {/* // 点击按钮时设置 username */}
      </div>
      </div>
    </>
      
  );
}
  return (
      // ... UI components and sendMessage usage
    <>
    {/* <Row justify='center'> */}
      {/* <div>
          <textarea 
            placeholder="Type your message here..." 
            value={viewMessage}
            onChange={(e) => setViewMessage(e.target.value)}
        ></textarea>
<button onClick={() => sendMessage(viewMessage)}>Send</button>
      </div> */}

{/* // */}
       <div className="chat-container">
       <div className="chat-messages">
           {messages.map((msg, index) => (
               <div key={index} className="message">
                   {/* {msg} */}
                   <strong>{msg.sender}:</strong> {msg.content}
                   <div className="message-timestamp">
                        {new Date(msg.timestamp).toLocaleString()}
                    </div>
               </div>
           ))}
       </div>
       <div className="chat-input">
           <textarea 
               placeholder="Type your message here..." 
               value={viewMessage}
               onChange={(e) => setViewMessage(e.target.value)}
           ></textarea>

           <button onClick={sendMessage}>Send</button>
       </div>
   </div>
   {/* </Row> */}
   </>
  );
}

