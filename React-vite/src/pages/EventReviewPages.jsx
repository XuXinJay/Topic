import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import EventReview from "../event/EventReview";

function EventReviewPages() {
  return (
    <div>
      <Header />
      <div className="event_all_box">
        <EventReview />
      </div>
      <Footer />
    </div>
  );
}

export default EventReviewPages;
