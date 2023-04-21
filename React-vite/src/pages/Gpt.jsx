import React from "react";
import ChatGpt from "../chatgpt/ChatGPT";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Gpt() {
  return (
    <div>
      <Header />
      <div className="change">
        <ChatGpt />
      </div>
      <Footer />
    </div>
  );
}

export default Gpt;
