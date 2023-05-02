import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Gpt from "./pages/Gpt.jsx";
import Login from "./Loginpages/Login.jsx";
import Member from "./pages/Member.jsx";
import MemberEdit from "./pages/MemberEdit.jsx";
import Accordion1 from "./pages/Accordion.jsx";
import Introduce1 from "./pages/Introduce.jsx";
import Acticity11 from "./pages/Activity1.jsx";
import Acticity22 from "./pages/Activity2.jsx";
import Acticity33 from "./pages/Activity3.jsx";
import Register from "./Loginpages/Register.jsx";
import ForgotPassword from "./Loginpages/ForgotPassword.jsx";
import ResetPassword from "./Loginpages/ResetPassword.jsx";
import Home from "./pages/Home.jsx"
import EventPages from "./pages/EventPages";
import EventReviewPages from "./pages/EventReviewPages";
import Notifys from "./pages/Notifys.jsx";

function App() {
  return (
    // <Router>
      <Routes>
        {/* 信杰 */}
        <Route exact path="/" element={<Home />} />
        <Route path="/gpt" element={<Gpt />} />
        <Route path="/notify" element={<Notifys />} />


        {/* 偉婷 */}
        <Route path="/member" element={<Member />} />
        <Route path="/memberEdit" element={<MemberEdit />} />

        {/* 旋宏 */}
        <Route path="/guide" element={<Accordion1 />} />
        <Route path="/about" element={<Introduce1 />} />
        <Route exact path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<ResetPassword />} />

        {/* 瑞澤 */}
        <Route path="/activity" element={<Acticity11 />} />
        <Route path="/activity2" element={<Acticity22 />} />
        <Route path="/activity3" element={<Acticity33 />} />

        {/* 明哲 */}
        <Route path="/event/:activity_id" element={<EventPages />} />
        <Route path="/review/:activity_id" element={<EventReviewPages />} />
      </Routes>
    // </Router>
  );
}

export default App;
