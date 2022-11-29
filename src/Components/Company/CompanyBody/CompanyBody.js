import React from "react";
import "./CompanyBody.css";
import comp1 from "../../../images/Screenshot 2022-07-12 at 12.55 5 (1).png";
import comp2 from "../../../images/Screenshot 2022-07-12 at 12.55 2 (1).png";
function CompanyBody() {
  return (
    <div className="companyBody-cont">
      <div className="companyBody">
        <div className="company-cont">
          <div className="company">
            <img className="compp" src={comp1} />
          </div>
        </div>
        <div className="company-cont">
          <div className="company">
            <img className="compp" src={comp2} />
          </div>
        </div>
        <div className="company-cont">
          <div className="company">
            <img className="compp" src={comp1} />
          </div>
        </div>
        <div className="company-cont">
          <div className="company">
            <img className="compp" src={comp2} />
          </div>
        </div>
        <div className="company-cont">
          <div className="company">
            <img className="compp" src={comp1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyBody;
