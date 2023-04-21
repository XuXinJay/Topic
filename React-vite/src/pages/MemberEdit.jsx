import React from "react";
import MemberPageEdit from "../member/MemberPageEdit";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MemberEdit() {
  return (
    <div>
      <Header />
      <div className="change">
        <MemberPageEdit />
      </div>
      <Footer />
    </div>
  );
}

export default MemberEdit;
