import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sideBar">
      <ul>
        <li>
          <Link to="/">공지사항</Link>
        </li>
        <li>
          <Link to="/ninokuni">제2의나라</Link>
        </li>
        {/* 다른 링크들 */}
      </ul>
    </div>
  );
}

export default SideBar;
