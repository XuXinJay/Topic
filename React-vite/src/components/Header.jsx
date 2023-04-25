import React, { useState, useEffect } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import "./header.css";
import "./header_login.css";
import useAuthContext from "../context/AuthContext";
// import head from "./img/head.jpg";
import loaDing from "/src/loading.gif"


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfilePageOpen, setIsProfilePageOpen] = useState(false);
  const { user, logout, loading } = useAuthContext();

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function profilePage() {
    setIsProfilePageOpen(!isProfilePageOpen);
  }

  if (loading) {
    return <div className="center"><img src={loaDing} alt="" /></div>;
  }

  return (
    <header className="home_header">
      {user ? (
        <nav>
          <span className="home_title">
            <i className="uil uil-glass-martini" />
            桌游派對
          </span>
          <ul className="allUl">
            <li>
              <a href="/">聚會活動</a>
            </li>
            <li>
              <a href="/notify">
                通知
              </a>
            </li>
            <li>
              <a href="/gpt">
                AI客服
              </a>
            </li>
            <li>
              <a href="/guide">指南</a>
            </li>
            <li>
              <a href="/about">關於我們</a>
            </li>
          </ul>
          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            <i id="menubtn" className="uil uil-bars menubtn" />
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
                <a className="underline" onClick={logout} >
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
            <img className="login_head_img" src={user?.member_avatar}></img>
            <ul className={`mobile-login ${isProfilePageOpen ? "open" : ""}`}>
              <li className="profile-li">
                <img className="login_head_img" src={user?.member_avatar}></img>
              </li>
              <li className="profile-li">
                <span>{user?.name}</span>
              </li>
              <li className="profile-li">
                <a href="/member">查看個人頁面</a>
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
            <i className="uil uil-glass-martini" />
            桌游派對
          </span>
          <ul className="allUl">
            <li>
              <a href="/">所有活動</a>
            </li>
            <li>
              <a href="/notify">
                通知
              </a>
            </li>
            <li>
              <a href="/gpt">
                AI客服
              </a>
            </li>
            <li>
              <a href="/guide">指南</a>
            </li>
            <li>
              <a href="/about">關於我們</a>
            </li>
          </ul>
          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            <i id="menubtn" className="uil uil-bars menubtn" />
            <ul className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
              <li className="mobile-li">
                <a className="underline" href="/Login">
                  會員登入/註冊
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
            會員/註冊
            <i className="uil uil-user-circle" />
          </a>
        </nav>
      )}
    </header>

  )

}

export default Header;
