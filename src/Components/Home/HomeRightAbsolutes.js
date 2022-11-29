import React from "react";
import "./HomeRightAbsolutes.css";

import rightsm1img from "../../images/Ellipse 40.png";
import inside from "../../images/image 4.png";
import rightsm3img from "../../images/Vector 1576.png";
function HomeRightAbsolutes() {
  return (
    <div className="homeRight-cont">
      <div className="homeRight">
        <div className="right-smls">
          <div className="mo">
            <div className="right-sm-cont">
              {" "}
              <div className="right-sm1">
                <div className="right-sm1-img">
                  <img className="sm1img" src={rightsm1img} />
                </div>
                <div className="right-sm-1-desc">
                  <div className="right-sm-1-num-cont">
                    <div className="right-sm-1-num">
                      + <span>&#8358;</span>28,900
                    </div>
                  </div>

                  <div className="right-sm-1-text">
                    Recieved from Investment
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="right-sm-2">
              <div className="right-sm-2-tit">Total Investment</div>
              <div className="right-sm-2-rates">
                <div className="right-sm-2-n">
                  {" "}
                  <span>&#8358;</span>50,200
                </div>
                <div className="right-sm-2-perc">+25%</div>
              </div>

              <div className="right-sm-2-chart">
                <div className="right-sm-2-flex">
                  <div className="left-num">
                    <div className="num">100</div>
                    <div className="num">50</div>
                    <div className="num">10</div>
                    <div className="num">0</div>
                  </div>

                  <div className="chart-flex">
                    <div className="chart-cont">
                      <div className="bar1-cont">
                        <div className="bar1"></div>
                      </div>
                      <div className="month">S</div>
                    </div>
                    <div className="chart-cont">
                      <div className="bar2-cont">
                        {" "}
                        <div className="bar2"></div>
                      </div>
                      <div className="month">M</div>
                    </div>
                    <div className="chart-cont">
                      <div className="bar3-cont">
                        {" "}
                        <div className="bar3"></div>
                      </div>
                      <div className="month">T</div>
                    </div>
                    <div className="chart-cont">
                      <div className="bar4-cont">
                        {" "}
                        <div className="bar4"></div>
                      </div>
                      <div className="month">W</div>
                    </div>
                    <div className="chart-cont">
                      <div className="bar5-cont">
                        {" "}
                        <div className="bar5"></div>
                      </div>
                      <div className="month">T</div>
                    </div>
                    <div className="chart-cont">
                      <div className="bar6-cont">
                        {" "}
                        <div className="bar6"></div>
                      </div>
                      <div className="month">F</div>
                    </div>
                    <div className="chart-cont">
                      <div className="bar7-cont">
                        {" "}
                        <div className="bar7"></div>
                      </div>
                      <div className="month">S</div>
                    </div>
                    <div className="chart-cont">
                      <div className="bar8-cont">
                        {" "}
                        <div className="bar8"></div>
                      </div>
                      <div className="month">S</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="as">
              <div className="right-sm-3">
                <div className="right-sm-3-title">Investment Progress</div>
                <div className="right-sm-3-line">
                  <img className="rightsming" src={rightsm3img} />
                </div>
              </div>
            </div>
          </div>
          <div className="lo">
            <div className="right-sm-4">
              <div className="inside-img">
                <img className="in" src={inside} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeRightAbsolutes;
