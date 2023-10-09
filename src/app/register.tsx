'use client'
import React, { useState } from 'react';
import { Form, Input, Button,Checkbox, InputNumber } from '@arco-design/web-react';
import { Client  as app_client ,Account,ID} from 'appwrite';
import { Modal } from '@arco-design/web-react';
import { Grid } from '@arco-design/web-react';
const Row = Grid.Row;
const Col = Grid.Col;
const FormItem = Form.Item;
const Register = () => {
       
        const [form] = Form.useForm();
        return (
            <>
            <Row justify='center'>
                <h2>注册</h2>
                <h2> </h2>
            </Row>
            <Row justify='center'>
            <Form
                form={form}
                style={{ width: 600 }}
                autoComplete='off'
                onSubmit={(v) => {
                    console.log("form value:",v);
                    const client = new app_client();
                    client
                        .setEndpoint('https://cloud.appwrite.io/v1')
                        .setProject('651eb121b08c1e77f024');
                    const account = new Account(client);
                    const promise = account.create(v.userId, v.email, v.password);
                    // const promise = account.createEmailSession(formData.email, formData.password);
                
                    promise.then(function (response) {
                        console.log(response); // Success
                        account.createEmailSession(v.email, v.password);
                        const user = account.get();
                
                        user.then(function (response) {
                            console.log(response); // Success
                            Modal.success({
                                title: `${response.name}注册成功并登录`,
                                // content:
                                });
                        }, function (error) {
                            console.log(error); // Failure
                            Modal.error({
                                title: '出错了',
                                });
                        });
                        
                    }, function (error) {
                        console.log(error); // Failure
                        Modal.error({
                            title: '注册失败',
                            });
                    });
                }}
            >
      
      <FormItem label='UserID' field='userId'
    //   rules={[{ required: true }]}
      >
        <Input placeholder='please enter your userId' />
      </FormItem>
      <FormItem
        label='Email'
        field='email'
        rules={[{  type: 'email' }]}
      >
        <Input placeholder='please enter your email' />
      </FormItem>
      <FormItem
        label='Password'
        field='password'
        // rules={[{ type: 'password'}]}
      >
        <Input.Password placeholder='please enter your password' />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type='primary' htmlType='submit' style={{ marginRight: 24 }}>
          sign up
        </Button>
      </FormItem>
            </Form>
            </Row>

            
            </>
        
        );
};
export default Register;