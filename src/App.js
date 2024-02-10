import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar"; // 경로 확인 필요
import SideBar from "./components/SideBar"; // 경로 확인 필요
import Home from "./pages/Home"; // Home 컴포넌트의 경로 확인 필요
import Ninokuni from "./pages/Ninokuni"; // Game 컴포넌트의 경로 확인 필요
import "./App.css";
import NinokuniUserInfoPage from "./pages/NinokuniUserInfoPage";
import CouponSubmissionPage from "./pages/CouponSubmissionPage";

function App() {
  return (
    <Router>
      <NavigationBar />
      <SideBar />
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ninokuni" element={<Ninokuni />} />
          <Route path="/ninokuni/userinfo" element={<NinokuniUserInfoPage />} />
          <Route
            path="/ninokuni/couponsubmission"
            element={<CouponSubmissionPage />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
