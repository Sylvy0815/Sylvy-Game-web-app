// NinokuniUserInfoPage.js
import React, { useState } from "react";
import "./CouponSubmissionPage.css";

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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setUserInfo([...userInfo, newEntry]);
  //   setNewEntry({ server: "", nickname: "", pid: "" }); // 폼 초기화
  // };
  const handleSubmit = (event) => {
    event.preventDefault();

    // 백엔드 API로 POST 요청 보내기
    fetch("http://localhost:3000/ninokuniusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // 사용자 목록에 새로운 사용자 추가
        setUserInfo([...userInfo, newEntry]);
        // 폼 초기화
        setNewEntry({ server: "", nickname: "", pid: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>사용자 정보 입력</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>
            서버:
            <input
              type="text"
              name="server"
              value={newEntry.server}
              onChange={handleInputChange}
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            닉네임:
            <input
              type="text"
              name="nickname"
              value={newEntry.nickname}
              onChange={handleInputChange}
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            계정코드(PID):
            <input
              type="text"
              name="pid"
              value={newEntry.pid}
              onChange={handleInputChange}
              className="form-control"
            />
          </label>
        </div>
        <button type="submit" className="btn">
          추가
        </button>
      </form>
      <div>
        <h2>입력된 사용자 정보</h2>
        <ul className="user-info-list">
          {userInfo.map((info, index) => (
            <li key={index} className="user-info-item">
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
