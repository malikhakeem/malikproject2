import React from "react";
import "./Investor2.css";
import investor2img from "../../images/Profile.png";
function Investor2() {
  return (
    <div className="investor2-cont">
      <div className="investor2">
        <div className="investor2-inner">
          {" "}
          <div className="investor2-img">
            <img className="investor2img" src={investor2img} />
          </div>
          <div className="investor2-info">
            {" "}
            <div className="investor2-name">Ade Mikel</div>
            <div className="investor2-work">Investor</div>
          </div>
          <div className="investor2-btn-cont">
            <button className="investor2-btn">
              Join Our Investors Network
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investor2;
