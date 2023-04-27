import React from "react";
import "./Introduce.css";
import pic from "./img/1.jpg";

function Introduce() {
  return (
    <div className="introduce" style={{ maxWidth: 800, margin: "100px auto" }}>
      <div className="container_123">
        <div className="introduce_1">
          <img src={pic} alt="" />
        </div>
        <hr />
        <div className="introduce_des">
          <p>
            <h2><b>一場從餐桌開始的社交革命！感謝各大媒體的支持和報導</b> </h2> 
            Eatgether交友app從2016至今，成為台灣最大的聚餐交友平台，2020年達100萬用戶，累積500,000場聚會，每個月新增20,000場活動。除了Apple和Google雙平台最佳社交app的交友軟體推薦外，感謝各大媒體與好朋友的報導，一起來更認識Eatgether吧！
            <br /><br />
            <h4>美麗佳人</h4>
            用一頓飯拉近距離，專訪「Eatgether」APP，創辦人Mask：「人們的幸福都因相聚而來。」<hr /><br />
            <h4> INSIDE 硬塞的網路趨勢觀察</h4>
            目標 2022 年東亞最大！Eatgether 慶百萬會員舉辦「金聚獎」<hr /><br />
            <h4>年代新聞</h4>
            疫情期間社交活動逆勢成長一倍？正妹用Eatgether揪團APP相約陌生網友一起吃喝玩樂兼辦公！<hr /><br />
            <h4>報導者</h4>
            世紀之疫下的親密關係：被演算法推升的數位愛情，撫慰了誰？<hr /><br />
            <h4>聯合新聞網</h4>
            如何找山友一起爬山？登山控新手必看秘訣，陌生人也能輕鬆揪<hr /><br />
            <h4>天下雜誌</h4>
            3大類便利好用App，讓大人吃得好、交友、運動和生活都更方便<hr /><br />
            <h4>LINE TODAY</h4>
            斯卡羅引爆原民熱 奧丁丁攜手社交平台Eatgether 開揪原民文化實境解謎《謎霧環山2》<hr /><br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
