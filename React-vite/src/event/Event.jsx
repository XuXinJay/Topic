import React, { useState, useEffect } from "react";
import "./style4.css";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";
import loaDing from "/src/loading.gif";
import { useParams } from "react-router-dom";

function Event() {
  const { user, loading } = useAuthContext();

  const [eventData, setEventData] = useState(null);

  const [message, setMessage] = useState({
    content: "",
  }); // 添加 message 状态来保存文本框的输入值

  const { activity_id } = useParams();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // 在组件挂载时发送 GET 请求获取数据
    axios
      .get("api/activities/" + activity_id)
      .then((response) => {
        // 请求成功时更新组件的数据状态
        setEventData(response.data);
      })
      .catch((error) => {
        // 请求失败时处理错误
        console.error("Error fetching event data:", error);
      });

    axios
      .get("api/messages")
      .then((response) => {
        // 请求成功时处理 /messages 返回的数据

        setMessages(response.data);
        // 更新状态或其他操作
      })
      .catch((error) => {
        // 请求失败时处理错误
        console.error("Error fetching messages:", error);
      });
  }, [activity_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 在提交表单时执行的处理逻辑，可以使用 axios 发送 POST 请求等
    console.log("Form submitted. Message:", message);

    try {
      // 发送 POST 请求到 http://127.0.0.1:8000/messages，并等待请求完成
      const response = await axios.post("/api/messages", message);
      // 请求成功时的处理逻辑
      console.log("Message sent successfully:", response.data);
      // 清空文本框的输入值
      setMessage({ content: "" });
    } catch (error) {
      // 请求失败时的处理逻辑
      console.error("Error sending message:", error);
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
              <div>{eventData[0].activity_partyTime}</div>
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
      {user == eventData[0].name ? (
        <div className="event_page-allActivity-down">
          <div className="event_page-container-button">
            <button className="event_page-button" type="button">
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
            <div className="event_page-grid-grid-item">
              <img src="" style={{ width: 70 }} />
              <div>吳士顯</div>
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
      ) : user ? (
        <div className="event_page-allActivity-down">
          <div className="event_page-container-button">
            <button className="event_page-button">報名</button>
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
            <div className="event_page-grid-grid-item">
              <img src="" style={{ width: 70 }} />
              <div>吳士顯</div>
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
            <div className="event_page-grid-grid-item">
              <img src="" style={{ width: 70 }} />
              <div>吳士顯</div>
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
        </div>
      )}
    </div>
  );
}

export default Event;
