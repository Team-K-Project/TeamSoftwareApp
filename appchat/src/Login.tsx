import React, { useState } from 'react'
import { Form, Input, Button, Modal } from 'antd';
import Title from 'antd/lib/typography/Title';
// import { useMutation } from '@apollo/react-hooks';
import { History } from 'history'
import ExplorePage from './ExplorePage';

interface Props {
    refetch: () => void
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

export default function LoginModal(props: Props) {
    // const [requestPasswordReset] = useMutation<RequestPasswordReset, RequestPasswordResetVariables>(REQUEST_PASSWORD_RESET)
    const [reset, setReset] = useState<boolean>(false)
    const [fail, setFail] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    // const [authenticate] = useMutation<Authenticate, AuthenticateVariables>(AUTHENTICATE)

    const onFinish = async (values: any) => {
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <div style={{ display: 'flex', justifyContent: 'center' }}>

        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', maxWidth: 700, minWidth: 500 }}>
                <Title level={1}>App Chat Forum</Title>
                <Title level={2}>Login</Title>
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
                    {fail && <div style={{ color: 'red' }}>Please enter correct email and password</div>}
                    <Form.Item style={{ marginBottom: 5 }}>
                        <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
                        }}>
                            Login
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        {/* <Button type="link" htmlType="submit" onClick={async () => {
                            setReset(true)
                        }}
                        >Reset Password</Button> */}
                        <Modal title='Reset Password' visible={reset} onOk={() => { setReset(false) }} onCancel={() => { setReset(false) }} >
                        </Modal>
                    </Form.Item>
                </Form>
                {divider()}

                <Button onClick={() => {
                    // <ExplorePage refetch={props.refetch} history={History} />
                }}>
                    bypass
                </Button>

                <div >


                    {(reset && (email.length > 0)) && <div>Sent reset password to {email}</div>}

                </div>
            </div>
        </div >
    </div >
}