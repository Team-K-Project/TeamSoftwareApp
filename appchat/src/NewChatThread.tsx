import React, { useState } from 'react'
import { Form, Input, Button, Modal, List } from 'antd';
import Title from 'antd/lib/typography/Title';
// import { useMutation } from '@apollo/react-hooks';
import { createKingMessage } from './ConnectFauna'

interface Props {
    // history: History
    // messageId:number
    refetch: () => void
}



export default function NewChatThread(props: Props) {
    const [message, setMessage] = useState<string>()
    const onFinish = async (values: any) => {
        const dat = { kingMessage: values.message || "", id: 4, userId: 1 }
        console.log(dat)
        await createKingMessage(dat)
        window.location.reload(true);

        // console.log(readAll())
    };

    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', maxWidth: 1500, minWidth: 1000, minHeight: 500, borderStyle: 'solid', borderRadius: 10, borderColor: 'black', borderWidth: 2, marginTop: 30 }}>
                <div style={{ textAlign: 'center', maxWidth: 900, minWidth: 500, borderTop: 2 }}>
                    <Title level={1}>Create Message</Title>
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label=""
                            name="message"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Message!',
                                },
                            ]}
                        >
                            <Input style={{ width: 400 }} placeholder='message' />
                        </Form.Item>
                        <Form.Item style={{ marginBottom: 5 }}>
                            <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
                            }}>
                                Post
                        </Button>
                        </Form.Item >
                    </Form>

                </div>
            </div>
        </div>
    </div>
}