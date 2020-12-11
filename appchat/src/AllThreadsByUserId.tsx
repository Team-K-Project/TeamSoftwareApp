import React, { useState } from 'react'
import { Table, Button } from 'antd';
import { readAllKingMessages } from './ConnectFauna'
import { divider } from './Login'
import ChatThread from './ChatThread';
import { User } from './Login'
import { KingMessage } from './ExplorePage'

interface Props {
    setVisible: (arg0: boolean) => void
    visible: boolean
    user: User | undefined
}


export default function AllThreadsByUserId(props: Props) {
    const str: any[] = []
    const [mess, setMess] = useState<KingMessage[]>([])
    const [count, setCount] = useState<boolean>(true)
    const [thread, setThread] = useState<boolean>(false)
    const [message, setMessage] = useState<KingMessage>()

    async function getNextId() {
        setCount(false)
        let strin = await readAllKingMessages()
        const users: any[] = strin ? JSON.parse(strin) : ''
        // let id = users[users.length].value.id
        users.forEach(e => { (e.data.userId == props.user?.id) && str.push({ kingMessage: e.data.kingMessage || '', id: e.data.kingMessageId || - 1, userId: e.data.userId || -1, name: e.data.name }); })
        setMess(str)
        console.log(users)
    }
    count && getNextId()
    console.log(mess, "SSTTTRRRR")
    console.log(mess, "HIIII")
    console.log(mess[0])


    const columns: { title: string, render: (data: KingMessage) => any, getValue: (data: KingMessage) => string }[] =
        [
            {
                title: 'User ',
                render: (data: KingMessage) => <div style={{ textAlign: 'left', marginBottom: 5 }}>{data.name}</div>,
                getValue: (data: KingMessage) => data.name || ''
            },
            {
                title: 'Message: ',
                render: (data: KingMessage) => <div style={{ textAlign: 'left', marginBottom: 5 }}><Button onClick={() => { setThread(true); setMessage(data) }} >open</Button>    {data.kingMessage} {divider()}</div>,
                getValue: (data: KingMessage) => data.kingMessage || ''
            }
        ]



    return <div style={{ textAlign: 'left', maxWidth: 500, alignContent: 'left', alignItems: 'left', marginLeft: 200 }}>
        {
            !thread && <div>
                <Button onClick={() => { props.setVisible(false) }}> Back</Button>
                <Table columns={columns} dataSource={mess || []}
                    rowKey={(w: KingMessage) => w.id}
                />
            </div>
        }{
            (thread && message) && <ChatThread message={message} user={props?.user} />
        }
    </div>
}