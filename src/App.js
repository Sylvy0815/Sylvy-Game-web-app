import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar"; // 경로 확인 필요
import SideBar from "./components/SideBar"; // 경로 확인 필요

function App() {
  return (
    <div className="App">
      <NavigationBar /> {/* 상단 내비게이션 바 */}
      <SideBar /> {/* 왼쪽 사이드바 */}
      <main className="mainContent">{/* 주요 컨텐츠 */}</main>
    </div>
  );
}

export default App;
