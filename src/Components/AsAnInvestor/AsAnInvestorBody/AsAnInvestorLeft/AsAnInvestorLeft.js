import React from "react";
import asin1 from "../../../../images/Ellipse 1868.png";
import asin2 from "../../../../images/Ellipse 1870.png";
import asin3 from "../../../../images/Ellipse 1872.png";
import circle1 from "../../../../images/Ellipse 1900.png";
import circle2 from "../../../../images/Ellipse 1899.png";
import "./AsAnInvestorLeft.css";
function AsAnInvestorLeft() {
  return (
    <div className="AsAnInvestorLeft-cont">
      <div className="AsAnInvestorLeft">
        <div className="lm">
          <div className="li">
            <div className="AsAnInvestor-cont">
              <div className="AsAnInvestor-img-cont">
                <div className="AsAnInvestor-img">
                  <img className="asin" src={asin1} />
                </div>
              </div>

              <div className="AsAnInvestor-flex-cont">
                <div className="AsAnInvestor-num-cont">
                  <div className="AsAnInvestor-num">
                    +<span>&#8358;</span>180,900
                  </div>
                </div>
                <div className="AsAnInvestor-work-cont">
                  <div className="AsAnInvestor-work">Investor</div>
                </div>
              </div>
            </div>
          </div>
          <div className="li">
            {" "}
            <div className="AsAnInvestor-cont">
              <div className="AsAnInvestor-img-cont">
                <div className="AsAnInvestor-img">
                  <img className="asin" src={asin2} />
                </div>
              </div>

              <div className="AsAnInvestor-flex-cont">
                <div className="AsAnInvestor-num-cont">
                  <div className="AsAnInvestor-num">
                    +<span>&#8358;</span>840,900
                  </div>
                </div>
                <div className="AsAnInvestor-work-cont">
                  <div className="AsAnInvestor-work">Investor</div>
                </div>
              </div>
            </div>
          </div>
          <div className="li">
            {" "}
            <div className="AsAnInvestor-cont">
              <div className="AsAnInvestor-img-cont">
                <div className="AsAnInvestor-img">
                  <img className="asin" src={asin3} />
                </div>
              </div>

              <div className="AsAnInvestor-flex-cont">
                <div className="AsAnInvestor-num-cont">
                  <div className="AsAnInvestor-num">
                    +<span>&#8358;</span>680,900
                  </div>
                </div>
                <div className="AsAnInvestor-work-cont">
                  <div className="AsAnInvestor-work">Investor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-1">
        <img className="c1" src={circle1} />
      </div>
      <div className="circle-2">
        <img className="cac2" src={circle2} />
      </div>
    </div>
  );
}

export default AsAnInvestorLeft;
