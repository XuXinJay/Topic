import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Event from "../event/Event";

function EventPages() {
  return (
    <div>
      <Header />
      <div className="">
        <Event />
      </div>
      <Footer />
    </div>
  );
}

export default EventPages;
