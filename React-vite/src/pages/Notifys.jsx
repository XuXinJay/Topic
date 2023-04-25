import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Notify from "../notifyPages/Notify";

function Notifys() {
  return (
    <div>
      <Header />
      <div className="change">
        <Notify />
      </div>
      <Footer />
    </div>
  );
}

export default Notifys;
