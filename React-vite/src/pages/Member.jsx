import React from "react";
import MemberPage from "../member/MemberPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Member() {
  return (
    <div>
      <Header />
      <div className="change">
        <MemberPage />
      </div>
      <Footer />
    </div>
  );
}

export default Member;
