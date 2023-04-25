import React from "react";
import { Navigate } from "react-router-dom";
import "./style2.css";
import useAuthContext from "../context/AuthContext";
import loaDing from "/src/loading.gif"
import { useState} from "react"

function Activity2() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div className="center"><img src={loaDing} alt="" /></div>;
  }

  //取得活動名稱、活動簡述
  const activityName = sessionStorage.getItem("活動名稱");
  const activityText = sessionStorage.getItem("活動簡述");

  //活動地點
  const [activityPlace, setActivityPlace] = useState(sessionStorage.getItem('活動地點') || '');
  function handleActivityPlace(event) {
    setActivityPlace(event.target.value);
    sessionStorage.setItem('活動地點', event.target.value);
  }

  //活動總人數
  const [activityCount, setactivityCount] = useState(sessionStorage.getItem('活動總人數') || '')
  function handleActivityCount(event) {
    setactivityCount(event.target.value);
    sessionStorage.setItem('活動總人數', event.target.value);
  }
  
  //活動時間
  const [activityDate, setActivityDate] = useState(sessionStorage.getItem('活動日期'))
  function handleActivityDate(event) {
    setActivityDate(event.target.value);
    sessionStorage.setItem('活動日期', event.target.value);
  }

  //報名截止日期


  //付款方式
  const [activityPayment, setActivityPayment] = useState(sessionStorage.getItem('付款方式'));
  function handleActivityPayment(event) {
    setActivityPayment(event.target.option);
    sessionStorage.setItem('付款方式',event.target.option);
  }

  //活動預算
  const [activityBudget, setActivityBudget] = useState(sessionStorage.getItem('活動預算'));
  function handleActivityBudget(event) {
    setActivityPayment(event.target.value);
    sessionStorage.setItem('活動預算',event.target.value);
  }

  return user ? (
    <div className="activity_container">
      <div className="progressBar">
        <div className="progress">1. 活動畫面</div>
        <div className="progress">2. 細項資料</div>
        <div className="progress">3. 預覽</div>
      </div>
      <main className="activity_main_2">
        <div className="activity_title">
          {activityName}
        </div>
        <div className="allActivity">
          <div className="hostName">
            <img src="https://img.lovepik.com/free-png/20211130/lovepik-girl-character-photo-sticker-3-png-image_401230533_wh1200.png" />
            <p>
              {"{"}主辦人名字{"}"}
            </p>
          </div>
          <div className="uploadImage">
            <img
              src="https://i1.wp.com/www.tripresso.com/blog/wp-content/uploads/2021/02/27.jpeg?resize=640%2C479"
              alt=""
            />
          </div>
          <div className="activityText_2">
            <textarea
              name=""
              id=""
              className="activityName_2"
              cols={30}
              rows={10}
              readOnly
              defaultValue={activityText}
            />
          </div>
        </div>
        <div className="meetForm">
          <div className="meetBox">
            <div className="box">
              <label htmlFor="">活動地點 :</label>
              <input 
                type="text" 
                className="formType" 
                name="place"
                defaultValue={activityPlace}
                onChange={handleActivityPlace}
              />
            </div>
            <div className="box">
              <label htmlFor="">活動總人數 :</label>
              <input 
                type="number" 
                className="formType" 
                name="count"
                defaultValue={activityCount}
                onChange={handleActivityCount}
              />
            </div>
            <div className="box">
              <label htmlFor="">活動日期 :</label>
              <input 
                type="date" 
                className="formType" 
                name="time"
                defaultValue={activityDate}
                onChange={handleActivityDate}
              />
            </div>
            <div className="box">
              <label htmlFor="">報名截止日期 :</label>
              <input 
                type="date" 
                className="formType" 
                name="endDate" 
                />
            </div>
            <div className="box">
              <label htmlFor="">付款方式 :</label>
              <input type="select" 
                className="formType" 
                name="payment"
                onChange={handleActivityPayment}
              />
            </div>
            <div className="box">
              <label htmlFor="">活動預算 :</label>
              <input 
                type="number" 
                className="formType" 
                name="budget" 
                onChange={handleActivityBudget}
              />
            </div>
          </div>
        </div>
        <div className="buttonControl">
          <a className="button" href="/activity">
            上一頁
          </a>
          <a className="button" href="/activity3">
            下一頁
          </a>
        </div>
      </main>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Activity2;
