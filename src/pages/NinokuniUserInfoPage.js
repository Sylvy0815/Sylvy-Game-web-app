// NinokuniUserInfoPage.js
import React, { useState } from "react";

function NinokuniUserInfoPage() {
  const [userInfo, setUserInfo] = useState([]);
  const [newEntry, setNewEntry] = useState({
    server: "",
    nickname: "",
    pid: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInfo([...userInfo, newEntry]);
    setNewEntry({ server: "", nickname: "", pid: "" }); // 폼 초기화
  };

  return (
    <div>
      <h1>사용자 정보 입력</h1>
      <form onSubmit={handleSubmit}>
        <label>
          서버:
          <input
            type="text"
            name="server"
            value={newEntry.server}
            onChange={handleInputChange}
          />
        </label>
        <label>
          닉네임:
          <input
            type="text"
            name="nickname"
            value={newEntry.nickname}
            onChange={handleInputChange}
          />
        </label>
        <label>
          계정코드(PID):
          <input
            type="text"
            name="pid"
            value={newEntry.pid}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">추가</button>
      </form>
      <div>
        <h2>입력된 사용자 정보</h2>
        <ul>
          {userInfo.map((info, index) => (
            <li key={index}>
              서버: {info.server}, 닉네임: {info.nickname}, 계정코드(PID):{" "}
              {info.pid}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NinokuniUserInfoPage;
