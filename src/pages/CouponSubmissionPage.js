import React, { useState } from "react";

function CouponSubmissionPage() {
  const [submission, setSubmission] = useState({
    server: "",
    nickname: "",
    couponCode: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSubmission({ ...submission, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // 백엔드 API로 POST 요청 보내기
    fetch("http://localhost:3000/couponSubmissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Submission successful:", data);
        // 폼 초기화
        setSubmission({ server: "", nickname: "", couponCode: "" });
      })
      .catch((error) => {
        console.error("Submission error:", error);
      });
  };

  return (
    <div>
      <h1>쿠폰 코드 제보</h1>
      <form onSubmit={handleSubmit}>
        <label>
          서버:
          <input
            type="text"
            name="server"
            value={submission.server}
            onChange={handleInputChange}
          />
        </label>
        <label>
          닉네임:
          <input
            type="text"
            name="nickname"
            value={submission.nickname}
            onChange={handleInputChange}
          />
        </label>
        <label>
          쿠폰 코드:
          <input
            type="text"
            name="couponCode"
            value={submission.couponCode}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">제보하기</button>
      </form>
    </div>
  );
}

export default CouponSubmissionPage;
