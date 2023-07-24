import React from 'react';
import "../Lounge/lounge.css";

import imageGride from "../../assets/grid2.jpg";

const Lounge = () => {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imageGride} alt="/" className="gridImg" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
        </div>

        <div className="grids grid">

          <div className="singleGrid">
            <span className="gridTitle">
              Help through the airport
            </span>
            <p>
              you can also call airlines from your phone and book a flight tocket to one of your favorite destination.
            </p>
            </div>

          <div className="singleGrid">
            <span className="gridTitle">
            Priority Boarding     
       </span>
            <p>
              you can also call airlines from your phone and book a flight tocket to one of your favorite destination.
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">
              Care on the flight
            </span>
            <p>
              you can also call airlines from your phone and book a flight tocket to one of your favorite destination.
            </p>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Lounge