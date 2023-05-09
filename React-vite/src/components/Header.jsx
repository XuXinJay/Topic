import React, { useState, useEffect } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import "./header.css";
import "./header_login.css";
import useAuthContext from "../context/AuthContext";
// import head from "./img/head.jpg";
import loaDing from "/src/loading.gif";
import LOGO from "./img/LOGO.png";
import DarkMode from "./DarkMode/DarkMode";
import axios from "../api/axios";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfilePageOpen, setIsProfilePageOpen] = useState(false);
  const { user, logout, loading } = useAuthContext();
  const [reviewState, setReviewState] = useState([]);

  /* ------------------ */
  // console.log(user.id)
  useEffect(() => {
    async function getActivity() {
      try {
        const responseState = await axios.get(`api/fetchOrganizeAndJoinData`);
        setReviewState(responseState.data);
      } catch (error) {
        console.error(error);
      }
    }
    getActivity();
  }, []);

  // console.log(reviewState);

  /* ------------------ */
  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function profilePage() {
    setIsProfilePageOpen(!isProfilePageOpen);
  }

  function handleClick() {
    const remindCircle = document.querySelector(".remind_circle");
    if (remindCircle) {
      if (remindCircle.classList.contains("remind_hidden")) {
        remindCircle.classList.remove("remind_hidden");
      } else {
        remindCircle.classList.add("remind_hidden");
      }
    }
  }

  function handleClickMenu() {
    const remindCircle = document.querySelector(".remind_circle_menu");
    if (remindCircle) {
      if (remindCircle.classList.contains("remind_hidden_menu")) {
        remindCircle.classList.remove("remind_hidden_menu");
      } else {
        remindCircle.classList.add("remind_hidden_menu");
      }
    }
  }

  if (loading) {
    return (
      <div className="center">
        <img src={loaDing} alt="" />
      </div>
    );
  }

  return (
    <header className="home_header">
      {user ? (
        <nav>
          <span className="home_title">
            <img className="logo_img" src={LOGO} alt="LOGO" />
          </span>
          <ul className="allUl">
            <li>
              <DarkMode />
            </li>
            <li className="allUl_li">
              <a href="/">聚會活動</a>
            </li>
            <li className="allUl_li">
              <a href="/notify">通知</a>
            </li>
            <li className="allUl_li">
              <a href="/gpt">AI客服</a>
            </li>
            <li className="allUl_li">
              <a href="/guide">指南</a>
            </li>
            <li className="allUl_li">
              <a href="/about">關於我們</a>
            </li>
          </ul>
          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            {reviewState.some(
              (state) =>
                state.member_id === user.id && state.join_state === "審核中"
            ) ? (
              <div className="remind_circle_menu">
                <i
                  className="uil uil-bell remind_circle_icon_menu"
                  onClick={handleClickMenu}
                ></i>
              </div>
            ) : null}
            <i
              id="menubtn"
              className="uil uil-bars menubtn"
              onClick={handleClickMenu}
            />
            <ul className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
              <li className="mobile-li">
                <a className="mobile_activity" href="/activity">
                  發起活動
                  <i className="uil uil-plus"></i>
                </a>
              </li>
              <li className="mobile-li">
                <a className="underline" href="/member">
                  會員頁面
                </a>
                {reviewState.some(
                  (state) =>
                    state.member_id === user.id && state.join_state === "審核中"
                ) ? (
                  <div className="remind_circle_close">
                    <i className="uil uil-bell remind_circle_icon_close"></i>
                  </div>
                ) : null}
              </li>
              <li className="mobile-li">
                <a className="underline" href="/">
                  聚會活動
                </a>
              </li>
              <li className="mobile-li">
                <a className="underline" href="/notify">
                  通知
                </a>
              </li>
              <li className="mobile-li">
                <a className="underline" href="/gpt">
                  AI客服
                </a>
              </li>
              <li className="mobile-li">
                <a className="underline" href="/guide">
                  指南
                </a>
              </li>
              <li className="mobile-li">
                <a className="underline" href="/about">
                  關於我們
                </a>
              </li>
              <li className="mobile-li">
                <a className="underline" onClick={logout}>
                  登出
                </a>
              </li>
            </ul>
          </div>

          <a className="home_activity" href="/activity">
            發起活動
            <i className="uil uil-plus"></i>
          </a>

          <div className="profilePage_box" onClick={profilePage}>
            {/* 以下變更的部分*/}
            <div className="login_head_img_box">
              <img
                className="login_head_img"
                src={user?.member_avatar}
                onClick={handleClick}
              />

              {reviewState.some(
                (state) =>
                  state.member_id === user.id && state.join_state === "審核中"
              ) ? (
                <div className="remind_circle">
                  <i
                    className="uil uil-bell remind_circle_icon"
                    onClick={handleClick}
                  ></i>
                </div>
              ) : null}
            </div>
            {/* 以上為變更的部分*/}

            <ul className={`mobile-login ${isProfilePageOpen ? "open" : ""}`}>
              <li className="profile-li">
                <img className="login_head_img" src={user?.member_avatar}></img>
              </li>
              <li className="profile-li">
                <span>{user?.name}</span>
              </li>
              <li className="profile-li">
                <a href="/member">查看個人頁面</a>
                {reviewState.some(
                  (state) =>
                    state.member_id === user.id && state.join_state === "審核中"
                ) ? (
                  <div className="remind_circle_open">
                    <i className="uil uil-bell remind_circle_icon_open"></i>
                  </div>
                ) : null}
              </li>
              <li className="profile-li">
                <a onClick={logout}>登出</a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav>
          <span className="home_title">
            <img className="logo_img" src={LOGO} alt="LOGO" />
          </span>
          <ul className="allUl">
            <li>
              <DarkMode />
            </li>
            <li className="allUl_li">
              <a href="/">所有活動</a>
            </li>
            <li className="allUl_li">
              <a href="/notify">通知</a>
            </li>
            <li className="allUl_li">
              <a href="/gpt">AI客服</a>
            </li>
            <li className="allUl_li">
              <a href="/guide">指南</a>
            </li>
            <li className="allUl_li">
              <a href="/about">關於我們</a>
            </li>
          </ul>
          <div className="hamburger-icon">
            <i
              id="menubtn"
              className="uil uil-bars menubtn"
              onClick={toggleMobileMenu}
            />
            <ul className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
              <li className="mobile-li">
                <a className="underline" href="/Login">
                  登入/註冊
                </a>
              </li>
              <li className="mobile-li">
                <a className="underline" href="/">
                  所有活動
                </a>
              </li>
              <li className="mobile-li">
                <a className="underline" href="/notify">
                  通知
                </a>
              </li>
              <li className="mobile-li">
                <a className="underline" href="/gpt">
                  AI客服
                </a>
              </li>
              <li className="mobile-li">
                <a className="underline" href="/guide">
                  指南
                </a>
              </li>
              <li className="mobile-li">
                <a className="underline" href="/about">
                  關於我們
                </a>
              </li>
            </ul>
          </div>
          <a className="home_user" href="/Login">
            登入/註冊
            <i className="uil uil-user-circle" />
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
