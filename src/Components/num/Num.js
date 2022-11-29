import React from "react";
import "./Num.css";
import num1 from "../../images/Vector (5).png";
import num2in from "../../images/Vector (2in).png";
import num2 from "../../images/Vector (1).png";
import num3 from "../../images/Vector (3).png";
import num3in from "../../images/Vector (3in).png";
function num() {
  return (
    <div className="num-cont">
      <div className="num">
        <div className="num-left">
          <div className="num-left-num">
            <img className="num1" src={num1} />
          </div>
          <div className="num-left-cont">
            <div className="num-left-desc-box">
              <div className="num-left-title">Safe</div>

              <div className="num-left-desc-cont">
                <div className="left-width">
                  Your card details and data will never be stored, transfered or
                  sold, so rest assured your transactions are safe with us
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="num-mid">
          <div className="mlo">
            <div className="ib">
              {" "}
              <div className="num-mid-in">
                <img className="num2in" src={num2in} />
              </div>
              <div className="num-mid-num">
                {" "}
                <img className="num2" src={num2} />
              </div>
            </div>
          </div>

          <div className="num-mid-cont">
            {" "}
            <div className="num-mid-desc-box">
              <div className="num-mid-title">Secured</div>

              <div className="num-mid-desc-cont">
                <div className="mid-width">
                  {" "}
                  PropCrowdy was built with top grade security features and our
                  payment processor is tested and trusted compliant
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="num-right">
          <div className="mlo">
            {" "}
            <div className="ib2">
              {" "}
              <div className="num-right-in">
                <img className="num3in" src={num3in} />
              </div>
              <div className="num-right-num">
                {" "}
                <img className="num3" src={num3} />
              </div>
            </div>
          </div>

          <div className="num-right-cont">
            {" "}
            <div className="num-right-desc-box">
              <div className="num-mid-title">Reliable</div>

              <div className="num-right-desc-cont">
                <div className="right-width">
                  PropCrowdy is stress free, reliable and safe.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default num;
