import React from 'react';
import "../../components/support/support.css";

import gridImage from "../../assets/gridImg.jpg";
const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">

        <div className="titlesDiv">
          <small>Travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans , see what to expect along the journey !</p>
        </div>


        <div className="infoDiv grid">
          <div className="textDiv grid">

            <div className="singleInfo">
              <span className="number">01</span>              <h4>Travel requirements for Dubai</h4>
              <p>Find help with booking and travel plans , see what to expect along the journey  to your favourite destination !</p>
            </div>

            <div className="singleInfo">
              <span className="numberColorOne">02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>Find help with booking and travel plans , see what to expect along the journey  to your favourite destination !</p>
            </div>



            <div className="singleInfo">
              <span className="number">03</span>
             <h4>Multi-risk travel insurance</h4>
              <p>Find help with booking and travel plans , see what to expect along the journey  to your favourite destination !</p>
            </div>

            </div>
        </div>


        <div className="imgDiv">
          <img src={gridImage}    alt="/" className="gridImg"></img>
        </div>
      </div>
    </div>
  )
}

export default Support