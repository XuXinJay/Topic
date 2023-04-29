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
  const defaultImg = sessionStorage.getItem("預設圖片")
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
    let maxCount = 20;
    let minCount = 0;
    let newCount = event.target.value;
    if (newCount <= maxCount && newCount >= minCount) {
      setactivityCount(newCount);
      sessionStorage.setItem('活動總人數', event.target.value);
      console.log(newCount)
    }
  }

  //活動時間 //活動結束日期 //報名截止日期
  const [activityStartDate, setActivityStartDate] = useState(sessionStorage.getItem('活動日期') || '');
  const [activityEndDate, setactivityEndDate] = useState(sessionStorage.getItem('活動結束日期') || '');
  const [activityDeadLine, setActivityDeadLine] = useState(sessionStorage.getItem('報名截止日期') || '');
  
  const today = new Date().toISOString().slice(0, 10);
  // const yesterday = new Date()
    
  function handleActivityStartDate(event) {
    setActivityStartDate(event.target.value);
    sessionStorage.setItem('活動日期', event.target.value);
  }

  function handleActivityEndDate(event) {
    setactivityEndDate(event.target.value);
    sessionStorage.setItem('活動結束日期', event.target.value);
  }

  function handleActivityDeadLine(event) {
    setActivityDeadLine(event.target.value);
    sessionStorage.setItem('報名截止日期', event.target.value);
  }

  //付款方式
  const [activityPayment, setActivityPayment] = useState(sessionStorage.getItem('付款方式'));
  function handleActivityPayment(event) {
    setActivityPayment(event.target.value);
    sessionStorage.setItem('付款方式',event.target.value);
  }

  //活動預算
  const [activityBudget, setActivityBudget] = useState(sessionStorage.getItem('活動預算'));
  function handleActivityBudget(event) {
    setActivityBudget(event.target.value);
    sessionStorage.setItem('活動預算',event.target.value);
  }

  return user ? (
    <div className="activity_container">
      <div className="progressBar">
        <div className="progress1">1. 活動畫面</div>
        <div className="progress2">2. 細項資料</div>
        <div className="progress3">3. 預覽</div>
      </div>
      <main className="activity_main_2">
        <div className="activity_title">
          {activityName}
        </div>
        <div className="allActivity">
          <div className="hostName">
            <img src="defaultImg" />
            <p>
              {"{"}主辦人名字{"}"}
            </p>
          </div>
          <div className="uploadImage">
            <img
              src={defaultImg}
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
                required
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
                min={0}
                required
              /><span>人</span>
            </div>
            <div className="box">
              <label htmlFor="">活動日期 :</label>
              <input 
                type="date" 
                className="formType" 
                name="activityDate"
                defaultValue={activityStartDate}
                onChange={handleActivityStartDate}
                min={today}
                required
              />
            </div>
            <div className="box">
              <label htmlFor="">活動結束日期 :</label>
              <input 
                type="date" 
                className="formType" 
                name="activityEndDate"
                defaultValue={activityEndDate}
                onChange={handleActivityEndDate}
                min={activityStartDate}
                required
                />
            </div>
            <div className="box">
              <label htmlFor="">報名截止日期 :</label>
              <input 
                type="date" 
                className="formType" 
                name="activityDeadLine"
                defaultValue={activityDeadLine}
                onChange={handleActivityDeadLine}
                // min={}
                required
                />
            </div>
            <div className="box">
              <label htmlFor="">付款方式 :</label>
              <select 
                name="payment"
                className="selectType" 
                id=""
                defaultValue={activityPayment}
                onChange={handleActivityPayment}
                required
              >
                <option value=""></option>
                <option value="現金">現金</option>
                <option value="信用卡">信用卡</option>
                <option value="行動支付">行動支付</option>
              </select>
            </div>
            <div className="box">
              <label htmlFor="">活動預算 :</label>
              <input 
                type="number" 
                className="formType" 
                name="budget" 
                onChange={handleActivityBudget}
                defaultValue={activityBudget}
                min={0}
                required
              /><span>元</span>
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
