import React from "react";
import "./member.css";
import memberPhoto from "./img/member-photo.gif";
import design from "./img/design.jpg";

function MemberPage() {
  return (
    <div className="member-body">
      <h1>會員頁面</h1>
      <form>
        <div className="member-intro">
          <div>
            <img src={memberPhoto} className="member-photo" />
          </div>
          <div>
            <sapn>姓名：</sapn>
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
          簡介
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
                readOnly
              />
            </p>
            <p className="member-title">
              電話號碼：
              <input
                type="text"
                name="memberPhone"
                defaultValue="0995-852651"
                className="introduction-input"
                readOnly
              />
            </p>
            <p className="member-title">
              {" "}
              電子信箱：
              <input
                type="email"
                name="memberEmail"
                defaultValue="test123@gmail.com"
                className="introduction-input"
                readOnly
              />
            </p>
            <p className="member-title">
              居住城市：
              <input
                type="text"
                name="memberCountry"
                defaultValue="台中市西區"
                className="introduction-input"
                readOnly
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
                readOnly
              />
            </p>
            <div className="member-title" style={{ width: "365.8px" }}>
              <label style={{ position: "relative" }}>興　　趣：</label>
              <div style={{ display: "inline" }}>
                
                <span>
                  #
                  <input
                    type="text"
                    className="introduction-input"
                    style={{ width: 30 }}
                    defaultValue="電影"
                    readOnly
                  />
                </span>
                <span>
                  #
                  <input
                    type="text"
                    className="introduction-input"
                    style={{ width: 30 }}
                    defaultValue="吃飯"
                    readOnly
                  />
                </span>
                <span>
                  #
                  <input
                    type="text"
                    className="introduction-input"
                    style={{ width: 30 }}
                    defaultValue="運動"
                    readOnly
                  />
                </span>
                <span>
                  #
                  <input
                    type="text"
                    className="introduction-input"
                    style={{ width: 30 }}
                    defaultValue="桌遊"
                    readOnly
                  />
                </span>
              </div>
            </div>
            <p></p>
            <p className="member-title">自我介紹：</p>
            <textarea
              readOnly
              name="memberName"
              value="大家好"
              className="introduction-textarea"
              defaultValue={"大家好！歡迎跟我交朋友！"}
            />
            <p />
            <a href="/memberEdit">
              <input
                type="button"
                name="introductionSubmit"
                defaultValue="編輯"
                className="introduction-submit"
              />
            </a>
          </div>
        </form>
        {/* introduction tab end */}
        {/* organise_event tab start */}
        <input id="tab2" type="radio" name="tab" />
        <label className="member-label" htmlFor="tab2">
          發起活動
        </label>
        <form className="member-form-content">
          <div className="organise-content">
            <div>
              <img src={design} className="organise-photo" />
            </div>
            <div>
              <span>活動名稱：</span>
              <input
                type="text"
                name="organiseName"
                defaultValue="發起活動"
                className="organise-sub"
                size={10}
                readOnly
              />
              <br />
              <span>活動地點：</span>
              <input
                type="text"
                name="organiseName"
                defaultValue="資策會"
                className="organise-sub"
                size={10}
                readOnly
              />
              <br />
              <span style={{ position: "relative", left: 7 }}>
                {" "}
                活動日期：{" "}
              </span>
              <input
                type="date"
                name="organiseName"
                defaultValue="2023-02-28"
                className="organise-sub"
                size={10}
                readOnly
              />
            </div>
            <div style={{ position: "relative" }}>
              <a className="organise-submit" href="/review">
                人員<br/>審核
              </a>
            </div>
          </div>
        </form>
        {/* organise_event tab end */}
        {/* campaign tab start */}
        <input id="tab3" type="radio" name="tab" />
        <label className="member-label" htmlFor="tab3">
          參加活動
        </label>
        <form className="member-form-content">
          {/* 審核中 */}
          <div className="campaign-content">
            <div>
              <img src={design} className="campaign-photo" />
            </div>
            <div>
              <span>活動名稱：</span>
              <input
                type="text"
                name="campaignName"
                defaultValue="參加活動"
                className="campaign-sub"
                size={10}
                readOnly
              />
              <br />
              <span>活動地點：</span>
              <input
                type="text"
                name="campaignName"
                defaultValue="資策會"
                className="campaign-sub"
                size={10}
                readOnly
              />
              <br />
              <span style={{ position: "relative", left: 7 }}>活動日期： </span>
              <input
                type="date"
                name="campaignName"
                defaultValue="2023-02-28"
                className="campaign-sub"
                size={10}
                readOnly
              />
            </div>
            <div style={{ position: "relative" }}>
              <input
                type="button"
                defaultValue="審核中"
                className="campaign-review"
              />
              <input
                type="submit"
                Value="取消報名"
                className="campaign-cancel"
              />
            </div>
          </div>
          {/* 已通過 */}
          <div className="campaign-content">
            <div>
              <img src={design} className="campaign-photo" />
            </div>
            <div>
              <span>活動名稱：</span>
              <input
                type="text"
                name="campaignName"
                defaultValue="參加活動"
                className="campaign-sub"
                size={10}
                readOnly
              />
              <br />
              <span>活動地點：</span>
              <input
                type="text"
                name="campaignName"
                defaultValue="資策會"
                className="campaign-sub"
                size={10}
                readOnly
              />
              <br />
              <span style={{ position: "relative", left: 7 }}>活動日期： </span>
              <input
                type="date"
                name="campaignName"
                defaultValue="2023-02-28"
                className="campaign-sub"
                size={10}
                readOnly
              />
            </div>
            <div style={{ position: "relative" }}>
              <input
                type="button"
                defaultValue="已通過"
                className="campaign-pass"
              />
              <input
                type="submit"
                Value="取消報名"
                className="campaign-cancel"
              />
            </div>
          </div>
          {/* 未通過 */}
          <div className="campaign-content">
            <div>
              <img src={design} className="campaign-photo" />
            </div>
            <div>
              <span>活動名稱：</span>
              <input
                type="text"
                name="campaignName"
                defaultValue="參加活動"
                className="campaign-sub"
                size={10}
                readOnly
              />
              <br />
              <span>活動地點：</span>
              <input
                type="text"
                name="campaignName"
                defaultValue="資策會"
                className="campaign-sub"
                size={10}
                readOnly
              />
              <br />
              <span style={{ position: "relative", left: 7 }}>活動日期： </span>
              <input
                type="date"
                name="campaignName"
                defaultValue="2023-02-28"
                className="campaign-sub"
                size={10}
                readOnly
              />
            </div>
            <div style={{ position: "relative" }}>
              <input
                type="button"
                defaultValue="未通過"
                className="campaign-unpass"
              />
              <input
                type="submit"
                Value="取消報名"
                className="campaign-cancel"
              />
            </div>
          </div>
        </form>
        {/* campaign tab end */}
        {/* collect tab start */}
        <input id="tab4" type="radio" name="tab" />
        <label className="member-label" htmlFor="tab4">
          收藏
        </label>
        <form className="member-form-content">
          <div className="collect-content">
            <div>
              <img src={design} className="collect-photo" />
            </div>
            <div>
              <span>活動名稱：</span>
              <input
                type="text"
                name="collectName"
                defaultValue="收藏"
                className="collect-sub"
                size={10}
                readOnly
              />
              <br />
              <span>活動地點：</span>
              <input
                type="text"
                name="collectName"
                defaultValue="資策會"
                className="collect-sub"
                size={10}
                readOnly
              />
              <br />
              <span style={{ position: "relative", left: 7 }}>活動日期： </span>
              <input
                type="date"
                name="collectName"
                defaultValue="2023-02-28"
                className="collect-sub"
                size={10}
                readOnly
              />
            </div>
            <div style={{ position: "relative" }}>
              <input
                type="submit"
                Value="取消收藏"
                className="collect-cancel"
              />
            </div>
          </div>
        </form>
        {/* collect tab end */}
      </div>
    </div>
  );
}

export default MemberPage;
