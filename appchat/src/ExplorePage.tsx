import React, { useState } from 'react'
import { Table, Button } from 'antd';
import { readAllKingMessages } from './ConnectFauna'
import { History } from 'history'
import ChatThread from './ChatThread';
export interface KingMessage {
    kingMessage: string
    id: number
    userId: number
}

interface Props {
    setVisible: (arg0: boolean) => void
    visible: boolean
    setVals: (val: KingMessage) => void
}

const columns: { title: string, render: (data: KingMessage) => any, getValue: (data: KingMessage) => string }[] =
    [
        {
            title: 'Message: ',
            render: (data: KingMessage) => <div >{data.kingMessage} <Button onClick={() => { return <ChatThread message={data} /> }} >open</Button></div>,
            getValue: (data: KingMessage) => data.kingMessage || ''
        }
    ]

export default function ExplorePage(props: Props) {
    const str: any[] = []
    const [mess, setMess] = useState<KingMessage[]>([])
    const [count, setCount] = useState<boolean>(true)
    async function getNextId() {
        setCount(false)
        let strin = await readAllKingMessages()
        const users: any[] = strin ? JSON.parse(strin) : ''
        // let id = users[users.length].value.id
        users.forEach(e => { str.push({ kingMessage: e.data.kingMessage || '', id: e.data.id || - 1, userId: e.data.userId || -1 }); })
        setMess(str)
        // console.log(users)
    }
    count && getNextId()
    console.log(str, "SSTTTRRRR")
    console.log(str, "HIIII")
    console.log(mess[0])
    return <div style={{ textAlign: 'center', maxWidth: 500, alignContent: 'center', alignItems: 'center', marginLeft: 400 }}>
        Top Chats

        <Table columns={columns} dataSource={mess || []}
            onRow={(data: KingMessage) => {
                return {
                    onClick: () => {
                        props.setVals(data)
                        props.setVisible(false)
                    }
                };
            }}
            rowKey={(w: KingMessage) => w.id}
        />
    </div>
}