import React, { useState, useEffect } from "react";
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";
import axios from "../api/axios";
import "./notify.css";
import useAuthContext from "../context/AuthContext";

function Notify() {
  const [activityNotifys, setActivityNotifys] = useState([]);
  const [accountNotifys, setAccountNotifys] = useState([]);
  const [systemNotifys, setSystemNotifys] = useState([]);
  const [perPage, setPerPage] = useState(15);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const { user, logout, loading } = useAuthContext();

  const PerPageChangeActivity = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(activityNotifys.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const PerPageChangeAccount = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(accountNotifys.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const PerPageChangeSystem = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(systemNotifys.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button>
          <i className="uil uil-angle-left"></i>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <i className="uil uil-angle-right"></i>
        </button>
      );
    }
    return originalElement;
  };

  useEffect(() => {
    async function getNotify() {
      try {
        const response = await axios.get("api/notify");
        const notifyData =  Object.values(response.data)
        const activityNotifys = notifyData.filter(
          (notify) =>
            notify.notification_type === "活動" && notify.id === user.id
        );
        const accountNotifys = notifyData.filter(
          (notify) =>
            notify.notification_type === "帳號" && notify.id === user.id
        );        
        setActivityNotifys(activityNotifys);
        setAccountNotifys(accountNotifys);
      } catch (error) {
        console.error(error);
      }
    }
    getNotify();

    async function getNotify2() {
      try {
        const response = await axios.get("api/notify2");
        const notifyData2 =  Object.values(response.data)        
        const systemNotifys = notifyData2.filter(
          (notify) => notify.notification_type === "系統"
        );        
        setSystemNotifys(systemNotifys);
      } catch (error) {
        console.error(error);
      }
    }
    getNotify2();
  }, [user]);
  // console.log(activityNotifys)
  // console.log(accountNotifys)
  // console.log(systemNotifys)
  const getDataActivity = (current, pageSize) => {
    // Normally you should get the data from the server
    return activityNotifys.slice((current - 1) * pageSize, current * pageSize);
  };

  const getDataAccount = (current, pageSize) => {
    // Normally you should get the data from the server
    return accountNotifys.slice((current - 1) * pageSize, current * pageSize);
  };

  const getDataSystem = (current, pageSize) => {
    // Normally you should get the data from the server
    return systemNotifys.slice((current - 1) * pageSize, current * pageSize);
  };

  return (
    <main className="main">
      {user ? (
        <div className="notify_container">
          <div className="content">
            <input
              className="radio"
              type="radio"
              id="chat"
              name="slider"
              defaultChecked={true}
            />
            <input className="radio" type="radio" id="user" name="slider" />
            <input className="radio" type="radio" id="info" name="slider" />
            <div className="color_box"></div>
            <div className="list">
              <label
                htmlFor="chat"
                className="chat-btn notify-btn"
                tabIndex="1"
              >
                <span className="title">活動通知</span>
              </label>
              <label
                htmlFor="user"
                className="user-btn notify-btn"
                tabIndex="1"
              >
                <span className="title">帳號通知</span>
              </label>
              <label
                htmlFor="info"
                className="info-btn notify-btn"
                tabIndex="1"
              >
                <span className="title">系統通知</span>
              </label>
            </div>
            <div className="text-content">
              <div className="chat text bulletin">
                <div className="title">活動通知</div>
                <div className="notify_box">
                  <div className="notify_table_divbox">
                    <table className="notify_table">
                      <thead className="notify_table_thead">
                        <tr>
                          <th>公告</th>
                        </tr>
                      </thead>
                      <tbody className="notify_tbody">
                        {getDataActivity(current, size).map(
                          (activityNotifys, index) => {
                            return (
                              <tr key={activityNotifys.notify_id}>
                                <td
                                  className={
                                    activityNotifys.notify_state.includes(
                                      "未通過"
                                    )
                                      ? "notify_tbody_border_RED"
                                      : "notify_tbody_border"
                                  }
                                >
                                  {activityNotifys.notify_state}
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="notify_change_page table-filter-info">
                  <Pagination
                    className="pagination-data notify_change_page_li"
                    onChange={PaginationChange}
                    total={activityNotifys.length}
                    current={current}
                    pageSize={size}
                    showSizeChanger={false}
                    itemRender={PrevNextArrow}
                    onShowSizeChange={PerPageChangeActivity}
                  />
                </div>
              </div>
              <div className="user text bulletin">
                <div className="title">帳號通知</div>
                <div className="notify_box">
                  <div className="notify_table_divbox">
                    <table className="notify_table">
                      <thead className="notify_table_thead">
                        <tr>
                          <th>公告</th>
                        </tr>
                      </thead>
                      <tbody className="notify_tbody">
                        {getDataAccount(current, size).map(
                          (accountNotifys, index) => {
                            return (
                              <tr key={accountNotifys.notify_id}>
                                <td className="notify_tbody_border">
                                  {accountNotifys.notify_state}
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="notify_change_page table-filter-info">
                  <Pagination
                    className="pagination-data notify_change_page_li"
                    onChange={PaginationChange}
                    total={accountNotifys.length}
                    current={current}
                    pageSize={size}
                    showSizeChanger={false}
                    itemRender={PrevNextArrow}
                    onShowSizeChange={PerPageChangeAccount}
                  />
                </div>
              </div>
              <div className="info text bulletin">
                <div className="title">系統通知</div>
                <div className="notify_box">
                  <div className="notify_table_divbox">
                    <table className="notify_table">
                      <thead className="notify_table_thead">
                        <tr>
                          <th>公告</th>
                        </tr>
                      </thead>
                      <tbody className="notify_tbody">
                        {getDataSystem(current, size).map(
                          (systemNotifys, index) => {
                            return (
                              <tr key={systemNotifys.notify_id}>
                                <td className="notify_tbody_border">
                                  {systemNotifys.notify_state}
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="notify_change_page table-filter-info">
                  <Pagination
                    className="pagination-data notify_change_page_li"
                    onChange={PaginationChange}
                    total={systemNotifys.length}
                    current={current}
                    pageSize={size}
                    showSizeChanger={false}
                    itemRender={PrevNextArrow}
                    onShowSizeChange={PerPageChangeSystem}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="notify_container">
          <div className="content">
            <input
              className="radio"
              type="radio"
              id="chat"
              name="slider"
              defaultChecked={true}
            />
            <div className="color_box"></div>
            <div className="list">
              <label
                htmlFor="chat"
                className="chat-btn notify-btn"
                tabIndex="1"
              >
                <span className="title">系統通知</span>
              </label>
            </div>
            <div className="text-content">
              <div className="chat text bulletin">
                <div className="title">系統通知</div>
                <div className="notify_box">
                  <div className="notify_table_divbox">
                    <table className="notify_table">
                      <thead className="notify_table_thead">
                        <tr>
                          <th>公告</th>
                        </tr>
                      </thead>
                      <tbody className="notify_tbody">
                        {getDataSystem(current, size).map(
                          (systemNotifys, index) => {
                            return (
                              <tr key={systemNotifys.notify_id}>
                                <td className="notify_tbody_border">
                                  {systemNotifys.notify_state}
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="notify_change_page table-filter-info">
                  <Pagination
                    className="pagination-data notify_change_page_li"
                    onChange={PaginationChange}
                    total={systemNotifys.length}
                    current={current}
                    pageSize={size}
                    showSizeChanger={false}
                    itemRender={PrevNextArrow}
                    onShowSizeChange={PerPageChangeSystem}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Notify;
