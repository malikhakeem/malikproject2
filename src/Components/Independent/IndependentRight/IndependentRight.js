import React from "react";
import "./IndependentRight.css";
import inde1 from "../../../images/0d2bbf5cb6e45bd5af500f750dd8f699 1.png";
import indechart from "../../../images/Group 145.png";
function IndependentRight() {
  return (
    <div className="IndependentRight-cont">
      <div className="IndependentsubRight">
        <div className="inde-ab">
          {" "}
          <div className="inde-absolute1">
            <div className="inde-use-img-cont">
              <div className="inde-use-img">
                <img className="inde1" src={inde1} />
              </div>
            </div>

            <div className="inde-absolute-flex">
              <div className="inde-cont">
                <div className="inde">Appraising invesmment</div>
              </div>

              <div className="dev-absolute-text">Investment advisors</div>
            </div>
          </div>
        </div>

        <div className="IndependentRight">
          <div className="subright">
            <div className="IndependentRight-title-cont">
              <div className="IndependentRight-title">Independent</div>
              <div className="IndependentRight-title">Investment Committee</div>
              <div className="IndependentRight-title-spec">
                Risk acceptance criteria
              </div>
            </div>

            <div className="IndependentRight-img-comt">
              <img className="IndependentRight-img" src={indechart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndependentRight;
