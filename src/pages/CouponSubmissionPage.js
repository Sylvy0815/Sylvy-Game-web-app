import React, { useState } from "react";
import "./CouponSubmissionPage.css";

function CouponSubmissionPage() {
  const [submission, setSubmission] = useState({
    server: "",
    nickname: "",
    couponCode: "",
  });
  const [submissions, setSubmissions] = useState([]); // 제출된 쿠폰 코드 목록을 저장할 상태
  const [message, setMessage] = useState(""); // 쿠폰 제보 완료 메시지를 저장할 상태

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSubmission((prevSubmission) => ({ ...prevSubmission, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // 백엔드 API로 POST 요청 보내기
    fetch("http://localhost:3000/coupon-submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Submission successful:", data);
        setMessage("쿠폰 등록이 완료되었습니다."); // 쿠폰 제보 완료 메시지 업데이트
        setSubmissions((prevSubmissions) => [...prevSubmissions, submission]); // 제출된 쿠폰 코드 목록 업데이트
        setSubmission({ server: "", nickname: "", couponCode: "" }); // 폼 초기화
      })
      .catch((error) => {
        console.error("Submission error:", error);
        setMessage("쿠폰 등록에 실패했습니다."); // 오류 메시지 업데이트
      });
  };

  return (
    <div>
      <h1>쿠폰 코드 제보</h1>
      {message && <div className="alert">{message}</div>}{" "}
      {/* 쿠폰 제보 완료 메시지 표시 */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            서버:
            <input
              type="text"
              name="server"
              className="form-control"
              value={submission.server}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            닉네임:
            <input
              type="text"
              name="nickname"
              className="form-control"
              value={submission.nickname}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            쿠폰 코드:
            <input
              type="text"
              name="couponCode"
              className="form-control"
              value={submission.couponCode}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">제보하기</button>
      </form>
      <div>
        <h2>입력된 쿠폰 코드</h2>
        <ul>
          {submissions.map((info, index) => (
            <li key={index}>
              서버: {info.server}, 닉네임: {info.nickname}, 쿠폰 코드:{" "}
              {info.couponCode}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default CouponSubmissionPage;
