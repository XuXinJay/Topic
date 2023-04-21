import React from "react";
import Main from "../mainpage/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";


function Home() {

  return (
    <div className="home-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
