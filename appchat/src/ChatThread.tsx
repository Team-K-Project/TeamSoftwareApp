import React, { useState } from 'react'
import { Form, Input, Button, Modal, List } from 'antd';
import Title from 'antd/lib/typography/Title';
// import { useMutation } from '@apollo/react-hooks';
import { KingMessage } from "./ExplorePage"
import { readAllMessages } from './ConnectFauna';

interface Props {
    message: KingMessage
}
interface Message {
    mess: string
    messId: number
    userId: number
}



export default function ChatThread(props: Props) {
    const [mess, setMess] = useState<string[]>([])
    const [count, setCount] = useState<boolean>(true)
    async function getNextId() {
        setCount(false)
        const str: string[] = []
        let strin = await readAllMessages()
        const messages: any[] = strin ? JSON.parse(strin) : ''
        messages.forEach(e => str.push(e.data.message))
        setMess(str)
    }
    count && getNextId()
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', maxWidth: 1500, minWidth: 1000, minHeight: 500, borderStyle: 'solid', borderRadius: 10, borderColor: 'black', borderWidth: 2, marginTop: 30 }}>
                <div style={{ textAlign: 'left', maxWidth: 900, minWidth: 500, marginLeft: 10 }}>
                    <Title level={5}>/User Name</Title>
                </div>
                <div style={{ textAlign: 'center', maxWidth: 900, minWidth: 500, borderTop: 2 }}>
                    <Title level={2}></Title>
                    <List
                        size="small"
                        header={<div>{props.message.kingMessage}</div>}
                        // footer={<div>Footer</div>}
                        bordered
                        dataSource={mess || []}
                        renderItem={item =>
                            <List.Item>{item}</List.Item>}
                    />
                </div>
            </div>
        </div>
    </div>
}