import React from 'react';
import "../information/info.css";

import {RxCalendar} from "react-icons/rx";
import {BsBookmarkCheck} from "react-icons/bs";
import  { BsShieldCheck} from "react-icons/bs"

const Info = () => {
  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2> Travel to make memories all around the world</h2>
          <button className="btn">View All</button>
        </div>

        <div className="cardDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle"> Book & Realx</span>
            <p>You can also call airlines from your phone and book a flight ticket</p>

          </div>



          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className="icon" />
            </div>
            <span className="cardTitle"> Smart Checklist</span>
            <p>You can also call airlines from your phone and book a flight ticket</p>

          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className="icon" />
            </div>
            <span className="cardTitle"> Save More</span>
            <p>You can also call airlines from your phone and book a flight ticket</p>

          </div>





          
        </div>
      </div>
    </div>
  )
}

export default Info