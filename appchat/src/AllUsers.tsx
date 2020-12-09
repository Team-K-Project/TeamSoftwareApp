import React from 'react'
import { Table } from 'antd'
import { readAll } from './ConnectFauna'

function getNextId(): any[] {
    const any: any[] = []
    let strin: any = ''
    readAll().then(res => { strin = res })
    const users: any[] = strin ? JSON.parse(strin) : ''
    // let id = users[users.length].value.id
    users.forEach(e => console.log(e.data.name, " "))
    console.log(users)
    return users
    // return any

}
export default function AllUsers() {
    const data = getNextId()
    const columns = [{
        title: 'Username',
        render: (data: any) => <div>{data.name}</div>
    }]
    return <div style={{ textAlign: 'center' }}>
        <Table
            dataSource={data}
            columns={columns}
        ></Table>
    </div >
}
