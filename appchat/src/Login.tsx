import React, { useState } from 'react'
import { Form, Input, Button, Modal } from 'antd';
import Title from 'antd/lib/typography/Title';
// import { useMutation } from '@apollo/react-hooks';
import { create, readAll } from './ConnectFauna'
export interface User {
    name: string
    id: number
}
export interface createUser {
    name: string
    password: string
    id: number
}
function divider() {
    return <div style={{
        height: 2,
        width: 500,
        alignContent: 'center',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        gridColumnStart: '1',
        gridColumnEnd: '3',
        borderColor: 'lightgrey'
    }} />
}


export default function LoginModal() {
    // async function readAllUsers() {
    //     const users: User[] = []
    //     const temp = await readAll()
    //     temp.array.forEach((element: any) => {
    //         element.then((value: any) => { users.push({ name: value.name || "", id: value.id || -1 }) });
    //         users.push(element)
    //     });
    //     return users
    // }
    // const [users, setUsers] = useState<User[]>(await readAllUsers())
    const [reset, setReset] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const onFinish = async (values: any) => {
        const dat = { name: values.username || "", password: values.password || "", id: 3 || -1 }
        console.log(dat)
        await create(dat)
        // console.log(readAll)
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <div style={{ display: 'flex', justifyContent: 'center' }}>

        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', maxWidth: 700, minWidth: 500 }}>
                <Title level={1}>Login</Title>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label=""
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input placeholder='Email' />
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Password' />
                    </Form.Item>
                    <Form.Item style={{ marginBottom: 5 }}>
                        <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
                        }}>
                            Login
                        </Button>
                    </Form.Item>
                    <Form.Item>
                    </Form.Item>
                </Form>
                {divider()}

                <Button onClick={() => {
                }}>
                    bypass
                </Button>
                <div >
                </div>
            </div>
        </div >
    </div >
}