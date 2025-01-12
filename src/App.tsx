import React, { useState } from 'react';
import './App.css';
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

function App() {
  const [userId, setUserId] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const [inputOne, setInputOne] = useState<string>('');
  const [inputTwo, setInputTwo] = useState<string>('');

  const handleChange = (event: any, name: string) => {
    if (name === "inputOne") {
      setInputOne(event?.target?.value)
    }
    if (name === "inputTwo") {
      setInputTwo(event?.target?.value)
    }
  }

  const handleStartChat = () => {
    if (inputOne && inputTwo) {
      setUserId(inputOne);
      setNickname(inputTwo)
    } else {
      alert('Please input user ID and nickname!');
    }
    
  }

  return (
    <div className="App">
      {(!userId || !nickname) && (
        <div>
          <p>
            <strong>User ID</strong>
            <br />
            <input type="text" name="userId" onChange={(e) => handleChange(e, "inputOne")} />
          </p>
          <p>
            <strong>Nick Name</strong>
            <br />
            <input type="text" name="nickname" onChange={(e) => handleChange(e, "inputTwo")} />
          </p>
          <button onClick={handleStartChat} style={{ fontSize: 18, textAlign: 'center'}}>Start Chat</button>
        </div>
      )}
      {userId && nickname && <SendBirdApp
        appId="8A07B235-354C-410D-A162-5491F09709EE"
        userId={userId}
        nickname={nickname}
      />}
    </div>
  );
}

export default App;
