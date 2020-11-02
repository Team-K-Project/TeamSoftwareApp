import React, { useState } from 'react'
import { Form, Input, Button, Modal, List } from 'antd';
import Title from 'antd/lib/typography/Title';
// import { useMutation } from '@apollo/react-hooks';
import { History } from 'history'
import ExplorePage from './ExplorePage';

interface Props {
    // history: History
    // messageId:number
    refetch: () => void
}



export default function ChatThread(props: Props) {


    function subChats():any[]{
        const chats:any[]=[]
        chats.push("Comment #1")
        chats.push("Comment #2")
        chats.push(".")
        chats.push(".")
        chats.push(".")


        return chats
    }
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{textAlign: 'center', maxWidth: 1500, minWidth: 1000, minHeight: 500, borderStyle:'solid', borderRadius: 10, borderColor:'black', borderWidth: 2, marginTop: 30 }}>
                <div style={{ textAlign: 'left', maxWidth: 900, minWidth: 500, marginLeft: 10}}>    
                    <Title level={5}>/Thread Name</Title>
                    <Title level={3}>This will be the threadhhhhhhhhhhhhhhhh post title</Title>
                </div>
                <div style={{ textAlign: 'center', maxWidth: 900, minWidth: 500, borderTop: 2}}>
                    <Title level={2}></Title>
                    <List
                    size="small"
                     header={<div>This will displayhhhhhhhhhhhh original post message</div>}
                    // footer={<div>Footer</div>}
                     bordered
                    dataSource={subChats()}
                    renderItem={item => 
                    <List.Item>{item}</List.Item>}
    />
                </div>
            </div>
        </div>
    </div>
}