import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginModal, { User } from './Login'
import ExplorePage from './ExplorePage'
import ChatThread from './ChatThread'
import NewChatThread from './NewChatThread'
import { Button } from 'antd'
import AllUsers from './AllUsers'
import { KingMessage } from './ExplorePage'
function App() {
  const [user, setUser] = useState<User>()
  const [login, setLogin] = useState<boolean>(true)
  const [explore, setExplore] = useState<boolean>(false)
  const [chat, setChat] = useState<boolean>(false)
  const [newChatThread, setNewChatThread] = useState<boolean>(false)
  const [allUsers, setAllUsers] = useState<boolean>(false)
  const [vals, setVals] = useState<KingMessage>({ kingMessage: "", id: -1, userId: -1, name: '' })
  return (
    <div style={{ textAlign: 'center' }}>
      {login && <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
        setLogin(true)
        setExplore(false)
        setNewChatThread(false)
        setChat(false)
        setAllUsers(false)
      }}> Login</Button>}
      {!login && <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
        setExplore(true)
        setNewChatThread(false)
        setChat(false)
        setAllUsers(false)
      }}> Explore</Button>
      }
      {!login && <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
        setExplore(false)
        setNewChatThread(true)
        setChat(false)
        setAllUsers(false)
      }}> New Chat Thread</Button>
      }
      {!login && < Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
        setExplore(false)
        setNewChatThread(false)
        setChat(false)
        setAllUsers(true)
      }}> All users</Button>}
      {console.log(user)}
      {login && <LoginModal isVisible={(val) => { setLogin(false); setExplore(true) }} success={(user) => setUser(user)} />}
      {explore && <ExplorePage user={user} visible={explore} setVisible={(val) => { setExplore(val); setChat(true) }} setVals={(val) => { setVals(val) }} />}
      {chat && <ChatThread message={vals} user={user} />}
      {newChatThread && <NewChatThread user={user} />}
      {allUsers && <AllUsers />}

    </div >
  );
}

export default App;
