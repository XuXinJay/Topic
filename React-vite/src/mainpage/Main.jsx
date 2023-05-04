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
import slide1 from "./image/03.jpg";
import slide2 from "./image/02.jpg";
import slide3 from "./image/01.jpg";

function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activities, setActivities] = useState([]);
  const [filterByLocation, setFilterByLocation] = useState("");
  const [filteredActivities, setFilteredActivities] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [currentSlide]);

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

  const handleFilterClick = (location) => {
    const filtered = activities.filter((activity) =>
      activity.activity_place.includes(location)
    );
    setFilterByLocation(location);
    setFilteredActivities(filtered);
  };

  const activitiesToShow = filterByLocation ? filteredActivities : activities;

  return (
    <main className="main_pages_j">
      <section className="carousel">
        <div className="slideshow-container">
          <div className={`mySlides fade ${currentSlide === 0 ? "show" : ""}`}>
            <img src={slide1} alt="Slide 1" />
          </div>
          <div className={`mySlides fade ${currentSlide === 1 ? "show" : ""}`}>
            <img src={slide2} alt="Slide 1" />
          </div>
          <div className={`mySlides fade ${currentSlide === 2 ? "show" : ""}`}>
            <img src={slide3} alt="Slide 1" />
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
        <button className="hotplace" onClick={() => handleFilterClick("台北")}>
          <img className="hotimg" src={taipei101} alt="" />
          <div className="hottext">台北</div>
        </button>
        <button className="hotplace" onClick={() => handleFilterClick("新北")}>
          <img className="hotimg" src={newTaipei} alt="" />
          <div className="hottext">新北</div>
        </button>
        <button className="hotplace" onClick={() => handleFilterClick("桃園")}>
          <img className="hotimg" src={taoyuan} alt="" />
          <div className="hottext">桃園</div>
        </button>
        <button className="hotplace" onClick={() => handleFilterClick("台中")}>
          <img className="hotimg" src={taichung} alt="" />
          <div className="hottext">台中</div>
        </button>
        <button className="hotplace" onClick={() => handleFilterClick("台南")}>
          <img className="hotimg" src={tainan} alt="" />
          <div className="hottext">台南</div>
        </button>
        <button className="hotplace" onClick={() => handleFilterClick("高雄")}>
          <img className="hotimg" src={kaohsiung} alt="" />
          <div className="hottext">高雄</div>
        </button>
      </section>

      <section className="tabs_box">
        <div className="main_tabs">
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
                {activitiesToShow.map((activity) => {
                  return (
                    <a
                      className="grid-item"
                      href={`/event/${activity.activity_id}`}
                      key={activity.activity_id}
                    >
                      <img className="grid-img" src={activity.activity_image} alt="" />
                      <div className="grid-text">
                        <h6>主題:{activity.activity_name}</h6>
                        <span className="grid_text_txt">
                          地點:{activity.activity_place}
                        </span>
                        <span className="grid_text_txt">
                          時間:{activity.activity_partyTime}
                        </span>
                        <span className="grid_text_txt">
                          創建人:{activity.name}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab1"
          />
          <label htmlFor="tab1" className="tabs_label">
            電影
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activitiesToShow.map((activity) => {
                  if (activity.movie === 1) {
                    return (
                      <a
                        className="grid-item"
                        href={`/event/${activity.activity_id}`}
                        key={activity.activity_id}
                      >
                        <img className="grid-img" src={activity.activity_image} alt="" />
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
                {activitiesToShow.map((activity) => {
                  if (activity.sports === 1) {
                    return (
                      <a
                        className="grid-item"
                        href={`/event/${activity.activity_id}`}
                        key={activity.activity_id}
                      >
                        <img className="grid-img" src={activity.activity_image} alt="" />
                        <div className="grid-text">
                          <h6>主題:{activity.activity_name}</h6>
                          <span className="grid_text_txt">
                            地點:{activity.activity_place}
                          </span>
                          <span className="grid_text_txt">
                            時間:{activity.activity_partyTime}
                          </span>
                          <span className="grid_text_txt">
                            創建人:{activity.name}
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
            id="tab3"
          />
          <label htmlFor="tab3" className="tabs_label">
            桌遊
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activitiesToShow.map((activity) => {
                  if (activity.board_game === 1) {
                    return (
                      <a
                        className="grid-item"
                        href={`/event/${activity.activity_id}`}
                        key={activity.activity_id}
                      >
                        <img className="grid-img" src={activity.activity_image} alt="" />
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
            id="tab4"
          />
          <label htmlFor="tab4" className="tabs_label">
            聚餐
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activitiesToShow.map((activity) => {
                  if (activity.dine_together === 1) {
                    return (
                      <a
                        className="grid-item"
                        href={`/event/${activity.activity_id}`}
                        key={activity.activity_id}
                      >
                        <img className="grid-img" src={activity.activity_image} alt="" />
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
            id="tab5"
          />
          <label htmlFor="tab5" className="tabs_label">
            其他
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activities.map((activity) => {
                  if (
                    activity.movie === 0 &&
                    activity.sports === 0 &&
                    activity.board_game === 0 &&
                    activity.dine_together === 0
                  ) {
                    return (
                      <a
                        className="grid-item"
                        href={`/event/${activity.activity_id}`}
                        key={activity.activity_id}
                      >
                        <img className="grid-img" src={activity.activity_image} alt="" />
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
        </div>
      </section>
    </main>
  );
}

export default Main;
