import React, { useState } from 'react'
import { Table, Button } from 'antd'
import { readAll } from './ConnectFauna'
import { User } from './Login'
import AllTheadsByUserId from './AllThreadsByUserId'

export default function AllUsers() {

    const str: any[] = []
    const [users, setUsers] = useState<User[]>([])
    const [count, setCount] = useState<boolean>(true)
    const [vis, setVis] = useState<boolean>(false)
    const [user, setUser] = useState<User>()
    async function getNextId() {
        setCount(false)
        let strin = await readAll()
        const users: any[] = strin ? JSON.parse(strin) : ''
        // let id = users[users.length].value.id
        users.forEach(e => {
            str.push({ username: e.data.name || '', id: e.data.id || - 1 })
            console.log(users)
        });
        setUsers(str)
    }
    count && getNextId()

    console.log(users, "USERS")
    const columns = [{
        title: 'Username',
        render: (data: any) => <div>{data.username}<Button onClick={() => { setVis(true); setUser({ name: data.username, id: data.id }) }}>View All Threads started by this user</Button></div>
    }]
    return <div style={{ textAlign: 'center' }}>
        {!vis && <Table
            dataSource={users}
            columns={columns}
            rowKey={(w: User) => w.id}
        ></Table>}
        {vis && <AllTheadsByUserId user={user} visible={vis} setVisible={(val) => setVis(val)} />}
    </div >
}
