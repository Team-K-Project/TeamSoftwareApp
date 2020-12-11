import React, { useState } from 'react'
import { Table, Button } from 'antd';
import { readAllKingMessages } from './ConnectFauna'
import { divider } from './Login'
import ChatThread from './ChatThread';
import { User } from './Login'
export interface KingMessage {
    kingMessage: string
    id: number
    userId: number
    name: string
}

interface Props {
    setVisible: (arg0: boolean) => void
    visible: boolean
    setVals: (val: KingMessage) => void
    user: User | undefined
}


export default function ExplorePage(props: Props) {
    const str: any[] = []
    const [mess, setMess] = useState<KingMessage[]>([])
    const [count, setCount] = useState<boolean>(true)
    async function getNextId() {
        setCount(false)
        let strin = await readAllKingMessages()
        const users: any[] = strin ? JSON.parse(strin) : ''
        // let id = users[users.length].value.id
        users.forEach(e => { str.push({ kingMessage: e.data.kingMessage || '', id: e.data.id || - 1, userId: e.data.userId || -1, name: e.data.name }); })
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
                render: (data: KingMessage) => <div style={{ textAlign: 'left', marginBottom: 5 }}><Button onClick={() => { return <ChatThread message={data} user={props?.user} /> }} >open</Button>    {data.kingMessage} {divider()}</div>,
                getValue: (data: KingMessage) => data.kingMessage || ''
            }
        ]



    return <div style={{ textAlign: 'left', maxWidth: 500, alignContent: 'left', alignItems: 'left', marginLeft: 200 }}>
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