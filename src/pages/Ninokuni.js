// Ninokuni.js
import React from "react";
import { Link } from "react-router-dom";

function Ninokuni() {
  return (
    <div>
      <h1>제2의나라</h1>
      <ul>
        <li>
          <Link to="/ninokuni/userinfo">계정코드 등록하기</Link>
        </li>
        {/* 다른 링크들 */}
      </ul>
    </div>
  );
}

export default Ninokuni;
