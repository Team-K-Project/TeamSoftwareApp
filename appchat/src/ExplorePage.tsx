import React, { useState } from 'react'
import { Form, Input, Button, Modal, List } from 'antd';
import Title from 'antd/lib/typography/Title';
import { History } from 'history'


interface Props {
    refetch: () => void
    history: History
}

export default function ExplorePage() {
    function listOfKingMessages(): any[] {
        const messages: any[] = ["first message", "second message", "third message"]
        return messages
    }
    return <div style={{ textAlign: 'center', maxWidth: 500, alignContent: 'center', alignItems: 'center', marginLeft: 400 }}>
        Top Chats
        <List
            size="small"
            bordered
            dataSource={listOfKingMessages()}
            renderItem={item => <List.Item>{
                <div style={{ borderStyle: 'solid', borderRadius: 4, borderColor: 'black', marginBottom: 2 }}
                    onClick={() => {
                        //This will send the user to the individual chat thread in the future
                    }}
                >
                    {item}
                </div>
            }</List.Item>}
        />
    </div>
}