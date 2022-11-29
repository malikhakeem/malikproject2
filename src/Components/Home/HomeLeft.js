import React from "react";
import hdo from "../../images/Rectangle 88.png";
import hdi from "../../images/Polygon 2.png";
import "./HomeLeft.css";
function HomeLeft() {
  return (
    <div className="homeLeft-cont">
      <div className="homeLeft">
        <div className="home-left">
          <div className="home-tit-cont">
            <div className="home-tit-width">
              {" "}
              Real Estate Investment Opportunities For Property Development
            </div>
          </div>

          <div className="home-desc-cont">
            <div className="home-desc-width">
              PropCrowdy is a crowdfunding investment platform that empowers
              Nigerians to make smart investments in real estate
            </div>
          </div>

          <div className="home-btn-cont">
            <div className="home-btn-1">
              <button className="home-start">Get Started</button>
            </div>
            <div className="home-btn-2">
              <div className="hbd-cont">
                <div className="hdi-cont">
                  <img className="hdi" src={hdi} />
                </div>
                <div className="hdo-cont">
                  <div className="hdo"></div>
                </div>
              </div>

              <div className="seehowitworks">
                <a href="#">See How it Works</a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-right"></div>
      </div>
    </div>
  );
}

export default HomeLeft;
