import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "./chatgpt.css";

function Notify() {
  const [notifys, setNotifys] = useState([]);

  useEffect(() => {
    async function getNotify() {
      try {
        const response = await axios.get("api/notify");
        console.log(response.data);
        setNotifys(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getNotify();
  }, []);

  return (
    <main className="main">
      <div className="container">
        <div className="content">
          <input
            className="radio"
            type="radio"
            defaultChecked=""
            id="home"
            name="slider"
          />
          <input className="radio" type="radio" id="chat" name="slider" checked />
          <input className="radio" type="radio" id="user" name="slider" />
          <input className="radio" type="radio" id="info" name="slider" />
          <div className="list">
            <label htmlFor="chat" className="chat-btn notify-btn" tabindex="1">
              <span className="title">活動通知</span>
            </label>
            <label htmlFor="user" className="user-btn notify-btn" tabindex="1">
              <span className="title">帳號通知</span>
            </label>
            <label htmlFor="info" className="info-btn notify-btn" tabindex="1">
              <span className="title">系統通知</span>
            </label>
          </div>
          <div className="text-content">
            <div className="chat text bulletin">
              <div className="title">活動通知</div>
              <ul className="bulletin_ul">
              {notifys.map((notify) => {
                  return (
                    <li className="bulletin_li">
                      {notify.notify_state}
                    </li>
                  );
                })}
              </ul>
              <div className="bulletin_btn">
                <button className="next_btn">
                  <i className="uil uil-step-forward" />
                </button>
              </div>
            </div>
            <div className="user text bulletin">
              <div className="title">帳號通知</div>
              <ul className="bulletin_ul">
                <li className="bulletin_li">
                  我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥
                </li>
                <div className="bulletin_btn">
                  <button className="next_btn">
                    <i className="uil uil-step-forward" />
                  </button>
                </div>
              </ul>
            </div>
            <div className="info text bulletin">
              <div className="title">系統通知</div>
              <ul className="bulletin_ul">
                <li className="bulletin_li">
                  我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥
                </li>
                <div className="bulletin_btn">
                  <button className="next_btn">
                    <i className="uil uil-step-forward" />
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Notify;
