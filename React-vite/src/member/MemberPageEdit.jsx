import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "./member.css";
import { Navigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

import loaDing from "../loading.gif";


function MemberPageEdit() {

  const { user, loading } = useAuthContext();
  const [memberInfo, setMemberInfo] = useState(user);

  useEffect(() => {
    setMemberInfo(user);
  }, [user]);

  async function handleUpdateMemberInfo() {
    const memberInfo_required = {
      姓名: memberInfo?.name || '',
      電子郵件: memberInfo?.email || '',
      birth: memberInfo?.member_birth,
    }
    for (let key in memberInfo_required) {
      if (memberInfo_required[key] && memberInfo_required[key].trim() === '') {
        alert(`${key}的內容不得為空值`);
        return;
      }
    }
    if (memberInfo_required.birth) {
      const birthDate = new Date(memberInfo_required.birth);
      const today = new Date();
      if (birthDate >= today) {
        alert("出生日期不得大於目前時間");
        return;
      }
    }


    try {
      const res = await axios.put("/api/members/update", memberInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data);
      window.location.href = '/member';
    } catch (err) {
      console.log(err.response.data);
    }
  }
  if (loading) {
    return <div className="center"><img src={loaDing} alt="" /></div>;
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const imageData = reader.result;
      // console.log(reader.result)
      setMemberInfo({
        ...memberInfo,
        member_avatar: imageData,
      })
    
    };
  };

  return user ? (
    <div className="member-body">
      <h1>會員頁面</h1>
      <form>
        <div className="member-intro">
          <label className=" member-photo clickable">
            <span className="member-photo_span">{memberInfo?.member_avatar ? '' : '+' }</span>
            <input
              type="file"
              className="photo-none"
              onChange={handleImageUpload} />
            <img src={memberInfo?.member_avatar} className=" member-photo-inner" />
          </label>
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
          編輯基本資料
        </label>
        <form className="member-form-conetent-edit">
          <div style={{ width: "max-content", margin: "0 auto" }}>
            <p className="member-title">
              姓　　名：
              <input
                type="text"
                name="memberName"
                defaultValue={memberInfo?.name}
                className="introduction-edit"
                placeholder="請輸入您的姓名"
                onChange={(e) =>
                  setMemberInfo({
                    ...memberInfo,
                    name: e.target.value,
                  })}
              />
            </p>
            <p className="member-title">
              電話號碼：
              <input
                type="tel"
                name="memberPhone"
                defaultValue={memberInfo?.member_phone}
                className="introduction-edit"
                placeholder="ex:0912-345678"
                onChange={(e) =>
                  setMemberInfo({
                    ...memberInfo,
                    member_phone: e.target.value,
                  })}
              />
            </p>
            <p className="member-title">
              電子郵件：
              <input
                type="email"
                name="memberEmail"
                defaultValue={memberInfo?.email}
                className="introduction-edit"
                onChange={(e) =>
                  setMemberInfo({
                    ...memberInfo,
                    email: e.target.value,
                  })}
              />
            </p>
            <p className="member-title">
              居住城市：
              <input
                type="text"
                name="memberCountry"
                defaultValue={memberInfo?.member_county}
                className="introduction-edit"
                onChange={(e) =>
                  setMemberInfo({
                    ...memberInfo,
                    member_county: e.target.value,
                  })}
              />
            </p>
            <p className="member-title">
              出生日期：
              <input
                type="date"
                name="memberBirth"
                defaultValue={memberInfo?.member_birth}
                style={{ width: 170 }}
                className="introduction-edit"
                onChange={(e) =>
                  setMemberInfo({
                    ...memberInfo,
                    member_birth: e.target.value,
                  })}
              />
            </p>
            <div className="member-title" style={{ width: "365.8px" }}>
              <label style={{ position: "relative" }}>性　　別：</label>
              <div style={{ display: "inline" }}>

                <select name="member_sex"

                  onChange={(e) =>
                    setMemberInfo({
                      ...memberInfo,
                      member_sex: e.target.value
                    })}>
                  <option value="無">無</option>
                  <option value="男">男</option>
                  <option value="女">女</option>
                  <option value="其他">其他</option>
                </select>


              </div>
            </div>
            <p></p>
            <p className="member-title">自我介紹：</p>
            <textarea
              name="memberName"
              className="introduction-textarea"
              defaultValue={memberInfo?.member_introduction}
              onChange={(e) =>
                setMemberInfo({
                  ...memberInfo,
                  member_introduction: e.target.value,
                })}
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

            <input
              type="button"
              name="introductionSubmit"
              defaultValue="確認修改"
              className="introduction-submit"
              onClick={handleUpdateMemberInfo}
            />

          </div>
        </form>

      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default MemberPageEdit;
