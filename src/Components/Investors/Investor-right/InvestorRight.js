import React from "react";
import "./InvestorRight.css";
import googleplaystore from "../../../images/google-play-and-apple-app-store-logos-22 1 (1).png";
function InvestorRight() {
  return (
    <div className=" investor-right-cont">
      <div className="investor-right">
        <div className="investor-right-tit-cont">
          <div className="investor-right-tit">Join Real Estate Investors</div>
          <div className="investor-right-tit">investing realtime</div>
        </div>

        <div className="investor-right-desc-cont">
          <div className="investor-width">
            {" "}
            PropCrowdy is a crowdfunding investment platform that empowers
            Nigerians to make smart investments in real estate
          </div>
        </div>
        <div className="investor-right-btn-cont">
          <div className="investor-right-btn">
            <img className=" googleplaystore" src={googleplaystore} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorRight;
