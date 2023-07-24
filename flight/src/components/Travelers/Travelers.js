import React from 'react';
import "../../components/Travelers/travelers.css";

import paris from "../../assets/paris.jpg";

import traveler1 from "../../assets/user (1).jpg";

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>
          Top travelers of this month!
        </h2>

        <div className="travelersConatiner grid">

          <div className="singleTraveler">


            <img src={paris} alt="/" className="destinationImage" />

            <div className="travelerDetailes">
              <div className="travelerPicture">
                <img src={traveler1}  alt="/" className="person1Image" />
              </div>


              <div className="travelerName">
                <span>IsraTech</span>
                @inratech8
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travelers