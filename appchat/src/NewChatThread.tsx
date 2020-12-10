import React, { useState } from 'react'
import { Form, Input, Button, Modal } from 'antd';
import Title from 'antd/lib/typography/Title';
// import { useMutation } from '@apollo/react-hooks';
import { createKingMessage } from './ConnectFauna'
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


export default function CreateKingMessageModal() {
    //const dat =  {kingMessage:"HII", id:1||-1, userId:1||-1}
    //createKingMessage(dat)
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
    const [message, setMessage] = useState<string>('')
    //const [password, setPassword] = useState<string>('')

   

    return <div style={{ display: 'flex', justifyContent: 'center' }}>

        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', maxWidth: 700, minWidth: 500 }}>
                {divider()}
                
                <Title level={1}>Create New Chat Thread</Title>
                <form onSubmit={}>
                <label>
                 <input
                    name = "kingMessage"
                    type = "string"
                    value={message}
                 />
                 
                </label>
                <input type="submit" value="Submit" />
            </form>








                <Button onClick={() => {
                }}>
                    {/* input = {i=>{setMessage(i)}} */}
                    bypass
                </Button>
                <div >
                </div>
            </div>
        </div >
    </div >
}