import React from "react";
import "./member.css";
import memberPhoto from "./img/member-photo.gif";
import design from "./img/design.jpg";

function MemberPageEdit() {
  return (
    <div className="member-body">
      <h1>會員頁面</h1>
      <form>
        <div className="member-intro">
          <div>
            <img src={memberPhoto} className="member-photo" />
          </div>
          <div>
            <span>姓名：</span>
            <input
              type="text"
              name="memberName"
              defaultValue="AAA"
              className="member-input"
              size={10}
              readOnly
            />
            <br />
            <br />
            <br />
            <span style={{ marginTop: 20 }}>生日：</span>
            <input
              type="text"
              name="memberName"
              className="member-input"
              size={10}
              defaultValue="2023/2/28"
              readOnly
            />
          </div>
        </div>
      </form>
      <div className="member-tab">
        {/* introduction tab start */}
        <input id="tab1" type="radio" name="tab" defaultChecked="checked" />
        <label className="member-label" htmlFor="tab1">
          編輯基本資料
        </label>
        <form className="member-form-content">
          <div style={{ width: "max-content", margin: "0 auto" }}>
            <p className="member-title">
              姓　　名：
              <input
                type="text"
                name="memberPhone"
                defaultValue="AAA"
                className="introduction-input"
              />
            </p>
            <p className="member-title">
              電話號碼：
              <input
                type="text"
                name="memberPhone"
                defaultValue="0995-852651"
                className="introduction-input"
              />
            </p>
            <p className="member-title">
              {" "}
              電子郵件：
              <input
                type="email"
                name="memberEmail"
                defaultValue="test123@gmail.com"
                className="introduction-input"
              />
            </p>
            <p className="member-title">
              居住城市：
              <input
                type="text"
                name="memberCountry"
                defaultValue="台中市西區"
                className="introduction-input"
              />
            </p>
            <p className="member-title">
              出生日期：
              <input
                type="date"
                name="memberBirth"
                defaultValue="2023-02-28"
                style={{ width: 170 }}
                className="introduction-input"
              />
            </p>
            <div className="member-title" style={{ width: "365.8px" }}>
              <label style={{ position: "relative" }}>興　　趣：</label>
              <div style={{ display: "inline" }}>
                
                <input
                  type="checkbox"
                  className="introduction-input"
                  id="movie"
                  readOnly=""
                />
                <label htmlFor="movie">電影</label>
                <input
                  type="checkbox"
                  className="introduction-input"
                  id="food"
                  readOnly=""
                />
                <label htmlFor="food">吃飯</label>
                <input
                  type="checkbox"
                  className="introduction-input"
                  id="sport"
                  readOnly=""
                />
                <label htmlFor="sport">運動</label>
                <input
                  type="checkbox"
                  className="introduction-input"
                  id="game"
                  readOnly=""
                />
                <label htmlFor="game">桌遊</label>
              </div>
            </div>
            <p></p>
            <p className="member-title">自我介紹：</p>
            <textarea
              name="memberName"
              className="introduction-textarea"
              defaultValue={"大家好！歡迎跟我交朋友！"}
            />
            <p />
            <a href="/member">
              <input
                type="button"
                name="introductionSubmit"
                defaultValue="取消編輯"
                className="introduction-submit"
              />
            </a>
            <a href="http://127.0.0.1:5500/introduction.html">
              <input
                type="button"
                name="introductionSubmit"
                defaultValue="確認修改"
                className="introduction-submit"
              />
            </a>
          </div>
        </form>

      </div>
    </div>
  );
}

export default MemberPageEdit;
