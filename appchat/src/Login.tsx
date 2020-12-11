import React, { useState } from 'react'
import { Form, Input, Button, Modal } from 'antd';
import Title from 'antd/lib/typography/Title';
// import { useMutation } from '@apollo/react-hooks';
import { create, readAll } from './ConnectFauna'
export interface User {
    name: string
    id: number
}
interface LoginInfo {
    name: string
    password: string
    id: number
}
export interface createUser {
    name: string
    password: string
    id: number
}
interface Props {
    isVisible: (val: boolean) => void
    success: (v: User) => void
}
export function divider() {
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


export default function LoginModal(props: Props) {
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
    const [id, setId] = useState<string>('')
    const [login, setLogin] = useState<boolean>(true)
    const [count, setCount] = useState<boolean>(true)
    const [messId, setMessId] = useState<number>()
    const [userLogins, setUserLogins] = useState<LoginInfo[]>([])
    const [fail, setFail] = useState<boolean>(false)
    async function getNextId() {
        setCount(false)
        const str: string[] = []
        const tmp: LoginInfo[] = []
        let strin = await readAll()
        const messages: any[] = strin ? JSON.parse(strin) : ''
        messages.forEach(w => { w && setMessId(w.data.id + 1) })
        messages.forEach(r => { r && tmp.push({ name: r.data.name || '', password: r.data.password || '', id: r.data.id }) })
        setUserLogins(tmp)
    }
    count && getNextId()
    function checkLogin(username: string, password: string) {
        userLogins.forEach(i => { console.log(i.name, " ", i.password); if ((i.name == username) && (i.password == password)) { props.isVisible(false); props.success({ name: username, id: i.id }) } })
        setFail(true);
        return false
    }
    const onFinish = async (values: any) => {
        const dat = { name: values.username || "", password: values.password || "", id: messId || -1 }
        console.log(dat)
        !login && await create(dat).then(() => { { props.isVisible(false); props.success({ name: values.username || "", id: messId || -1 }) } })//shut down login modal here)
        login && checkLogin(values.username, values.password)

        // console.log(readAll())
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <div style={{ display: 'flex', justifyContent: 'center' }}>

        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', maxWidth: 700, minWidth: 500 }}>
                <div>{login ? 'Sign Up?' : 'Sign in '}<Button style={{ marginTop: 50 }} onClick={() => {
                    login ? setLogin(false) : setLogin(true)
                }}>{login ? 'register' : 'login'}</Button></div>
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
                        <div style={{ color: 'blue' }}>{login ? 'will sign you into your accout' : 'This will create a new account'}</div>

                        <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
                        }}>
                            {!login ? 'register' : 'login'}
                        </Button>
                        <div style={{ color: 'red' }}>{fail && 'Login failed, please use correct username and password'}</div>
                    </Form.Item>
                    <Form.Item>
                    </Form.Item>
                </Form>
                {divider()}
                <div >
                </div>
            </div>
        </div >
    </div >
}