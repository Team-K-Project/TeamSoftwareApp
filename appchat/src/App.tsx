import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginModal from './Login'
import ExplorePage from './ExplorePage'
import ChatThread from './ChatThread'
import NewChatThread from './NewChatThread'
import { Button } from 'antd'

function App() {
  const [login, setLogin] = useState<boolean>(false)
  const [explore, setExplore] = useState<boolean>(false)
  const [chat, setChat] = useState<boolean>(false)
  const [newChatThread, setNewChatThread] = useState<boolean>(true)
  return (
    <div style={{ textAlign: 'center' }}>
      <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
        setLogin(true)
        setExplore(false)
        setNewChatThread(false)
        setChat(false)
      }}> Login</Button>
      <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
        setLogin(false)
        setExplore(true)
        setNewChatThread(false)
        setChat(false)
      }}> Explore</Button>
      <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
        setLogin(false)
        setExplore(false)
        setNewChatThread(false)
        setChat(true)
      }}> Chat Thread</Button>
      <Button style={{ marginTop: 3, marginRight: 5 }} type="primary" htmlType="submit" onClick={() => {
        setLogin(false)
        setExplore(false)
        setNewChatThread(true)
        setChat(false)
      }}> New Chat Thread</Button>
      {login && <LoginModal refetch={() => { }} />}
      {explore && <ExplorePage />}
      {newChatThread && <NewChatThread refetch={() => { }} />}
      {chat && <ChatThread refetch={() => { }} />}

    </div>
  );
}

export default App;
