// Home.js
import React from "react";

function Home() {
  return (
    <div>
      <h1>공지사항</h1>
      <ul>
        <li>알파 테스트 진행 중입니다.</li>
        <li>
          각종 문의사항 및 버그 제보는 오픈 채팅 등을 통해 라니아 Sylvy, 혹은
          안드로메다 Sylvy에게 문의 부탁드립니다.
        </li>
        <li>
          개인이 운영하는 서비스이므로, 운영/관리가 쉽지 않으며, 서버 운용 비용
          또한 제 사비를 털어 운영하기에, 무분별한 정보의 삽입은 지양해주시기
          바랍니다.
        </li>
        {/* 다른 링크들 */}
      </ul>
      {/* Home 페이지의 나머지 내용 */}
    </div>
  );
}

export default Home;
