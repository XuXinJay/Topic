import React, { useState, useEffect } from "react";
import "./allstyle.css";
import axios from "../api/axios";

import taipei101 from "./image/taipei-101.jpg";
import newTaipei from "./image/new-taipei.jpg";
import taichung from "./image/taichung.jpg";
import tainan from "./image/台南.jpg";
import taoyuan from "./image/桃園.jpg";
import kaohsiung from "./image/高雄.jpg";

// 輪播圖
import slide1 from "./image/slide1.jpg";
import slide2 from "./image/slide2.jpg";
import slide3 from "./image/slide3.jpg";

// 首頁內容圖，接好後端即可刪除
import img1 from "./image/test/img1.jpg";
import img2 from "./image/test/img2.jpg";
import img3 from "./image/test/img3.jpg";
import img4 from "./image/test/img4.jpg";

function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activities, setActivities] = useState([]);

  const nextSlide = () => {
    if (currentSlide === 2) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(2);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    async function getActivity() {
      try {
        const response = await axios.get("api/OrganizeActivity");
        console.log(response.data);
        setActivities(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getActivity();
  }, []);

  return (
    <main>
      <section className="carousel">
        <div className="slideshow-container">
          <div className={`mySlides fade ${currentSlide === 0 ? "show" : ""}`}>
            <img
              src={slide1}
              style={{ width: "100%", height: "auto", overflow: "hidden" }}
              alt="Slide 1"
            />
          </div>
          <div className={`mySlides fade ${currentSlide === 1 ? "show" : ""}`}>
            <img
              src={slide2}
              style={{ width: "100%", height: "auto", overflow: "hidden" }}
              alt="Slide 1"
            />
          </div>
          <div className={`mySlides fade ${currentSlide === 2 ? "show" : ""}`}>
            <img
              src={slide3}
              style={{ width: "100%", height: "auto", overflow: "hidden" }}
              alt="Slide 1"
            />
          </div>
          <div className="test" style={{ textAlign: "center" }}>
            <span className="dot" onClick={() => setCurrentSlide(0)} />
            <span className="dot" onClick={() => setCurrentSlide(1)} />
            <span className="dot" onClick={() => setCurrentSlide(2)} />
          </div>
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </section>

      <h1 className="hottitle">熱門地點</h1>
      <section className="hotbox">
        <a href="#" className="hotplace">
          <img className="hotimg" src={taipei101} alt="" />
          <div className="hottext">台北</div>
        </a>
        <a href="#" className="hotplace">
          <img className="hotimg" src={newTaipei} alt="" />
          <div className="hottext">新北</div>
        </a>
        <a href="#" className="hotplace">
          <img className="hotimg" src={taoyuan} alt="" />
          <div className="hottext">桃園</div>
        </a>
        <a href="#" className="hotplace">
          <img className="hotimg" src={taichung} alt="" />
          <div className="hottext">台中</div>
        </a>
        <a href="#" className="hotplace">
          <img className="hotimg" src={tainan} alt="" />
          <div className="hottext">台南</div>
        </a>
        <a href="#" className="hotplace">
          <img className="hotimg" src={kaohsiung} alt="" />
          <div className="hottext">高雄</div>
        </a>
      </section>

      <section className="tabs_box">
        <div className="tabs">
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab0"
            defaultChecked="true"
          />
          <label htmlFor="tab0" className="tabs_label">
            全部
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activities.map((activity) => (
                  <a
                    className="grid-item"
                    href="/event"
                    key={activity.activity_id}
                  >
                    <img className="grid-img" src={img4} alt="" />
                    <div className="grid-text">
                      <h6>主題:{activity.activity_name}</h6>
                      <span className="grid_text_txt">
                        地點:{activity.activity_place}
                      </span>
                      <span className="grid_text_txt">
                        時間:{activity.activity_partyTime}
                      </span>
                      <span className="grid_text_txt">
                        會員:{activity.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab1"
            defaultChecked="true"
          />
          <label htmlFor="tab1" className="tabs_label">
            電影
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activities.map((activity) => {
                  if (activity.activity_name === '電影') {
                    return (
                      <a
                        className="grid-item"
                        href="/event"
                        key={activity.activity_id}
                      >
                        <img className="grid-img" src={img4} alt="" />
                        <div className="grid-text">
                          <h6>主題:{activity.activity_name}</h6>
                          <span className="grid_text_txt">
                            地點:{activity.activity_place}
                          </span>
                          <span className="grid_text_txt">
                            時間:{activity.activity_partyTime}
                          </span>
                          <span className="grid_text_txt">
                            會員:{activity.name}
                          </span>
                        </div>
                      </a>
                    );
                  } else {
                    // 不是電影主題的活動不顯示
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab2"
          />
          <label htmlFor="tab2" className="tabs_label">
            運動
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activities.map((activity) => (
                  <a
                    className="grid-item"
                    href="/event"
                    key={activity.activity_id}
                  >
                    <img className="grid-img" src={img2} alt="" />
                    <div className="grid-text">
                      <h6>主題:{activity.activity_name}</h6>
                      <span className="grid_text_txt">
                        地點:{activity.activity_place}
                      </span>
                      <span className="grid_text_txt">
                        時間:{activity.activity_partyTime}
                      </span>
                      <span className="grid_text_txt">
                        會員:{activity.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab3"
          />
          <label htmlFor="tab3" className="tabs_label">
            桌遊
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activities.map((activity) => (
                  <a
                    className="grid-item"
                    href="/event"
                    key={activity.activity_id}
                  >
                    <img className="grid-img" src={img3} alt="" />
                    <div className="grid-text">
                      <h6>主題:{activity.activity_name}</h6>
                      <span className="grid_text_txt">
                        地點:{activity.activity_place}
                      </span>
                      <span className="grid_text_txt">
                        時間:{activity.activity_partyTime}
                      </span>
                      <span className="grid_text_txt">
                        會員:{activity.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab4"
          />
          <label htmlFor="tab4" className="tabs_label">
            聚餐
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activities.map((activity) => (
                  <a
                    className="grid-item"
                    href="/event"
                    key={activity.activity_id}
                  >
                    <img className="grid-img" src={img4} alt="" />
                    <div className="grid-text">
                      <h6>主題:{activity.activity_name}</h6>
                      <span className="grid_text_txt">
                        地點:{activity.activity_place}
                      </span>
                      <span className="grid_text_txt">
                        時間:{activity.activity_partyTime}
                      </span>
                      <span className="grid_text_txt">
                        會員:{activity.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab5"
          />
          <label htmlFor="tab5" className="tabs_label">
            其他
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activities.map((activity) => (
                  <a
                    className="grid-item"
                    href="/event"
                    key={activity.activity_id}
                  >
                    <img className="grid-img" src={img1} alt="" />
                    <div className="grid-text">
                      <h6>主題:{activity.activity_name}</h6>
                      <span className="grid_text_txt">
                        地點:{activity.activity_place}
                      </span>
                      <span className="grid_text_txt">
                        時間:{activity.activity_partyTime}
                      </span>
                      <span className="grid_text_txt">
                        會員:{activity.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
