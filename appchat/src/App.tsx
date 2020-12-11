import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginModal from './Login'
import ExplorePage from './ExplorePage'
import ChatThread from './ChatThread'
import NewChatThread from './NewChatThread'
import { Button } from 'antd'
import AllUsers from './AllUsers'
import { KingMessage } from './ExplorePage'
function App() {
  const [login, setLogin] = useState<boolean>(false)
  const [explore, setExplore] = useState<boolean>(false)
  const [chat, setChat] = useState<boolean>(false)
  const [newChatThread, setNewChatThread] = useState<boolean>(true)
  const [allUsers, setAllUsers] = useState<boolean>(false)
  const [vals, setVals] = useState<KingMessage>({ kingMessage: "", id: -1, userId: -1 })
  return (
    <div style={{ textAlign: 'center' }}>
      <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
        setLogin(true)
        setExplore(false)
        setNewChatThread(false)
        setChat(false)
        setAllUsers(false)
      }}> Login</Button>
      <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
        setLogin(false)
        setExplore(true)
        setNewChatThread(false)
        setChat(false)
        setAllUsers(false)
      }}> Explore</Button>
      <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
        setLogin(false)
        setExplore(false)
        setNewChatThread(true)
        setChat(false)
        setAllUsers(false)
      }}> New Chat Thread</Button>
      <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
        setLogin(false)
        setExplore(false)
        setNewChatThread(false)
        setChat(false)
        setAllUsers(true)
      }}> All users</Button>
      {login && <LoginModal />}
      {explore && <ExplorePage visible={explore} setVisible={(val) => { setExplore(val); setChat(true) }} setVals={(val) => { setVals(val) }} />}
      {chat && <ChatThread message={vals} />}
      {newChatThread && <NewChatThread refetch={() => { }} />}
      {allUsers && <AllUsers />}

    </div>
  );
}

export default App;
