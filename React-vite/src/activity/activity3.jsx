import React from "react";
import axios from "../api/axios";
import "./style3.css";
import { Navigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import loaDing from "/src/loading.gif";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Geocode from "react-geocode";
import { useState } from "react";
import { useEffect } from "react";

function Activity3() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="center">
        <img src={loaDing} alt="" />
      </div>
    );
  }




  //取得所有資料
  const activityType = sessionStorage.getItem("活動類型");
  const defaultImg = sessionStorage.getItem("預設圖片");
  const activityName = sessionStorage.getItem("活動名稱");
  const activityText = sessionStorage.getItem("活動簡述");
  const activityPlace = sessionStorage.getItem("活動地點");
  const activityStartDate = sessionStorage.getItem("活動日期");
  const activityEndDate = sessionStorage.getItem("活動結束日期");
  const activityDeadLine = sessionStorage.getItem("報名截止日期");
  const activityCount = sessionStorage.getItem("活動總人數");
  const activityPayment = sessionStorage.getItem("付款方式");
  const activityBudget = sessionStorage.getItem("活動預算");
  //地圖api
  Geocode.setApiKey('AIzaSyBQUjSFJEo1tbZmuE04BUNG6xXG8x-NlZs')
  Geocode.setLanguage('zh-TW')
  Geocode.setRegion("tw");
  function handleLinkClick() {
    const activityPlace = sessionStorage.getItem("活動地點");
    if (activityPlace) {
      Geocode.fromAddress(activityPlace).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          const mapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
          const size = 'width=600,height=400'
          const left = (screen.width / 2) - (600 / 2);
          const top = (screen.height / 2) - (400 / 2);
          window.open(mapUrl, "_blank",`${size},left=${left},top=${top}`);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  //送出表單的資料
  async function sendData() {
    let activityTypeJSON = JSON.parse(activityType)
    const allActivityData = JSON.stringify({
      memberId: user["id"],
      activityType: activityTypeJSON,
      defaultImg: defaultImg,
      activityName: activityName,
      activityText: activityText,
      activityPlace: activityPlace,
      activityStartDate: activityStartDate,
      activityEndDate: activityEndDate,
      activityDeadLine: activityDeadLine,
      activityCount: activityCount,
      activityPayment: activityPayment,
      activityBudget: activityBudget,
    });

    const allActivity = JSON.parse(allActivityData);
    // let allObj = JSON.parse(allActivityData);
    // console.log(allObj.activityBudget)
    const res = await axios.post("/api/createActivity", allActivityData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    sessionStorage.clear();
    console.log(res.data);
    window.location.href = "/";
    // .catch(error => console.error(error))
  }
  //剩餘天數
  const today = new Date();
  const deadline = new Date(activityDeadLine);
  const diffTime = deadline.getTime() - today.getTime();
  // const diffDays = Math.abs(Math.floor(diffTime / (1000 * 60 * 60 * 24)));
  // sessionStorage.setItem('剩餘天數', diffDays)


  return user ? (
    <div className="activity_container">
      <div className="progressBar">
        <div className="progress13">1. 活動畫面</div>
        <div className="progress23">2. 細項資料</div>
        <div className="progress33">3. 預覽</div>
      </div>
      <main className="activity_main_3">
        <div className="allActivity">
          <div className="activity_title" style={{ textAlign: "center" }}>
            {activityName}
          </div>
          <div className="box_4">
            <div className="hostName_3">
              <img src={user.member_avatar} alt="" />
              <p>{user.name}</p>
            </div>
            <div className="place">
              <i className="bi bi-geo-alt-fill" />
              <div className="">
                聚會地點 :
                <a 
                  href="#"
                  // href={target}
                  className="googleMap"
                  onClick={handleLinkClick}
                >{activityPlace}</a>
              </div>
            </div>
            <div className="count">
              聚會總人數 : <span>{activityCount}人</span>
            </div>
          </div>
          <div className="uploadImage22">
            <img src={defaultImg} alt="" />
          </div>
          <div className="activityText_3">
            <textarea
              name=""
              id=""
              className="activityName_3"
              readOnly
              defaultValue={activityText}
            />
          </div>
          <hr className="gap" />
          <div class="box_3">
            <div class="iconBox">
              <i class="uil uil-usd-circle"></i>
              <div className="">{activityPayment}</div>
            </div>
            <div class="iconBox">
              <i class="uil uil-wallet"></i>
              <div className="">${activityBudget}</div>
            </div>
          </div>
          <div class="box_3">
            <div class="iconBox">
              <i class="uil uil-calendar-alt"></i>
              {/* <div>{activityStartDate.slice(5,10)}</div> */}
            </div>
            <div class="iconBox">
              <i class="uil uil-hourglass"></i>
              {/* <div style={{ color: "red" }}>{diffDays}天</div> */}
            </div>
          </div>
        </div>
        <div className="buttonControl">
          <a className="button" href="/activity2">
            上一頁
          </a>
          <a className="button" onClick={sendData}>
            送出
          </a>
        </div>
      </main>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Activity3;
