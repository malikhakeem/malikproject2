import React from "react";
import "./AsADeveloperRight.css";
import box1 from "../../../images/Group 6179.png";
import box2 from "../../../images/Group 6180.png";
import box3 from "../../../images/Group 3433.png";
import box4 from "../../../images/Group 3434.png";
function AsADeveloperRight() {
  return (
    <div className="AsADeveloperRight-contt">
      <div className="AsAnDeveloperRight">
        <div className="devbox-top">
          <div className="devbox-top1">
            <div className="devbox-cont">
              <div className="devbox">
                <div className="devbox-img">
                  <img src={box1} />
                </div>
                <div className="devbox-title-cont">
                  <div className="devbox-title">Set Up Your Account</div>
                </div>
                <div className="devbox-title-desc-cont">
                  <div className="devbox-title-desc1">
                    Easily sign up with your social media
                  </div>
                  <div className="devbox-title-desc1">
                    account or create an account with your
                  </div>
                  <div className="devbox-title-desc1">email</div>
                </div>
              </div>
            </div>
            <div className="devbox-cont">
              {" "}
              <div className="devbox">
                <div className="devbox-img">
                  {" "}
                  <img src={box2} />
                </div>
                <div className="devbox-title-cont">
                  <div className="devbox-title">Search Opportunities</div>
                </div>
                <div className="devbox-title-desc-cont">
                  <div className="devbox-title-desc1">
                    Select a project opportunity and invest
                  </div>
                  <div className="devbox-title-desc1">
                    get monthly updates on your dashboard.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="devbox-top2">
            <div className="devbox-cont">
              {" "}
              <div className="devbox">
                <div className="devbox-img">
                  {" "}
                  <img src={box3} />
                </div>
                <div className="devbox-title-cont">
                  <div className="devbox-title">Fund A Project</div>
                </div>
                <div className="devbox-title-desc-cont">
                  <div className="devbox-title-desc1">
                    Your return on investment is deposited
                  </div>
                  <div className="devbox-title-desc1">
                    into your account at the end of the
                  </div>
                  <div className="devbox-title-desc1">cycle.</div>
                </div>
              </div>
            </div>
            <div className="devbox-cont">
              {" "}
              <div className="devbox">
                <div className="devbox-img">
                  {" "}
                  <img src={box4} />
                </div>
                <div className="devbox-title-cont">
                  <div className="devbox-title">Search Opportunities</div>
                </div>
                <div className="devbox-title-desc-cont">
                  <div className="devbox-title-desc1">
                    Select a project opportunity and invest
                  </div>
                  <div className="devbox-title-desc1">
                    get monthly updates on your dashboard.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsADeveloperRight;
