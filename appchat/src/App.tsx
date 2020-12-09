import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginModal from './Login'
import ExplorePage from './ExplorePage'
import ChatThread from './ChatThread'
import NewChatThread from './NewChatThread'
import { Button } from 'antd'
import AllUsers from './AllUsers'
function App() {
  const [login, setLogin] = useState<boolean>(false)
  const [explore, setExplore] = useState<boolean>(false)
  const [chat, setChat] = useState<boolean>(false)
  const [newChatThread, setNewChatThread] = useState<boolean>(true)
  const [allUsers, setAllUsers] = useState<boolean>(false)
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
        setNewChatThread(false)
        setChat(true)
        setAllUsers(false)
      }}> Chat Thread</Button>
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
      {explore && <ExplorePage />}
      {newChatThread && <NewChatThread refetch={() => { }} />}
      {chat && <ChatThread refetch={() => { }} />}
      {allUsers && <AllUsers />}

    </div>
  );
}

export default App;
