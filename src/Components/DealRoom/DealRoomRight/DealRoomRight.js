import React from "react";
import "./DealRoomRight.css";
function DealRoomRight() {
  return (
    <div className="DealRoomRight-cont">
      <div className="DealRoomRight">
        <div className="DealRoomRight-title">Our Deal Room</div>
        <div className="DealRoomRight-desc-cont">
          {" "}
          <div className="DealRoomRight-desc-cont1">
            Our deal room provides you all the documentary evidence you need to
            know about an investment.
          </div>
          <div className="DealRoomRight-desc-cont2">
            As part of our due-diligence verification we compile all necessary
            documents associated with each opportunity on your Platform.
          </div>
        </div>
      </div>

      <div className="DealRight-btn-cont">
        <button className="DealRight-btn">Learn More</button>
      </div>
    </div>
  );
}

export default DealRoomRight;
