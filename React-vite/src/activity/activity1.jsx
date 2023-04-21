import React from "react";
import { Navigate } from "react-router-dom";
import "./style1.css";
import useAuthContext from "../context/AuthContext";
import loaDing from "/src/loading.gif"

function Activity1() {
  const { user ,loading } = useAuthContext();

  if (loading) {
    return <div className="center"><img  src={loaDing} alt="" /></div>;
  }
  
  return user ? (
    <div className="activity_container">
      <div className="progressBar">
        <div className="progress">活動畫面</div>
        <div className="progress">細項資料</div>
        <div className="progress">預覽</div>
      </div>
      <main className="activity_main">
        <div className="meetType">
          <div className="activity_title">聚會類型 : </div>
          <div className="tagBox">
            <div className="tag">
              🍿<span>電影</span>
            </div>
            <div className="tag">
              🎲<span>桌游</span>
            </div>
            <div className="tag">
              🍴<span>聚餐</span>
            </div>
            <div className="tag">
              📖<span>閱讀</span>
            </div>
            <div className="tag">
              🚶<span>運動</span>
            </div>
            <div className="tag">
              🛍<span>購物</span>
            </div>
            <div className="tag">
              🎨<span>彩繪</span>
            </div>
          </div>
          <div className="tagBox">
            <div className="tag">
              🎂<span>烘焙</span>
            </div>
            <div className="tag">
              🍳<span>烹飪</span>
            </div>
            <div className="tag">
              🎸<span>音樂</span>
            </div>
            <div className="tag">
              🧺<span>野餐</span>
            </div>
            <div className="tag">
              🧘<span>瑜珈</span>
            </div>
            <div className="tag">
              💐<span>花藝</span>
            </div>
            <div className="tag">
              🐶<span>寵物</span>
            </div>
          </div>
        </div>
        <div className="imageUpload">
          <div className="activity_title">上傳圖片 : </div>
          <label htmlFor="fileInput" className="fileLabel">
            <span className="fileSpan">➕</span>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              className="fileInput"
              required=""
            />
          </label>
          <div className="imageDefault">
            <span className="arrowButton">◀</span>
            <div className="imageBox">
              <img
                src="https://tw.cyberlink.com/prog/learning-center/html/10104/PHDApp_CHT_profile_picture/img/cartoon-sticker-cutout.jpg"
                alt={1}
              />
              <img
                src="https://tw.cyberlink.com/prog/learning-center/html/10104/PHDApp_CHT_profile_picture/img/cartoon-sticker-cutout.jpg"
                alt={2}
              />
              <img
                src="https://tw.cyberlink.com/prog/learning-center/html/10104/PHDApp_CHT_profile_picture/img/cartoon-sticker-cutout.jpg"
                alt={3}
              />
            </div>
            <span className="arrowButton">▶</span>
          </div>
        </div>
        <div className="activityUpload">
          <div className="activity_title">
            <label htmlFor="">
              活動名稱 :
              <input type="text" className="activityName" required="" />
            </label>
          </div>
          <textarea
            name=""
            id="activityText"
            cols={30}
            rows={10}
            placeholder="請簡述活動內容，300字以內"
            className="activityText"
            required=""
            defaultValue={""}
          />
        </div>
        <div className="buttonControl-one">
          {/* <div class="button">上一頁</div> */}
          <a className="button" href="/activity2">
            下一頁
          </a>
        </div>
      </main>
    </div>
    ) : (
      <Navigate to="/" />
  );
}

export default Activity1;
