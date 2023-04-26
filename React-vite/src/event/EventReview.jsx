import React, { useState, useEffect } from "react";
import "./introduce.css";
import useAuthContext from "../context/AuthContext";
import loaDing from "../loading.gif";
import axios from "../api/axios";

function EventReview() {

  const { user, loading } = useAuthContext();
  const [joinActivities, setJoinActivities] = useState([]);
  const [memberInfo, setMemberInfo] = useState(user);

  useEffect(() => {
    setMemberInfo(user);
  }, [user]);


  useEffect(() => {
    async function getActivity() {
      try {
        const response = await axios.get("api/joinActivities");
        // console.log(response.data);
        setJoinActivities(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getActivity();
  }, []);








  if (loading) {
    return <div className="center"><img src={loaDing} alt="" /></div>;
  }




  return user ? (
    <div className="event_introduce_box">


      <h1 style={{ textAlign: "center" }}>活動審核</h1>
      {
        //  console.log(join_activities);
        joinActivities.map((activity) => {
          if (user.id !== activity.id) {
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
                      <button className="event_page-check_pass">確認</button>
                      <button className="event_page-check_refuse">拒絕</button>
                    </div>
                  </div>
                </div>


              </React.Fragment>
            )
          }
        }
        )
      }




    </div>






  ) : (
    <Navidate to="/" />
  );


}

export default EventReview;
