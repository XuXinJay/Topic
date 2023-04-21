import React from "react";
import "./introduce.css";

function EventReview() {
  return (
    <div className="event_introduce_box">
      <h1 style={{ textAlign: "center" }}>活動審核</h1>
      <div className="event_introduce">
        <div className="event_container_123">
          <div style={{ flex: 1 }}>
            <img src="{pic}" alt="" />
          </div>
          <div className="event_introduce_des">
            <div>
              姓名 : <span>鄭明哲</span>
            </div>
            <div>
              年齡 : <span>500</span>
            </div>
            <div>
              居住地 : <span>地獄18樓</span>
            </div>
          </div>
          <div className="event_page-check">
            <button className="event_page-check-btn">確認</button>
            <button className="event_page-check-btn">取消</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventReview;
