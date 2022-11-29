import React from "react";
import "./Investors.css";
import investor1 from "../../images/Ellipse 1872.png";
import investor2 from "../../images/Ellipse 1870.png";
import investor3 from "../../images/Ellipse 1868.png";
import outer from "../../images/Ellipse 1878.png";
import mid from "../../images/Sheild.png";
import inner from "../../images/Vector 1575.png";
import seeMore from "../../images/Icon.png";

function Investors() {
  return (
    <div className="investors-cont">
      <div className="investors">
        <div className="she">
          {" "}
          <div className="shield">
            <div className="one">
              <div className="inner">
                <img className="inner-img" src={inner} />
              </div>
              <div className="mid">
                <img className="mid-img" src={mid} />
              </div>
            </div>
            <div className="two">
              <div className="outer">
                {" "}
                <img className="outer-img" src={outer} />
              </div>
            </div>
          </div>
        </div>

        <div className="lop">
          <div className="investor1-cont">
            <div className="investor-1-tit">
              20,000<sup className="plus">+</sup>Investors
            </div>

            <div className="investor">
              <div className="investor-cont">
                <div className="investor-img">
                  <img className="rr" src={investor1} />
                </div>
                <div className="investor-info">
                  <div className="investor-name">Emaka Ndusi</div>
                  <div className="investor-work">Investor</div>
                </div>
              </div>
              <div className="investor-cont">
                <div className="investor-img">
                  <img className="rr" src={investor2} />
                </div>
                <div className="investor-info">
                  <div className="investor-name">Titilayo Otunba</div>
                  <div className="investor-work">Investor</div>
                </div>
              </div>
              <div className="investor-cont">
                <div className="investor-img">
                  <img className="rr" src={investor3} />
                </div>
                <div className="investor-info">
                  <div className="investor-name">Hassain Omarn</div>
                  <div className="investor-work">Investor</div>
                </div>
              </div>
            </div>
            <div className="investor-seemore-cont">
              <div className="investor-seemore">See More</div>
              <div className="more-icon">
                <img className="more" src={seeMore} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investors;
