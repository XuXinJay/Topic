import React, { useState, useEffect } from "react";
import "./member.css";
import useAuthContext from "../context/AuthContext";
import memberPhoto from "./img/member-photo.gif";
import design from "./img/design.jpg";
import loaDing from "../loading.gif";

function MemberPage() {

  const { user, loading } = useAuthContext();
  const [memberInfo, setMemberInfo] = useState(user);

  useEffect(() => {
    setMemberInfo(user);
  }, [user]);

  if (loading) {
    return <div className="center"><img src={loaDing} alt="" /></div>;
  }

  return user ? (
    <div className="member-body">
      <h1>會員頁面</h1>
      <form>
        <div className="member-intro">
          <div>
            <img src={memberInfo?.member_avatar} className="member-photo" />
          </div>
          <div style={{ textAlign: "left" }}>
            <span>姓名：</span>
            <span
              name="memberName"
              className="member-input"
              size={10}
            >
              {memberInfo?.name}
            </span>
            <br />
            <br />
            <br />
            <span style={{ marginTop: 20 }}>生日：</span>
            <span
              name="memberName"
              className="member-input"
              size={10}
            >
              {memberInfo?.member_birth}
            </span>
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
                defaultValue={memberInfo?.name}
                className="introduction-input"
                readOnly
              />
            </p>
            <p className="member-title">
              電話號碼：
              <input
                defaultValue={memberInfo?.member_phone}
                className="introduction-input"
                readOnly
              />
            </p>
            <p className="member-title">
              電子信箱：
              <input
                defaultValue={memberInfo?.email}
                className="introduction-input"
                readOnly
              />
            </p>
            <p className="member-title">
              居住城市：
              <input
                defaultValue={memberInfo?.member_county}
                className="introduction-input"
                readOnly
              />
            </p>
            <p className="member-title">
              出生日期：
              <input
                style={{ width: 170 }} 
                className="introduction-input"
                defaultValue={memberInfo?.member_birth}
                readOnly
              />
            </p>
            <div className="member-title" style={{ width: "365.8px" }}>
              <label style={{ position: "relative" }}>性　　別：</label>
              <input  
                className="introduction-input"
                defaultValue={memberInfo?.member_sex}
                readOnly
              />
            </div>
            <p></p>
            <p className="member-title">自我介紹：</p>
            <textarea
              readOnly
              name="memberName"
              className="introduction-textarea"
              defaultValue={memberInfo?.member_introduction}
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
                活動日期：
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
                審核
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
                type="button"
                value="取消報名"
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
                type="button"
                value="取消報名"
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
                type="button"
                value="取消報名"
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
                type="button"
                defaultValue="取消收藏"
                className="collect-cancel"
              />
            </div>
          </div>
        </form>
        {/* collect tab end */}
      </div>
    </div>
  ) : (
    <Navidate to="/" />
  );
}

export default MemberPage;
