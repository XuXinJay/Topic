import React, { useState, useEffect } from "react";
import "./style4.css";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";
import loaDing from "/src/loading.gif"
function Event() {
  const { user, loading } = useAuthContext();
  const [eventData, setEventData] = useState(null);
  useEffect(() => {
    // 在组件挂载时发送 GET 请求获取数据
    axios.get("/eventdata")
      .then(response => {
        // 请求成功时更新组件的数据状态
        setEventData(response.data);
      })
      .catch(error => {
        // 请求失败时处理错误
        console.error("Error fetching event data:", error);
      });
  }, []);

  if (loading) {
    return <div className="center"><img  src={loaDing} alt="" /></div>;
  }


  return (
    <div className="event_page-container">
      <div className="event_page-allActivity">
        <div className="event_page-title" style={{ textAlign: "center" }}>
          {"{"}{eventData[0].activity_name}{"}"}
        </div>
        <div className="event_page-box">
          <div className="event_page-hostName">
            <img src="" />
            <p>主辦人名字</p>
          </div>
          <div className="place">
            <i className="bi bi-geo-alt-fill" />
            <span className="">
              聚會地點 :
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                地點
              </a>
            </span>
          </div>
        </div>
        <div className="event_page-uploadImage">
          <img
            src="https://i1.wp.com/www.tripresso.com/blog/wp-content/uploads/2021/02/27.jpeg?resize=640%2C479"
            alt=""
          />
        </div>
        <div className="event_page-activityText">
          <textarea
            name=""
            id=""
            className="activityName"
            cols={30}
            rows={10}
            placeholder={123231231231231231231231231231}
            readOnly=""
            defaultValue={""}
          />
        </div>
        <hr className="event_page-gap" />
        <div className="event_page-box">
          <div className="event_page-iconBox">
            <div style={{ width: 100 }}>
              <i className="bi bi-coin" />
              <div className="">現金</div>
            </div>
          </div>
          <div className="event_page-iconBox">
            <div style={{ width: 100 }}>
              <i className="bi bi-wallet2" />
              <div className="">預算</div>
            </div>
          </div>
        </div>
        <div className="event_page-box" style={{ marginTop: 20 }}>
          <div className="event_page-iconBox">
            <div style={{ width: 100 }}>
              <i className="bi bi-calendar" />
              <div>2023/04/05</div>
            </div>
          </div>
          <div className="event_page-iconBox">
            <div style={{ width: 100 }}>
              <i className="bi bi-hourglass-split" />
              <div style={{ color: "red" }}>4:40</div>
            </div>
          </div>
        </div>
      </div>
      {user ? (
        <div className="event_page-allActivity-down">
          <div className="event_page-container-button">
            <button className="event_page-button" type="button">
              審核
            </button>
          </div>
          <div className="event_page-grid-container">
            <div className="event_page-iconBox col" style={{ margin: "0 20px" }}>
              <div>
                <i className="bi bi-people" />
                <div>
                  <span>X</span>/<span>N</span>
                </div>
              </div>
            </div>
            <div className="event_page-grid-grid-item">
              <img src="picture/test1.png" style={{ width: 70 }} />
              <div>鄭明哲</div>
            </div>
            <div className="event_page-grid-grid-item">
              <img src="picture/$.png" style={{ width: 70 }} />
              <div>吳士顯</div>
            </div>
          </div>
          {/* 相關留言 */}
          <h2 className="event_page-title">相關留言</h2>
          <div className="event_page-grid-container-message">
            <div className="event_page-grid-item-message">
              <div className="user d-flex flex-row align-items-center">
                <img
                  src="picture/test1.png"
                  width={30}
                  className="user-img rounded-circle mr-2"
                />
                <span>
                  <small className="font-weight-bold text-primary">鄭明哲</small>
                  <small className="font-weight-bold">我好帥</small>
                </span>
              </div>
              <div className="event_page-time">2 days ago</div>
            </div>
            <div className="event_page-grid-item-message">
              <div className="user d-flex flex-row align-items-center">
                <img
                  src="picture/test1.png"
                  width={30}
                  className="user-img rounded-circle mr-2"
                />
                <span>
                  <small className="font-weight-bold text-primary">鄭明哲</small>
                  <small className="font-weight-bold">我好帥</small>
                </span>
              </div>
              <div className="event_page-time">2 days ago</div>
            </div>
          </div>
          <h2 className="event_page-title">留言</h2>
          <form>
            <div className="form-group">
              <textarea
                className="event_page-textarea"
                id=""
                rows={3}
                defaultValue={""}
              />
              <div className="event_page-bbb-message">
                <button className="event_page-button-message">發送</button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="event_page-allActivity-down">
          <div className="event_page-container-button">
            <button className="event_page-button" type="button">
              報名
            </button>
          </div>
          <div className="event_page-grid-container">
            <div className="event_page-iconBox col" style={{ margin: "0 20px" }}>
              <div>
                <i className="bi bi-people" />
                <div>
                  <span>X</span>/<span>N</span>
                </div>
              </div>
            </div>
            <div className="event_page-grid-grid-item">
              <img src="picture/test1.png" style={{ width: 70 }} />
              <div>鄭明哲</div>
            </div>
            <div className="event_page-grid-grid-item">
              <img src="picture/$.png" style={{ width: 70 }} />
              <div>吳士顯</div>
            </div>
          </div>
          {/* 相關留言 */}
          <h2 className="event_page-title">相關留言</h2>
          <div className="event_page-grid-container-message">
            <div className="event_page-grid-item-message">
              <div className="user d-flex flex-row align-items-center">
                <img
                  src="picture/test1.png"
                  width={30}
                  className="user-img rounded-circle mr-2"
                />
                <span>
                  <small className="font-weight-bold text-primary">鄭明哲</small>
                  <small className="font-weight-bold">我好帥</small>
                </span>
              </div>
              <div className="event_page-time">2 days ago</div>
            </div>
            <div className="event_page-grid-item-message">
              <div className="user d-flex flex-row align-items-center">
                <img
                  src="picture/test1.png"
                  width={30}
                  className="user-img rounded-circle mr-2"
                />
                <span>
                  <small className="font-weight-bold text-primary">鄭明哲</small>
                  <small className="font-weight-bold">我好帥</small>
                </span>
              </div>
              <div className="event_page-time">2 days ago</div>
            </div>
          </div>
          <h2 className="event_page-title">留言</h2>
          <form>
            <div className="form-group">
              <textarea
                className="event_page-textarea"
                id=""
                rows={3}
                defaultValue={""}
              />
              <div className="event_page-bbb-message">
                <button className="event_page-button-message">發送</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>

  );
}

export default Event;
