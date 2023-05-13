'use client'

import React, { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactNode, ReactPortal, useEffect, useState } from 'react';
import Navi from "../navi"
import { Avatar, Typography, Space } from '@arco-design/web-react';
import { IconUser } from '@arco-design/web-react/icon';
const { Text } = Typography;
import { Table, TableColumnProps } from '@arco-design/web-react';
import { Col, Row } from "antd";
import {useRequest} from '../../../hooks/useRequest'
// import { Modal } from 'antd';
import { Modal } from '@arco-design/web-react';
import { Image } from '@arco-design/web-react';

export default function Rank() {
  const [data,setData]=useState<any>();
  const [theme,setTheme]=useState<boolean>(true);


  const { loading, result, error } = useRequest(`/api/list_all_girl`,{},{method:'get'});

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageUrl: React.SetStateAction<string>) => {
    setSelectedImage(imageUrl);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };
  
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
  const columns: TableColumnProps[] = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Image',
      dataIndex: 'imageUrl',
      render: (imageUrl: string) => (
        // <img src={imageUrl} alt="Image" style={{ width: 'auto' }} />
        <Avatar size={64}>
        <img
          alt='avatar'
          src={imageUrl}
          onClick={() => handleImageClick(imageUrl)}
        />
      </Avatar>
    //   <Image
    //   width='auto'
    //   height='auto'
    //   src={imageUrl}
    //   alt='lamp'
    // />
      ),
    },
    {
      title: 'Score',
      dataIndex: 'score',
    }
  ];
  const default_data = [
    {
      id: "126",
      imageUrl: "http://localhost:8080/images/image_6_5.jpg",
      score: 1468.0
    }
  ];
    return (<>
    <div>
      <Navi/>
      {/* <Row justify='center'> */}
      <Row justify='center'>
      <div>
        <Table columns={columns} data={result} />
      </div> 

      <Modal
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
        autoFocus={false}
        focusLock={true}
        style={{ 
          width: '690px',
          height: '450px',
          padding:0
        }}
      >
        {/* <img src={selectedImage} alt="Large Image" style={{ 
          width: '100%',
          maxHeight: 'calc(100vh - 200px)',
          objectFit: 'fill',
         }} /> */}

         <Image
      width='100%'
      height='100%'
      src={selectedImage}
      alt='lamp'
    />
      </Modal>     
      </Row>
    </div>
    </>)
}

// function handleImageClick(imageUrl: any) {
//   window.open(imageUrl, '_blank', 'width=800,height=600');
//   // throw new Error('Function not implemented.');
// }
