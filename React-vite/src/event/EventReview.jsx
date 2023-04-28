import React, { useState, useEffect } from "react";
import "./introduce.css";
import useAuthContext from "../context/AuthContext";
import loaDing from "../loading.gif";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function EventReview() {
  const { user, loading } = useAuthContext();
  const [joinActivities, setJoinActivities] = useState([]);
  const [memberInfo, setMemberInfo] = useState(user);
  // const [join_activities, setjoinActivities] = useState([]);
  const { activity_id } = useParams();

  useEffect(() => {
    setMemberInfo(user);
  }, [user]);

  useEffect(() => {
    async function getActivity() {
      try {
        const response = await axios.get(`api/joinActivities/${activity_id}`);
        // console.log(response.data);
        setJoinActivities(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getActivity();
  }, []);

  // ------------------------------------------------------------------確認按鈕

  useEffect(() => {
    setMemberInfo(user);
  }, [user]);
  async function handleCheckPass(activity_id, id) {
    const activityId = activity_id;
    const memberId = id;
    try {
      const updateJoinState = {
        join_state: "已通過",
      };
      const res = await axios.post(
        `/api/joinActivities/update/${activityId}/${memberId}`,
        updateJoinState,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      window.location.href = `/review/${activityId}`;
    } catch (err) {
      console.log(err.response.data);
    }
  }
  // handleCheckPass();

  // ------------------------------------------------------------------拒絕按鈕

  useEffect(() => {
    setMemberInfo(user);
  }, [user]);
  async function handleCheckUnPass(activity_id, id) {
    const activityId = activity_id;
    const memberId = id;
    try {
      const updateJoinState = {
        join_state: "已拒絕",
      };
      const res = await axios.post(
        `/api/joinActivities/update/${activityId}/${memberId}`,
        updateJoinState,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      window.location.href = `/review/${activityId}`;
    } catch (err) {
      console.log(err.response.data);
    }
  }










  if (loading) {
    return (
      <div className="center">
        <img src={loaDing} alt="" />
      </div>
    );
  }

  return user ? (
    <div className="event_introduce_box">
      <h1 className="event_introduce_box_title">活動審核</h1>
      <br/>
      <h2>目前無人報名此活動</h2>
      {
        //  console.log(join_activities);
        joinActivities.map((activity) => {
          if (user.id !== activity.id && activity.join_state === "審核中") {
            return (
              <React.Fragment>
                <div className="event_introduce">
                  <div className="event_container_123">
                    <div style={{ flex: 1 }}>
                      <img src={activity.member_avatar} alt="" />
                    </div>

                    <div className="event_introduce_des">
                      <div>
                        活動名稱 : <span>{activity.activity_name}</span>
                      </div>
                      <div>
                        姓名 : <span>{activity.name}</span>
                      </div>
                    </div>

                    <div className="event_page-check">
                      <input
                        type="button"
                        defaultValue="確認"
                        className="event_page-check_pass"
                        onClick={() =>
                          handleCheckPass(activity.activity_id, activity.id)
                        }
                      />
                      <input
                        type="button"
                        defaultValue="拒絕"
                        className="event_page-check_refuse"
                        onClick={() =>
                          handleCheckUnPass(activity.activity_id, activity.id)
                        }
                      />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          }
        })
      }
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default EventReview;
