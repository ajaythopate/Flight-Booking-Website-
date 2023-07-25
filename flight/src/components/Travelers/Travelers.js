import React from 'react';
import "../../components/Travelers/travelers.css";

import paris from "../../assets/paris.jpg";
import newyork from "../../assets/newyork.jpg";
import london from "../../assets/london.jpg";
import dubai from "../../assets/dubai.jpg";



import traveler1 from "../../assets/user (1).jpg";
import traveler2 from "../../assets/user(2).jpg";
import traveler3 from "../../assets/user(3).jpg";
import traveler4 from "../../assets/user(4).jpg";










const travelers = [
  {
    id: 1,
    destinationImage: paris,
    person1Image: traveler1,
    travelerName:'IsraTech',
    sociallink:'@inratech8'

  },
  {
    id: 2,
    destinationImage: newyork,
    person1Image: traveler2,
    travelerName: 'Wilson Lindsey',
    sociallink: '@wilsonlindesy'

  },
  {
    id: 3,
    destinationImage: london,
    person1Image: traveler3,
    travelerName: 'Nicole Web',
    sociallink: '@nicoleweb'

  },
  {
    id: 4,
    destinationImage: dubai,
    person1Image: traveler4,
    travelerName: 'Nara laner',
    sociallink: '@naralaner'

  },
]

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>
          Top travelers of this month!
        </h2>

        <div className="travelersConatiner grid">

 {
            travelers.map(({ id, destinationImage, travelerName, person1Image, sociallink }) => {
              return (
                <div key={id} className="singleTraveler">

            <img src={destinationImage} alt="/" className="destinationImage" />

            <div className="travelerDetailes">
              <div className="travelerPicture">
                <img src={person1Image}  alt="/" className="person1Image" />
              </div>


              <div className="travelerName">
                <span>{travelerName}</span>
                <p>{sociallink}</p>
              </div>
            </div>
          </div>
                
              )
            }
            )}
          
            
          

  
          

        </div>
      </div>
    </div>
  )
}

export default Travelers