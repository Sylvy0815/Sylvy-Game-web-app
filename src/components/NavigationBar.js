import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="navigationBar">
      {/* 내비게이션 바의 내용을 여기에 추가 */}
      <div>로고</div>
      <ul>
        <li>링크 1</li>
        <li>링크 2</li>
        <li>링크 3</li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
