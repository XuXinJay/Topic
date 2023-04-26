import React, { useState, useEffect } from "react";
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";
import axios from "../api/axios";
import "./notify.css";

function Notify() {
  const [notifys, setNotifys] = useState([]);
  const [perPage, setPerPage] = useState(15);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(notifys.length / value);
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
        console.log(response.data);
        setNotifys(response.data);

        // 找到id為chat的元素並顯示出來
        const chatElement = document.querySelector("#chat");
        chatElement.classList.add("checked");
      } catch (error) {
        console.error(error);
      }
    }
    getNotify();
  }, []);

  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return notifys.slice((current - 1) * pageSize, current * pageSize);
  };

  return (
    <main className="main">
      <div className="container">
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
            <label htmlFor="chat" className="chat-btn notify-btn" tabIndex="1">
              <span className="title">活動通知</span>
            </label>
            <label htmlFor="user" className="user-btn notify-btn" tabIndex="1">
              <span className="title">帳號通知</span>
            </label>
            <label htmlFor="info" className="info-btn notify-btn" tabIndex="1">
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
                      {getData(current, size).map((data, index) => {
                        // if (data.notification_type === "活動") {
                        return (
                          <tr key={data.notify_id}>
                            <td className="notify_tbody_border">
                              {data.notify_state}
                            </td>
                          </tr>
                        );
                        // }
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="notify_change_page table-filter-info">
                <Pagination
                  className="pagination-data notify_change_page_li"
                  onChange={PaginationChange}
                  total={notifys.length}
                  current={current}
                  pageSize={size}
                  showSizeChanger={false}
                  itemRender={PrevNextArrow}
                  onShowSizeChange={PerPageChange}
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
                      {getData(current, size).map((data, index) => {
                        if (data.notification_type === "帳號") {
                          return (
                            <tr key={data.notify_id}>
                              <td className="notify_tbody_border">
                                {data.notify_state}
                              </td>
                            </tr>
                          );
                        }
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="notify_change_page table-filter-info">
                <Pagination
                  className="pagination-data notify_change_page_li"
                  onChange={PaginationChange}
                  total={notifys.length}
                  current={current}
                  pageSize={size}
                  showSizeChanger={false}
                  itemRender={PrevNextArrow}
                  onShowSizeChange={PerPageChange}
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
                      {getData(current, size).map((data, index) => {
                        if (data.notification_type === "系統") {
                          return (
                            <tr key={data.notify_id}>
                              <td className="notify_tbody_border">
                                {data.notify_state}
                              </td>
                            </tr>
                          );
                        }
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="notify_change_page table-filter-info">
                <Pagination
                  className="pagination-data notify_change_page_li"
                  onChange={PaginationChange}
                  total={notifys.length}
                  current={current}
                  pageSize={size}
                  showSizeChanger={false}
                  itemRender={PrevNextArrow}
                  onShowSizeChange={PerPageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Notify;
