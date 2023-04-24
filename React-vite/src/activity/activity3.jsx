import React from "react";
import "./style3.css";
import { Navigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import loaDing from "/src/loading.gif"

function Activity3() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div className="center"><img src={loaDing} alt="" /></div>;
  }

  //取得活動名稱、活動簡述
  const activityName = sessionStorage.getItem("活動名稱");
  const activityText = sessionStorage.getItem("活動簡述");
  const activityPlace = sessionStorage.getItem("活動地點");

  return user ? (
    <div className="activity_container">
      <div className="progressBar">
        <div className="progress">1. 活動畫面</div>
        <div className="progress">2. 細項資料</div>
        <div className="progress">3. 預覽</div>
      </div>
      <main className="activity_main_3">
        <div className="allActivity">
          <div className="activity_title" style={{ textAlign: "center" }}>
            {activityName}
          </div>
          <div className="box_4">
            <div className="hostName_3">
              <img src="" alt="" />
              <p>主辦人名字</p>
            </div>
            <div className="place">
              <i className="bi bi-geo-alt-fill" />
              <div className="">
                聚會地點 :
                <a href="">
                  {activityPlace}
                </a>
              </div>
            </div>
            <div className="count">
              聚會總人數 : <span>{}</span>
            </div>
          </div>
          <div className="uploadImage">
            <img
              src="https://i1.wp.com/www.tripresso.com/blog/wp-content/uploads/2021/02/27.jpeg?resize=640%2C479"
              alt=""
            />
          </div>
          <div className="activityText_3">
            <textarea
              name=""
              id=""
              className="activityName_3"
              cols={30}
              rows={10}
              // placeholder={}
              readOnly=""
              defaultValue={""}
              value={activityText}
            />
          </div>
          <hr className="gap" />
          <div class="box_3">
            <div class="iconBox">
              <i class="uil uil-usd-circle"></i>
              <div className="">現金</div>
            </div>
            <div class="iconBox">
              <i class="uil uil-wallet"></i>
              <div className="">預算</div>
            </div>
          </div>
          <div class="box_3">
            <div class="iconBox">
              <i class="uil uil-calendar-alt"></i>
              <div>2023/04/05</div>
            </div>
            <div class="iconBox">
              <i class="uil uil-hourglass"></i>
              <div style={{ color: "red" }}>4:40</div>
            </div>
          </div>
        </div>
        <div className="buttonControl">
          <a className="button" href="/activity2">
            上一頁
          </a>
          <a className="button">送出</a>
        </div>
      </main>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Activity3;
