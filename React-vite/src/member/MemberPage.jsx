import React, { useState, useEffect } from "react";
import "./member.css";
import useAuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import design from "./img/design.jpg";
import loaDing from "../loading.gif";
import axios from "../api/axios";


function MemberPage() {

  const { user, loading } = useAuthContext();
  const [organize_activities, setorganizeActivities] = useState([]);
  const [join_activities, setjoinActivities] = useState([]);
  const [favorite_activities, setfavoriteActivities] = useState([]);
  const [memberInfo, setMemberInfo] = useState(user);
  const [joinCount, setJoinCount] = useState(0);

  useEffect(() => {
    setMemberInfo(user);
  }, [user]);

  // ------------------------------------------------------------舉辦活動
  useEffect(() => {
    async function getActivity() {
      try {
        const response = await axios.get("api/organizeActivities");
        // console.log(response.data);
        setorganizeActivities(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getActivity();
  }, []);



  // ------------------------------------------------------------參與活動
  useEffect(() => {
    async function getActivity() {
      try {
        const response = await axios.get("api/joinActivities");
        setjoinActivities(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getActivity();
  }, []);

  // ------------------------------------------------------------舉辦活動（報名人數）

  function getJoinCount(activity_id) {
    let count = 0;
    join_activities.forEach((activity) => {
      if (activity.activity_id === activity_id && activity.join_state !== "未通過") {
        count++;
      }
    });
    return count > 0 ? count : 0;
  }

  // ------------------------------------------------------------取消報名活動


  async function deletejoinActivity(activity_id, id) {
    const activityId = activity_id;
    const memberId = id;
    try {
      const response = await axios.delete(`api/joinActivities/${activityId}/${memberId}`);
      window.location.href = '/member';
    } catch (error) {
      console.error(error);
    }
  }


  // ------------------------------------------------------------收藏活動
  useEffect(() => {
    async function getActivity() {
      try {
        const response = await axios.get("api/favoriteActivities");
        setfavoriteActivities(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getActivity();
  }, []);

  // ------------------------------------------------------------刪除收藏活動


  async function deleteActivity(activity_id, id) {
    const activityId = activity_id;
    const memberId = id;
    try {
      const response = await axios.delete(`api/favoriteActivities/${activityId}/${memberId}`);
      window.location.href = '/member';
    } catch (error) {
      console.error(error);
    }
  }




  // ------------------------------------------------------------時間格式
  function formatDate(dateString) {
    var date = new Date(dateString);
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    return year + '-' + month + '-' + day;
  }



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
                title={memberInfo?.email}
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

        <label className="member-label" id="labelAlert" htmlFor="tab2">
          發起活動

          {/* <span className="alertIcon" ><i class="uil uil-exclamation-circle"></i></span> */}

        </label>

        <form className="member-form-content">
          <p>未發起任何活動</p>
          {organize_activities.map((activity) => {
            const count = getJoinCount(activity.activity_id);
            if (user.id === activity.id) {
              return (
                <div className="organise-content">
                  <div>
                    <img src={activity.activity_image} className="organise-photo" />
                  </div>
                  <div style={{ marginLeft: ".3rem", color: "black", textAlign: "initial" }}>
                    <span>活動名稱：</span>
                    <input
                      type="text"
                      name="organiseName"
                      defaultValue={activity.activity_name}
                      className="organise-sub"
                      size={10}
                      readOnly
                    />
                    <br />

                    <span>報名人數：</span>
                    <span>{count}/{activity.activity_number}</span>

                    <br />
                    <span>活動地點：</span>
                    <input
                      type="text"
                      name="organiseName"
                      defaultValue={activity.activity_place}
                      className="organise-sub"
                      size={10}
                      readOnly
                    />
                    <br />
                    <span>活動日期：</span>
                    <input
                      type="datetime"
                      name="organiseName"
                      defaultValue={formatDate(activity.activity_partyTime)}
                      className="organise-sub"
                      size={10}
                      readOnly
                    />
                  </div>
                  <div style={{ position: "relative" }}>
                    {count ?
                      <a className="organise-submit" href={`/review/${activity.activity_id}`}>
                        審核
                      </a>
                      : ""}
                  </div>

                </div>


              );
            }
          })}
        </form>
        {/* organise_event tab end */}





























        {/* campaign tab start */}
        <input id="tab3" type="radio" name="tab" />
        <label className="member-label" htmlFor="tab3">
          參加活動
        </label>









        <form className="member-form-content">
          <p>未參加任何活動</p>

          {join_activities.map((activity) => {
            if (user.id === activity.id) {
              return (
                <div className="campaign-content" >
                  <div>
                    <img src={activity.activity_image} className="campaign-photo" />
                  </div>
                  <div style={{ marginLeft: ".3rem", color: "black" }}>
                    <span>活動名稱：</span>
                    <input
                      type="text"
                      name="campaignName"
                      defaultValue={activity.activity_name}
                      className="campaign-sub"
                      size={10}
                      readOnly
                    />
                    <br />
                    <span>活動地點：</span>
                    <input
                      type="text"
                      defaultValue={activity.activity_place}
                      className="campaign-sub"
                      size={10}
                      readOnly
                    />
                    <br />
                    <span>活動日期：</span>
                    <input
                      type="datetime"
                      defaultValue={formatDate(activity.activity_partyTime)}
                      className="campaign-sub"
                      size={10}
                      readOnly
                    />
                  </div>
                  <div style={{ position: "relative" }}>
                    <input
                      type="button"
                      // defaultValue="審核中"
                      defaultValue={activity.join_state}
                      className={activity.join_state === "已拒絕" ? "campaign-unpass"
                        : activity.join_state === "已通過" ? "campaign-pass"
                          : "campaign-review"}
                    // className="campaign-review"
                    />
                    <input
                      type="button"
                      value="取消報名"
                      className="campaign-cancel"
                      onClick={() =>
                        deletejoinActivity(activity.activity_id, user.id)
                      }
                    />
                  </div>
                </div>
              );
            }
          })}
        </form>
        {/* campaign tab end */}


























































        {/* collect tab start */}
        <input id="tab4" type="radio" name="tab" />
        <label className="member-label" htmlFor="tab4">
          收藏
        </label>
        <form className="member-form-content">
          <p>未收藏任何活動</p>

          {favorite_activities.map((activity) => {
            if (user.id === activity.id) {
              return (
                <div className="collect-content">
                  <div>
                    <img src={activity.activity_image} className="collect-photo" />
                  </div>
                  <div style={{ marginLeft: ".3rem", color: "black" }}>
                    <span>活動名稱：</span>
                    <input
                      type="text"
                      name="collectName"
                      defaultValue={activity.activity_name}
                      className="collect-sub"
                      size={10}
                      readOnly
                    />
                    <br />
                    <span>活動地點：</span>
                    <input
                      type="text"
                      name="collectName"
                      defaultValue={activity.activity_place}
                      className="collect-sub"
                      size={10}
                      readOnly
                    />
                    <br />
                    <span>活動日期：</span>
                    <input
                      type="datetime"
                      name="collectName"
                      defaultValue={formatDate(activity.activity_partyTime)}
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
                      onClick={() =>
                        deleteActivity(activity.activity_id, user.id)
                      }
                    />
                  </div>
                </div>

              );
            }
          })}


        </form>
        {/* collect tab end */}
      </div >
    </div >
  ) : (
    <Navigate to="/" />
  );
}

export default MemberPage;
