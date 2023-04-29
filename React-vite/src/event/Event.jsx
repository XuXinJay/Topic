import React, { useState, useEffect } from "react";
import "./style4.css";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";
import loaDing from "/src/loading.gif";
import { useParams } from "react-router-dom";

function Event() {
  const { user, loading } = useAuthContext();

  const [eventData, setEventData] = useState(null);

  const [joinData, setjoinData] = useState(null);

  const [message, setMessage] = useState({
    content: "",
  }); // 添加 message 狀態來保存文本框的輸入值

  const { activity_id } = useParams();

  const [messages, setMessages] = useState([]);

  function review() {
    window.location.href = 'http://localhost:5173/review/' + activity_id;
  }

  useEffect(() => {
    // 在組件掛載時發送 GET 請求獲取數據
    axios
      .get("api/activities/" + activity_id)
      .then((response) => {
        // 請求成功時更新組件的數據狀態
        setEventData(response.data);
      })
      .catch((error) => {
        // 請求失敗時處理錯誤
        console.error("Error fetching event data:", error);
      });

    axios
      .get("api/joinActivities/" + activity_id)
      .then((response) => {
        // 請求成功時更新組件的數據狀態
        setjoinData(response.data);
      })
      .catch((error) => {
        // 請求失敗時處理錯誤
        console.error("Error fetching event data:", error);
      });

    axios
      .get("api/messages")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, [activity_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 在提交表單時執行的處理邏輯，使用 axios 發送 POST 請求
    console.log("Form submitted. Message:", message);

    try {
      // 發送 POST 請求，並等待請求完成
      const response = await axios.post("/api/messages", message);
      // 請求成功時的處理邏輯
      console.log("Message sent successfully:", response.data);
      // 清空文本框的輸入值
      setMessage({ content: "" });
    } catch (error) {
      // 請求失敗時的處理邏輯
      console.error("Error sending message:", error);
    }

    window.location.reload();
  };

  const applySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/joinActivities', {
        member_id: user.id,
        activity_id: activity_id
      });
      console.log("applySubmit successfully:", response.data);

    } catch (error) {
      console.error("Error applySubmit:", error);
    }

    window.location.reload();
  };




  if (loading) {
    return (
      <div className="center">
        <img src={loaDing} alt="" />
      </div>
    );
  }

  return (
    <div className="event_page-container">
      <div className="event_page-allActivity">
        <div className="event_page-title" style={{ textAlign: "center" }}>
          {eventData[0].activity_name}
        </div>
        <div className="event_page-box">
          <div className="event_page-hostName">
            <img src={eventData[0].member_avatar} />
            <p>{eventData[0].name}</p>
          </div>
          <div className="place">
            <i className="bi bi-geo-alt-fill" />
            <span className="">
              聚會地點 :
              <a
                href=""
                style={{ textDecoration: "none", color: "var(--body_color)" }}
              >
                {eventData[0].activity_place}
              </a>
            </span>
          </div>
        </div>
        <div className="event_page-uploadImage">
          <img src={eventData[0].activity_image} />
        </div>
        <div className="event_page-activityText">
          <textarea
            name=""
            id=""
            className="activityName"
            cols={30}
            rows={10}
            placeholder={eventData[0].activity_board}
            readOnly
            defaultValue={""}
          />
        </div>
        <hr className="event_page-gap" />
        <div className="event_page-box">
          <div className="event_page-iconBox">
            <div style={{ width: 100 }}>
              <i className="bi bi-coin" />
              <div className="">{eventData[0].activity_payment}</div>
            </div>
          </div>
          <div className="event_page-iconBox">
            <div style={{ width: 100 }}>
              <i className="bi bi-wallet2" />
              <div className="">{eventData[0].activity_budget}</div>
            </div>
          </div>
        </div>
        <div className="event_page-box" style={{ marginTop: 20 }}>
          <div className="event_page-iconBox">
            <div style={{ width: 100 }}>
              <i className="bi bi-calendar" />
              <div>{eventData[0].activity_partyTime.slice(5, 10)}</div>
            </div>
          </div>
          <div className="event_page-iconBox">
            <div style={{ width: 100 }}>
              <i className="bi bi-hourglass-split" />
              <div style={{ color: "red" }}>123</div>
            </div>
          </div>
        </div>
      </div>
      {user ? (
        user.name == eventData[0].name ? (
          <div className="event_page-allActivity-down">
            <div className="event_page-container-button">
              <button className="event_page-button" type="button" onClick={review}>
                審核
              </button>
            </div>
            <div className="event_page-grid-container">
              <div
                className="event_page-iconBox col"
                style={{ margin: "0 20px" }}
              >
                <div>
                  <i className="bi bi-people" />
                  <div>
                    <span>X</span>/<span>N</span>
                  </div>
                </div>
              </div>
              <div className="event_page-grid-grid-item">
                <img src="" style={{ width: 70 }} />
                <div>鄭明哲</div>
              </div>

            </div>
            {/* 相關留言 */}
            <h2 className="event_page-title">相關留言</h2>
            <div className="event_page-grid-container-message">
              {messages.map((message) => {
                if (message.activity_id == activity_id) {
                  return (
                    <div
                      key={message.comment_id}
                      className="event_page-grid-item-message"
                    >
                      <div className="user d-flex flex-row align-items-center">
                        <img
                          src={message.member_avatar}
                          width={30}
                          className="user-img rounded-circle mr-2"
                          style={{ borderRadius: "50%" }}
                        />
                        <span>
                          <small className="font-weight-bold text-primary">
                            {" "}
                            {message.name}
                          </small>
                          <small className="font-weight-bold">
                            {" "}
                            {message.comment_content}
                          </small>
                        </span>
                      </div>
                      <div className="event_page-time"> {message.created_at}</div>
                    </div>
                  );
                }
              })}
            </div>
            <h2 className="event_page-title">留言</h2>
            <form action="/messages" method="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <textarea
                  className="event_page-textarea"
                  id=""
                  rows={3}
                  value={message?.comment_content} // 将状态中的值绑定到文本框的 value 属性
                  onChange={(event) =>
                    setMessage({
                      member_id: user?.id,
                      activity_id: eventData[0].activity_id,
                      comment_content: event.target.value,
                    })
                  } // 处理表单输入变化 // 监听文本框的输入变化
                />
                <div className="event_page-bbb-message">
                  <button className="event_page-button-message" type="submit">
                    發送
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="event_page-allActivity-down">

            <form action="/api/joinActivities" method="post" onSubmit={applySubmit}>
              <div className="event_page-container-button">
                <button className="event_page-button" type="submit">報名</button>
              </div>
            </form>

            <div className="event_page-grid-container">
              <div
                className="event_page-iconBox col"
                style={{ margin: "0 20px" }}
              >
                <div>
                  <i className="bi bi-people" />
                  <div>
                    <span>X</span>/<span>N</span>
                  </div>
                </div>
              </div>

              <div className="event_page-grid">
                {joinData.map((member) => {
                  if (member.join_state == "已通過") {
                    return (
                      <div className="event_page-grid-grid-item" key={member.id}>
                        <img className="event_page-grid-grid-img" src={member.member_avatar} style={{ width: 70 }} />
                        <div>{member.name}</div>
                      </div>
                    )
                  }

                })}
              </div>

            </div>
            {/* 相關留言 */}
            <h2 className="event_page-title">相關留言</h2>
            <div className="event_page-grid-container-message">
              {messages.map((message) => {
                if (message.activity_id == activity_id) {
                  return (
                    <div
                      key={message.comment_id}
                      className="event_page-grid-item-message"
                    >
                      <div className="event_page-message-board">
                        <div className="event_page-message">
                          <img
                            src={message.member_avatar}
                            width={60}
                            className="user-img rounded-circle mr-2"
                            style={{ borderRadius: "50%" }}
                          />
                          <span className="font-weight-bold text-primary">
                            {" "}
                            {message.name}
                          </span>
                        </div>
                          <small className="font-weight-bold1">
                            {" "}
                            {message.comment_content}
                          </small>
                        
                      <div className="event_page-time"> {message.created_at}</div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <h2 className="event_page-title">留言</h2>
            <form action="/messages" method="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <textarea
                  className="event_page-textarea"
                  id=""
                  rows={3}
                  value={message?.comment_content}
                  onChange={(event) =>
                    setMessage({
                      member_id: user?.id,
                      activity_id: eventData[0].activity_id,
                      comment_content: event.target.value,
                    })
                  }
                />
                <div className="event_page-bbb-message">
                  <button className="event_page-button-message" type="submit">
                    發送
                  </button>
                </div>
              </div>
            </form>
          </div>
        )

      ) : (
        <div className="event_page-allActivity-down">
          <div className="event_page-container-button">
            <button className="event_page-button2">報名</button>
          </div>
          <div className="event_page-grid-container">
            <div
              className="event_page-iconBox col"
              style={{ margin: "0 20px" }}
            >
              <div>
                <i className="bi bi-people" />
                <div>
                  <span>X</span>/<span>N</span>
                </div>
              </div>
            </div>
            <div className="event_page-grid-grid-item">
              <img src="" style={{ width: 70 }} />
              <div>鄭明哲</div>
            </div>

          </div>
          {/* 相關留言 */}
          <h2 className="event_page-title">相關留言</h2>
          <div className="event_page-grid-container-message">
            {messages.map((message) => {
              if (message.activity_id == activity_id) {
                return (
                  <div
                    key={message.comment_id}
                    className="event_page-grid-item-message"
                  >
                    <div className="user d-flex flex-row align-items-center">
                      <img
                        src={message.member_avatar}
                        width={30}
                        className="user-img rounded-circle mr-2"
                        style={{ borderRadius: "50%" }}
                      />
                      <span>
                        <small className="font-weight-bold text-primary">
                          {" "}
                          {message.name}
                        </small>
                        <small className="font-weight-bold">
                          {" "}
                          {message.comment_content}
                        </small>
                      </span>
                    </div>
                    <div className="event_page-time"> {message.created_at}</div>
                  </div>
                );
              }
            })}
          </div>
          <h2 className="event_page-title">留言</h2>

          <div className="form-group">
            <textarea
              className="event_page-textarea"
              id=""
              rows={3}
              value={message?.comment_content}
              onChange={(event) =>
                setMessage({
                  member_id: user?.id,
                  activity_id: eventData[0].activity_id,
                  comment_content: event.target.value,
                })
              }
            />
            <div className="event_page-bbb-message">
              <button className="event_page-button-message2">發送</button>
            </div>
          </div>
        </div>)
      }
    </div>
  );
}

export default Event;
