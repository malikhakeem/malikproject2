import React from "react";
import "./AsADeveloperLeft.css";
import user1 from "../../../images/Group 6179.png";
import user2 from "../../../images/Group 6179.png";

function AsADeveloperLeft() {
  return (
    <div className="developerLeft-cont">
      <div className="developerLeft">
        <div className="developer-absolute-cont">
          <div className="dev-ab">
            {" "}
            <div className="developer-absolute1">
              <div className="dev-use-img-cont">
                <div className="dev-use-img">
                  <img className="user1" src={user1} />
                </div>
              </div>

              <div className="dev-absolute-flex">
                <div className="raising-cont">
                  <div className="raising">Raising</div>
                </div>

                <div className="dev-num-cont">
                  <div className="dev-num">
                    +<span>&#8358;</span>100,900,000
                  </div>
                </div>

                <div className="dev-absolute-textt">Property Developer</div>
              </div>
            </div>
          </div>
          <div className="dev-ab2">
            <div className="developer-absolute2">
              <div className="dev-use-img-cont">
                <div className="dev-use-img">
                  <img className="user1" src={user2} />
                </div>
              </div>

              <div className="dev-absolute-flex">
                <div className="raising-cont">
                  <div className="raising">Raising</div>
                </div>

                <div className="dev-num-cont">
                  <div className="dev-num">
                    +<span>&#8358;</span>83,900,000
                  </div>
                </div>

                <div className="dev-absolute-textt">Property Developer</div>
              </div>
            </div>
          </div>
        </div>

        <div className="dev-left-cont">
          <div className="dev-left">
            <div className="dev-title-cont">
              <div className="dev-title">Developer</div>
              <div className="dev-span">
                <div className="span-tit">Offer Document</div>
                <div className="span-text">verified</div>
              </div>
            </div>

            <div className="dev-left-form">
              <div className="company-intro-cont">
                <div className="company-intro-text">Company Introduction</div>
                <div className="company-btn-cont">
                  <input type="text" className="company-btn" />
                </div>
              </div>
              <div className="story-intro-cont">
                <div className="story-intro-text">Tell Your Story</div>
                <div className="story-btn-cont">
                  <input type="text" className="story-btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsADeveloperLeft;
