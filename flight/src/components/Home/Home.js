import React from 'react';
import  "../Home/home.css";

import PlaneImge from "../../assets/plane.png";

const Home = () => {
  return (
    <div className="home flex container">


      <div className="mainText">
        <h1>Create Ever-Lasting Memories With Us</h1>
      </div>

       <div className="homebg flex">

        <div className="imgDiv">

        </div>

        <img src={PlaneImge} alt="PlaneImg" className="planImg" ></img>


      </div> 
    </div>
  )
}

export default Home