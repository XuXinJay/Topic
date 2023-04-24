import React from "react";
import { Navigate } from "react-router-dom";
import "./style2.css";
import useAuthContext from "../context/AuthContext";
import loaDing from "/src/loading.gif"

function Activity2() {
  const { user ,loading } = useAuthContext();

  if (loading) {
    return <div className="center"><img  src={loaDing} alt="" /></div>;
  }
  
  //取得活動名稱、活動簡述
  const activityName = sessionStorage.getItem("活動名稱");
  const activityText = sessionStorage.getItem("活動簡述");

  return user ? (
    <div className="activity_container">
      <div className="progressBar">
        <div className="progress_2">活動畫面</div>
        <div className="progress_2">細項資料</div>
        <div className="progress_2">預覽</div>
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
              readOnly="true"
              defaultValue={""}
              value={activityText}
            />
          </div>
        </div>
        <div className="meetForm">
          <div className="meetBox">
            <div className="box">
              <label htmlFor="">聚會地點 :</label>
              <input type="text" className="formType" name="place" />
            </div>
            <div className="box">
              <label htmlFor="">聚會總人數 :</label>
              <input type="text" className="formType" name="count" />
            </div>
            <div className="box">
              <label htmlFor="">聚會時間 :</label>
              <input type="date" className="formType" name="time" />
            </div>
            <div className="box">
              <label htmlFor="">報名截止日期 :</label>
              <input type="text" className="formType" name="endTime" />
            </div>
            <div className="box">
              <label htmlFor="">付款方式 :</label>
              <input type="text" className="formType" name="payment" />
            </div>
            <div className="box">
              <label htmlFor="">活動預算 :</label>
              <input type="text" className="formType" name="budget" />
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
