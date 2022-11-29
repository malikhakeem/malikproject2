import React from "react";
import "./DealRoomLeft.css";
import dealbox1 from "../../../images/Rectangle 4368.png";
import dealbox2 from "../../../images/Rectangle 4369.png";
import dealbox3 from "../../../images/Rectangle 4370.png";
import dealbox4 from "../../../images/Rectangle 4371.png";
function DealRoomLeft() {
  return (
    <div className="DealRoomLeft-cont">
      <div className="DealRoomLeft">
        <div className="DealRoomLeft-title-cont">
          <div className="DealRoomLeft-title">Deal Room</div>
        </div>
        <div className="deal1-cont">
          <div className="deal1">
            {" "}
            <img className="deal1box" src={dealbox1} />
          </div>
        </div>

        <div className="DealRoomLeft-info">
          <div className="DealRoomLeft-info1">
            <div className="DealRoomLeft-info-tit">Location and Adress</div>

            <div className="DealRoomLeft-info-area-cont">
              <div className="DealRoomLeft-info-area">
                <input className="Dealroom-text-area" type="text" />
              </div>
            </div>
          </div>
          <div className="DealRoomLeft-info2">
            <div className="DealRoomLeft-info-tit">View Project Documents</div>

            <div className="DealRoomLeft-info-area-cont">
              <div className="DealRoomLeft-info-area">
                <input className="Dealroom-text-area" type="text" />
              </div>
            </div>
          </div>
        </div>

        <div className="deal2cont">
          <div className="deal2">
            <img className="deal2box" src={dealbox2} />
          </div>
          <div className="deal3">
            <img className="deal3box" src={dealbox3} />
          </div>
          <div className="deal4">
            <img className="deal4box" src={dealbox4} />
          </div>
        </div>

        <div className="DealLeftFooter">
          <a href="#">Verified By Regulatory Bodies</a>
        </div>
      </div>
    </div>
  );
}

export default DealRoomLeft;
