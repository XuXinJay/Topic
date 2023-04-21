import React from "react";
import "./Introduce.css";
import pic from "./img/1.jpg";

function Introduce() {
  return (
    <div className="introduce" style={{ maxWidth: 800, margin: "100px auto" }}>
      <div className="container_123">
        <div style={{ flex: 1 }}>
          <img src={pic} alt="" />
        </div>
        <div className="introduce_des">
          <p>
            11111111111111111111111111111111111111111111 <br />
            <br />
          </p>
        </div>
      </div>
      <div className="container_123">
        <div className="introduce_des">
          <p>11111111111111111111111111111111111111111111</p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={pic} alt="" />
        </div>
      </div>
      <div className="container_123">
        <div style={{ flex: 1 }}>
          <img src={pic} alt="" />
        </div>
        <div className="introduce_des">
          <p>11111111111111111111111111111111111111111111</p>
        </div>
      </div>
      <div className="container_123">
        <div className="introduce_des">
          <p>11111111111111111111111111111111111111111111</p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={pic} alt="" />
        </div>
      </div>
      <div className="container_123">
        <div style={{ flex: 1 }}>
          <img src={pic} alt="" />
        </div>
        <div className="introduce_des">
          <p>11111111111111111111111111111111111111111111</p>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
