import React from "react";
import "./AsAnInvestorRight.css";
import box1 from "../../../images/Group 6179.png";
import box2 from "../../../images/Group 6180.png";
import box3 from "../../../images/Group 3433.png";
import box4 from "../../../images/Group 3434.png";
function AsAnInvestorRight() {
  return (
    <div className="AsAnInvestorRight-cont">
      <div className="AsAnInvestorRight">
        <div className="box-top">
          <div className="box-top1">
            <div className="box-cont">
              <div className="box">
                <div className="box-img">
                  <img className="boxes" src={box1} />
                </div>
                <div className="box-title-cont">
                  <div className="box-title">Set Up Your Account</div>
                </div>
                <div className="box-title-desc-cont">
                  <div className="box-title-desc1">
                    Easily sign up with your social media
                  </div>
                  <div className="box-title-desc1">
                    account or create an account with your
                  </div>
                  <div className="box-title-desc1">email</div>
                </div>
              </div>
            </div>
            <div className="box-cont">
              {" "}
              <div className="box">
                <div className="box-img">
                  {" "}
                  <img className="boxes" src={box2} />
                </div>
                <div className="box-title-cont">
                  <div className="box-title">Search Opportunities</div>
                </div>
                <div className="box-title-desc-cont">
                  <div className="box-title-desc1">
                    Select a project opportunity and invest
                  </div>
                  <div className="box-title-desc1">
                    get monthly updates on your dashboard.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-top2">
            <div className="box-cont">
              {" "}
              <div className="box">
                <div className="box-img">
                  {" "}
                  <img className="boxes" src={box3} />
                </div>
                <div className="box-title-cont">
                  <div className="box-title">Fund A Project</div>
                </div>
                <div className="box-title-desc-cont">
                  <div className="box-title-desc1">
                    Your return on investment is deposited
                  </div>
                  <div className="box-title-desc1">
                    into your account at the end of the
                  </div>
                  <div className="box-title-desc1">cycle.</div>
                </div>
              </div>
            </div>
            <div className="box-cont">
              {" "}
              <div className="box">
                <div className="box-img">
                  {" "}
                  <img className="boxes" src={box4} />
                </div>
                <div className="box-title-cont">
                  <div className="box-title">Search Opportunities</div>
                </div>
                <div className="box-title-desc-cont">
                  <div className="box-title-desc1">
                    Select a project opportunity and invest
                  </div>
                  <div className="box-title-desc1">
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

export default AsAnInvestorRight;
